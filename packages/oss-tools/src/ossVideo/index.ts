/**
 * @module ossVideo
 */

import { isLink, isNumber, isUnDef } from '@xnomi/is'

/**
 * 处理阿里云视频封面参数接口
 */
export interface OssVideoParams {
  /**
   * 指定截图时间。
   */
  t: number
  /**
   * 指定截图宽度，如果指定为0，则自动计算。
   */
  w: number
  /**
   * 指定截图高度，如果指定为0，则自动计算；如果w和h都为0，则输出为原视频宽高。
   */
  h: number
  /**
   * 指定截图模式，不指定则为默认模式，根据时间精确截图。如果指定为fast，则截取该时间点之前的最近的一个关键帧。
   */
  m?: 'fast'
  /**
   * 指定输出图片的格式。
   */
  f: 'jpg' | 'png'
  /**
   * 指定是否根据视频信息自动旋转图片。如果指定为auto，则在截图生成之后根据视频信息进行自动旋转。
   */
  ar?: 'auto'
}

function validate(url: string, params: OssVideoParams) {
  if (!isLink(url)) {
    throw new Error('请传递有效的url')
  }
  if (url.indexOf('.aliyuncs.com') === -1 && url.indexOf('.cdn.ling-shi.com') === -1) {
    throw new Error('链接必须为阿里oss链接')
  }
  if (!isNumber(params.t) || params.t < 0) {
    throw new Error('截图时间[t]必须为大于或等于0的数字')
  }
  if (!isNumber(params.w) || params.w < 0) {
    throw new Error('截图宽度[w]必须为大于或等于0的数字')
  }
  if (!isNumber(params.h) || params.h < 0) {
    throw new Error('截图高度[h]必须为大于或等于0的数字')
  }
  if (!isUnDef(params.m) && params.m !== 'fast') {
    throw new Error('截图模式[m]如果填写，则必须为"fast"')
  }
  if (!['jpg', 'png'].includes(params.f)) {
    throw new Error('输出图片的格式[f]必须为"jpg"或"png"')
  }
  if (!isUnDef(params.ar) && params.ar !== 'auto') {
    throw new Error('是否根据视频信息自动旋转图片[ar]如果填写，则必须为"auto"')
  }
}

/**
 * oss视频处理方法
 *
 * @param {string} url 需要处理的url
 * @param {OssVideoParams} params 处理参数
 * @return {string}
 */
export function ossVideo(url: string, params: OssVideoParams) {
  try {
    validate(url, params)
  } catch (err: any) {
    console.warn(err?.message)
    return url
  }
  const path = `${url}?x-oss-process=video/snapshot`
  const config = Object.keys(params).reduce((acc, key) => {
    acc += `,${key}_${params[key]}`
    return acc
  }, '')
  return path + config
}
