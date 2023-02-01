/**
 * @module upload
 */

import OSS, { Checkpoint } from 'ali-oss'
import { UploadFileOption, OssConfigModel, OssParams } from './model'
import { validateFileCount, validateFileSize, validateFileType } from './validator'
import { randomString } from '../helper'
import { getFileSuffix, toFileSize } from '../file'

export * from './validator'
export * from './model'

const defaultOption: Partial<UploadFileOption> = {
  // 默认大于500Kb的文件基于进行分片上传
  partSize: 1024 * 512,
  // 分片上传情况下支持同时上传3片
  parallel: 3,
  // 目录名称
  dir: 'links',
  // 是否开启cdn
  openCdn: false,
}

/**
 * 阿里云ali-oss上传类
 *
 * @class Upload
 */
export class Upload {
  private stsConfig: OssParams | {} = {}

  private checkpoints: Recordable<Checkpoint> = {}

  private option!: UploadFileOption

  private getStsConfig!: () => Promise<OssConfigModel>

  private client!: OSS

  /**
   * 创建Upload的实例。
   * @param {UploadFileOption} option 上传配置项
   */
  constructor(option: UploadFileOption) {
    this.option = { ...defaultOption, ...option }
    this.getStsConfig = option.getStsConfig
  }

  /**
   * 检验上传文件
   *
   * @private
   * @param {(File | File[])} file
   * @return {string[]}
   */
  private validate(file: File | File[]) {
    const countValid = validateFileCount(file, this.option.maxCount)
    const typeValid = validateFileType(file, this.option.accept)
    const sizeValid = validateFileSize(file, this.option.maxSize)
    const errors: string[] = []
    if (!countValid) {
      errors.push(`文件数不能超过${this.option.maxCount}`)
    }
    if (!typeValid) {
      errors.push(`文件类型必须为${this.option.accept}`)
    }
    if (!sizeValid) {
      errors.push(`文件大小不能超过${toFileSize(this.option.maxSize as number)}`)
    }
    return errors
  }

  /**
   * 上传前校验
   *
   * @param {(File | File[])} file 待上传文件
   * @return {Promise<boolean>}
   */
  async beforeUploadValidate(file: File | File[]) {
    const errors = this.validate(file)
    if (errors?.length) {
      this.option.onValidateError && this.option.onValidateError(errors)
      return false
    } else if (this.option.validator) {
      const valid = await this.option.validator(file)
      return valid
    }
    return true
  }

  /**
   * 刷新上传的token签名配置信息
   *
   * @private
   * @return {Promise<Recordable>}
   */
  private async refreshSTSToken() {
    const { region, bucket, accessKeyId, accessKeySecret, stsToken, endpoint } =
      await this.getStsConfig()
    return {
      region,
      bucket,
      accessKeyId,
      accessKeySecret,
      stsToken,
      endpoint,
    }
  }

  /**
   * 初始化上传配置和OSS Client
   *
   * @private
   * @return {Promise<void>}
   */
  private async initOssClient() {
    // 获取 STS 凭证
    const { region, bucket, accessKeyId, accessKeySecret, stsToken, endpoint, expiration } =
      await this.getStsConfig()
    this.stsConfig = {
      region,
      bucket,
      accessKeyId,
      accessKeySecret,
      stsToken,
      endpoint,
      expiration,
    }
    // 初始化OSS Client
    this.client = new OSS({
      region,
      bucket,
      accessKeyId,
      accessKeySecret,
      stsToken,
      endpoint,
      refreshSTSToken: this.refreshSTSToken.bind(this),
      refreshSTSTokenInterval: 3 * 60 * 1000,
    })
  }

  /**
   * 处理单个和多个文件
   *
   * @param {(File[] | File)} file 待上传文件
   * @return {File[]} 返回文件列表
   */
  private fileHandler(file: File | File[]) {
    return !(file instanceof File) ? Array.from(file) : [file]
  }

  /**
   * 获取待上传文件对应的oss文件名
   *
   * @param {File} file 待上传文件
   * @return {string}
   */
  private getUploadFileName(file: File) {
    const suffix = getFileSuffix(file.name)
    // 随机文件名
    const dirname = this.option.dir ? `${this.option.dir}/` : ''
    return `${dirname}${Date.now()}_${randomString()}.${suffix}`
  }

  /**
   * 上传文件
   *
   * @param {(File[] | File)} file 待上传文件
   * @return {Promise<void>}
   */
  async upload(file: File[] | File, shouldValidate = true) {
    if (shouldValidate) {
      const valid = await this.beforeUploadValidate(file)
      if (!valid) return
    }
    const files = this.fileHandler(file)
    files.forEach((file) => {
      if (this.option.partSize && file.size < this.option.partSize) {
        this.commonUpload(file)
      } else {
        this.multipartUpload(file)
      }
    })
  }

  /**
   * 普通上传文件（不分片）
   *
   * @param {File} file 待上传文件
   * @return {Promise<void>}
   */
  async commonUpload(file: File) {
    // if (!this.client) {
    await this.initOssClient()
    // }
    const filename = this.getUploadFileName(file)
    this.client
      .put(filename, file)
      .then((result) => {
        const { name, url, res } = result
        const data = { name: file.name, remoteName: name, url, size: file.size || res.size }
        this.option.onSuccess && this.option.onSuccess(data)
      })
      .catch((err) => {
        this.option.onError && this.option.onError(err)
      })
  }

  /**
   * 分片上传处理器，用户分片上传和断点续传
   *
   * @param {string} filename 文件名称
   * @param {File} file 源文件
   * @param {OSS.Checkpoint|undefined} [checkpoint]
   */
  multipartUploadHandler(filename: string, file: File, checkpoint?: Checkpoint) {
    this.client
      .multipartUpload(filename, file, {
        parallel: this.option.parallel,
        partSize: this.option.partSize,
        progress: this.onMultipartUploadProgress.bind(this),
      })
      .then((result) => {
        if (checkpoint) {
          delete this.checkpoints[checkpoint.uploadId]
        }
        const { bucket, region, endpoint } = this.stsConfig as OssParams
        const domain = this.option.openCdn
          ? 'https://s.cdn.ling-shi.com'
          : `https://${bucket}.${endpoint || region}${endpoint ? '' : '.aliyuncs.com'}`
        const url = `${domain}/${filename}`
        const { name, res } = result
        const data = { name: file.name, remoteName: name, url, size: file.size || res.size }
        this.option.onSuccess && this.option.onSuccess(data)
      })
      .catch((err) => {
        this.option.onError && this.option.onError(err)
      })
  }

  /**
   * 分片上传
   *
   * @param {File} file 待上传文件
   * @return {Promise<void>}
   */
  async multipartUpload(file: File) {
    // if (!this.client) {
    await this.initOssClient()
    // }
    const filename = this.getUploadFileName(file)
    this.multipartUploadHandler(filename, file)
  }

  /**
   * 上传进度回调
   *
   * @param {number} progress 上传进度
   * @param {Checkpoint} checkpoint
   */
  async onMultipartUploadProgress(progress: number, checkpoint: Checkpoint) {
    this.option.onProgress && this.option.onProgress(progress, checkpoint)
    this.checkpoints[checkpoint.uploadId] = checkpoint
    // // 判断STS Token是否将要过期，过期则重新获取
    // const { expiration } = this.stsConfig as OssParams
    // if (expiration && dayjsUtil(expiration).subtract(1, 'minute').isBefore(dayjsUtil())) {
    //   if (this.client) (this.client as any).cancel()
    //   await this.initOssClient()
    //   this.resumeMultipartUpload()
    // }
  }

  /**
   * 断点续传
   */
  resumeMultipartUpload() {
    Object.values(this.checkpoints).forEach((checkpoint) => {
      const { uploadId, file } = checkpoint
      this.multipartUploadHandler(uploadId, file, checkpoint)
    })
  }

  /**
   * 指定某个文件取消上传
   */

  /**
   * 取消上传
   *
   * @param {string} name 名称
   * @param {string} uploadId 上传ID
   */
  abort(name: string, uploadId: string) {
    this.client.abortMultipartUpload(name, uploadId)
    this.option.onAbort && this.option.onAbort(name, uploadId)
  }

  /**
   * 暂停上传
   */
  stop() {
    if (this.client) (this.client as any).cancel()
    this.option.onStop && this.option.onStop()
  }

  /**
   * 续传
   */
  resume() {
    if (this.client) this.resumeMultipartUpload()
  }
}
