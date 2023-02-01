import { Checkpoint } from 'ali-oss'

/**
 * oss上传文件token签名配置信息
 */
export interface OssParams {
  /**
   * 域名
   */
  region: string
  bucket: string
  accessKeyId: string
  accessKeySecret: string
  stsToken: string
  endpoint?: string
  /**
   * 过期时间
   */
  expiration?: string | number
}

/**
 * oss上传文件token签名配置信息（可扩展）
 */
export interface OssConfigModel extends OssParams {
  /**
   * 其他参数
   */
  [x: string]: any
}

/**
 * 已上传文件数据接口
 */
export interface UploadFileItem {
  /**
   * 文件名称
   */
  name: string
  /**
   * 文件远程名称
   */
  remoteName: string
  /**
   * 文件大小，单位：Byte
   */
  size: number
  /**
   * 文件链接
   */
  url: string
}

/**
 * 校验的结果接口
 */
export interface ValidateResult {
  /**
   * 是否检验成功
   */
  success: boolean
  /**
   * 检验不通过原因
   */
  errors: string[]
}

/**
 * 上传的配置信息
 */
export interface UploadFileOption {
  /**
   * 存储目录
   */
  dir?: string
  /**
   * 每个分片大小(byte)
   */
  partSize?: number
  /**
   * 同时上传的分片数
   */
  parallel?: number
  /**
   * 最大大小
   */
  maxSize?: number
  /**
   * 最大数
   */
  maxCount?: number
  /**
   * 上传类型
   */
  accept?: string
  /**
   * 最大尺寸大小
   * - 格式：width*height
   */
  maxScreen?: string
  /**
   * 上传前用户获取oss配置信息
   */
  getStsConfig: () => Promise<OssConfigModel>
  /**
   * 自定义检验
   */
  validator?: (file: File | File[]) => Promise<boolean> | boolean
  /**
   * 校验失败回调
   */
  onValidateError?: (errors: string[]) => void
  /**
   * 开始上传回调
   */
  onStart?: () => void
  /**
   * 上传中回调
   */
  onProgress?: (p: number, checkpoint: Checkpoint) => void
  /**
   * 上传成功回调
   */
  onSuccess?: (data: UploadFileItem) => void
  /**
   * 上传失败回调
   */
  onError?: (err: any) => void
  /**
   * 取消上传回调
   */
  onAbort?: (filename: string, uploadId: string) => void
  /**
   * 暂停上传回调
   */
  onStop?: () => void
  /**
   * 续传
   */
  onResume?: () => void
}
