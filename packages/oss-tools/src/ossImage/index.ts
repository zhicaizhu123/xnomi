/**
 * @module ossImage
 */

import { throwNoKeyError, isLink, decamelize } from '@xnomi/utils'
import {
  OssMethodsType,
  OssResize,
  OssBlur,
  OssCircle,
  OssCrop,
  OssIndexcrop,
  OssRotate,
  OssBright,
  OssContrast,
  OssSharpen,
  OssFormat,
  OssAutoOrient,
  OssInterlace,
  OssQuality,
  OssRoundedCorners,
  OssWatermark,
  ApiHandler,
} from './model'

export * from './model'

/**
 * 用a拼接obj里面的每对kv，并用b分割
 *
 * @param {Record<string, string | number>} obj
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function joinStr(obj: Record<string, string | number>): string {
  return Object.keys(obj)
    .reduce((acc, cur) => {
      if (obj[cur]) return (acc += `,${cur}_${obj[cur]}`)
      return (acc += `,${cur}`)
    }, '')
    .slice(1)
}

/**
 * 处理阿里云图片类
 *
 * @class OssImage
 */
export class OssImage {
  /**
   * 处理的方法参数对象
   */
  methodKeys: Partial<Record<OssMethodsType, Record<string, string | number>>> = {}

  private methodHandler(method: OssMethodsType) {
    return (key: any = throwNoKeyError(`方法：${method}，需要至少一个参数`), value?: any) => {
      if (typeof key === 'object') {
        this.methodKeys[method] = key
      } else {
        if (!this.methodKeys[method]) {
          this.methodKeys[method] = {}
        }
        this.methodKeys[method]![key] = value
      }
      return this
    }
  }

  constructor(private originUrl: string) {
    this.originUrl = originUrl
  }

  /**
   * 设置尺寸
   *
   * @type {ApiHandler<OssResize>}
   * @memberof OssImage
   */
  resize: ApiHandler<OssResize> = this.methodHandler('resize')

  /**
   * 设置模糊度
   *
   * @type {ApiHandler<OssBlur>}
   * @memberof OssImage
   */
  blur: ApiHandler<OssBlur> = this.methodHandler('blur')

  /**
   * 设置圆形
   *
   * @type {ApiHandler<OssCircle>}
   * @memberof OssImage
   */
  circle: ApiHandler<OssCircle> = this.methodHandler('circle')

  /**
   * 截取
   *
   * @type {ApiHandler<OssCrop>}
   * @memberof OssImage
   */
  crop: ApiHandler<OssCrop> = this.methodHandler('crop')

  /**
   * 切割
   *
   * @type {ApiHandler<OssIndexcrop>}
   * @memberof OssImage
   */
  indexcrop: ApiHandler<OssIndexcrop> = this.methodHandler('indexcrop')

  /**
   * 旋转
   *
   * @type {ApiHandler<OssRotate>}
   * @memberof OssImage
   */
  rotate: ApiHandler<OssRotate> = this.methodHandler('rotate')

  /**
   * 指定图片的亮度
   *
   * @type {ApiHandler<OssBright>}
   * @memberof OssImage
   */
  bright: ApiHandler<OssBright> = this.methodHandler('bright')

  /**
   * 指定图片的亮度
   *
   * @type {ApiHandler<OssContrast>}
   * @memberof OssImage
   */
  contrast: ApiHandler<OssContrast> = this.methodHandler('contrast')

  /**
   * 设置锐化效果的强度
   *
   * @type {ApiHandler<OssSharpen>}
   * @memberof OssImage
   */
  sharpen: ApiHandler<OssSharpen> = this.methodHandler('sharpen')

  /**
   * 格式转换
   *
   * @type {ApiHandler<OssFormat>}
   * @memberof OssImage
   */
  format: ApiHandler<OssFormat> = this.methodHandler('format')

  /**
   * 设置水印
   *
   * @type {ApiHandler<OssWatermark>}
   * @memberof OssImage
   */
  watermark: ApiHandler<OssWatermark> = this.methodHandler('watermark')

  /**
   * 渐进显示
   *
   * @type {ApiHandler<OssInterlace>}
   * @memberof OssImage
   */
  interlace: ApiHandler<OssInterlace> = this.methodHandler('interlace')

  /**
   * 设置质量
   *
   * @type {ApiHandler<OssQuality>}
   * @memberof OssImage
   */
  quality: ApiHandler<OssQuality> = this.methodHandler('quality')

  /**
   * 设置圆角半径
   *
   * @type {ApiHandler<OssRoundedCorners>}
   * @memberof OssImage
   */
  roundedCorners: ApiHandler<OssRoundedCorners> = this.methodHandler('roundedCorners')

  /**
   * 指定图片是否进行自适应旋转
   *
   * @type {ApiHandler<OssAutoOrient>}
   * @memberof OssImage
   */
  autoOrient: ApiHandler<OssAutoOrient> = this.methodHandler('autoOrient')

  /**
   * 获取处理后的链接
   */
  get url() {
    if (!isLink(this.originUrl)) {
      console.warn('请传递有效的url')
      return this.originUrl
    }
    const url = new URL(this.originUrl)
    const formatParams = Object.keys(this.methodKeys).reduce((acc, method) => {
      const str = joinStr(this.methodKeys[method])
      if (!str) return acc
      return (acc += `/${decamelize(method)},${str}`)
    }, '')
    url.searchParams.set('x-oss-process', `image${formatParams}`)
    return url.href
  }
}

/**
 * oss图片处理方法
 *
 * @param {string} url 需要处理的url
 * @return {OssImage} 处理oss url类的实例
 */
export function ossImage(url: string) {
  return new OssImage(url)
}
