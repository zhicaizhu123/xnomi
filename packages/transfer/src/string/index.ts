import { isTel } from '@xnomi/is'

/**
 * 驼峰转中横线
 *
 * @category 字符串处理
 * @param {string} str 需要转换的字符串
 * @return {string}
 */
export function decamelize(str: string): string {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}

/**
 * 加密手机号
 *
 * @category 字符串处理
 * @param {string} mobile 手机号
 * @return {string}
 */
export function encryptMobile(mobile: string) {
  if (mobile && isTel(mobile)) {
    return mobile.slice(0, 3) + '****' + mobile.slice(7)
  }
  return mobile
}

