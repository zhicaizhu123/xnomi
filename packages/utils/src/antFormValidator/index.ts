/**
 * @module antFormValidator
 */

import {
  isNotEmptyString,
  isCharacters,
  isEMail,
  isIdCard,
  isLandline,
  isLink,
  isNormalChar,
  isPost,
  isQQ,
  isTel,
  isWechat,
  isPassword,
} from '../rules'

/**
 * 校验器
 *
 * @param {Fn} validator 检验函数
 * @param {string} message 校验不通过提示
 * @param {boolean} [required=true] 是否为必选
 * @return {(_: any, value: string) => Promise<void>}
 */
export function validatorFn(validator: Fn, message: string, required = true) {
  return function (_, value: string) {
    if (required) {
      if (!validator(value)) {
        return Promise.reject(message)
      }
    } else {
      if (value && value.length > 0 && !validator(value)) {
        return Promise.reject(message)
      }
    }
    return Promise.resolve()
  }
}

/**
 * QQ号校验
 *
 * @function
 * @param {boolean} [required=true] 是否为必选
 * @return {Promise<void>}
 */
export const qqValidator = (required = true) => validatorFn(isQQ, '请输入正确的QQ号', required)

/**
 * 微信号校验
 *
 * @function
 * @param {boolean} [required=true] 是否为必选
 * @return {Promise<void>}
 */
export const wechatValidator = (required = true) =>
  validatorFn(isWechat, '请输入正确的微信号', required)

/**
 * 有效链接校验
 *
 * @function
 * @param {boolean} [required=true] 是否为必选
 * @return {Promise<void>}
 */
export const linkValidator = (required = true) => validatorFn(isLink, '请输入有效链接', required)

/**
 * 有效身份证校验
 *
 * @function
 * @param {boolean} [required=true] 是否为必选
 * @return {Promise<void>}
 */
export const idCardValidator = (required = true) =>
  validatorFn(isIdCard, '请输入有效的身份证号', required)

/**
 * 有效邮箱校验
 *
 * @function
 * @param {boolean} [required=true] 是否为必选
 * @return {Promise<void>}
 */
export const emailValidator = (required = true) => validatorFn(isEMail, '请输入有效邮箱', required)

/**
 * 手机号校验
 *
 * @function
 * @param {boolean} [required=true] 是否为必选
 * @return {Promise<void>}
 */
export const telValidator = (required = true) => validatorFn(isTel, '请输入有效手机号', required)

/**
 * 固话校验
 */
export const landlineValidator = (required = true) =>
  validatorFn(isLandline, '请输入有效固话', required)

/**
 * 邮政编码校验
 *
 * @function
 * @param {boolean} [required=true] 是否为必选
 * @return {Promise<void>}
 */
export const postValidator = (required = true) =>
  validatorFn(isPost, '请输入有效邮政编码', required)

/**
 * 汉字校验
 *
 * @function
 * @param {boolean} [required=true] 是否为必选
 * @return {Promise<void>}
 */
export const charactersValidator = (required = true) =>
  validatorFn(isCharacters, '请输入汉字', required)

/**
 * 汉字+数字+字母
 *
 * @function
 * @param {boolean} [required=true] 是否为必选
 * @return {Promise<void>}
 */
export const normalCharValidator = (required = true) =>
  validatorFn(isNormalChar, '请输入汉字+数字+字母', required)

/**
 * 是否为非空字符串
 *
 * @function
 * @param {boolean} [required=true] 是否为必选
 * @return {Promise<void>}
 */
export const notEmptyStringValidator = (required = true) =>
  validatorFn(isNotEmptyString, '不能全部为空字符', required)

/**
 * 是否为合法密码
 *
 * @function
 * @param {boolean} [required=true] 是否为必选
 * @return {Promise<void>}
 */
export const isPasswordValidator = (required = true) =>
  validatorFn(isPassword, '密码长度6-16位，至少包含字母和数字，支持!@#$%^&*符号', required)
