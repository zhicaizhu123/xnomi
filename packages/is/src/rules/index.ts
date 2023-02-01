/**
 * @module rules
 */

export interface RuleFn {
  (val: any): boolean
}

/**
 * 是否匹配提供的正则表达式规则
 */
export const isRule: (rule: RegExp) => RuleFn = (rule) => (val) => rule.test(val)

/**
 * 是否为有效链接
 */
export const isLink = isRule(
  /((https|http|ftp|rtsp|mms)?:\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)/
)

/**
 * 是否为合法邮箱
 */
export const isEMail = isRule(
  /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
)

/**
 * 是否为合法手机号码（通用，限制没有这么大）
 */
export const isTel = isRule(/^(\+?0?86-?)?1(3|4|5|6|7|8|9)\d{9}$/)

/**
 * 是否为合法手机号码（严格限制）
 */
export const isStrictTel = isRule(
  /^(\+?0?86-?)?[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6,7])|([7][0-8])|([8][0-9])|([9][1,5,8,9]))[0-9]{8}$/
)

/**
 * 是否为合法固话
 */
export const isLandline = isRule(/^(\d{3,4}-)?\d{7,8}$/)

/**
 * 是否为合法身份证
 */
export const isIdCard = isRule(
  /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
)

/**
 * 是否为合法QQ
 */
export const isQQ = isRule(/^[1-9][0-9]{4,11}$/)

/**
 * 是否为合法微信
 */
export const isWechat = isRule(/^[a-zA-Z0-9][a-zA-Z0-9_-]{5,19}$/)

/**
 * 是否为邮政编码
 */
export const isPost = isRule(/^[1-9]\d{5}(?!\d)$/)

/**
 * 是否为汉字
 */
export const isCharacters = isRule(/^[\u4e00-\u9fa5]+$/)

/**
 * 是否为 汉字+数字+字母
 */
export const isNormalChar = isRule(/^[A-Za-z0-9\u4e00-\u9fa5]+$/)

/**
 * 字符串含有非空字符
 */
export const isNotEmptyString = isRule(/[^\s\t\n]/)
