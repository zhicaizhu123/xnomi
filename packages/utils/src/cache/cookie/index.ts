/**
 * @module Cookie
 */

import { json2Params, params2Json, removeParamsKeys } from '../../transfer'
import Cookies from 'js-cookie'

/**
 * 指定命名空间的cookie类
 *
 * @category cache
 * @class Cookie
 */
export class Cookie {
  private namespace!: string

  /**
   * 创建一个Cookie实例。
   *
   * @category cache
   * @param {string} namespace 命名空间
   */
  constructor(namespace) {
    this.namespace = namespace
  }

  /**
   * 获取当前命名空间的cookie值
   *
   * @category cache
   * @param {string} key key值
   * @return {string}
   */
  getCookie(key: string) {
    const data = Cookies.get(this.namespace)
    if (!data) return ''
    const json = params2Json(data)
    return json[key] || ''
  }

  /**
   * 设置当前命名空间的cookie值
   *
   * @category cache
   * @param {string} key 键值
   * @param {string} value 设置值
   * @param {Cookies.CookieAttributes} [options] cookie的配置项
   */
  setCookie(key: string, value: string, options?: Cookies.CookieAttributes) {
    const data = Cookies.get(this.namespace)
    const json = data ? params2Json(data) : {}
    json[key] = value
    Cookies.set(this.namespace, json2Params(json), options)
  }

  /**
   * 移除当前命名空间的cookie值
   *
   * @category cache
   * @param {string} key 键值
   * @param {Cookies.CookieAttributes} [options] cookie的配置项
   */
  removeCookie(key: string, options?: Cookies.CookieAttributes) {
    const data = Cookies.get(this.namespace)
    if (!data) return
    const res = removeParamsKeys(data, [key])
    Cookies.set(this.namespace, res, options)
  }

  /**
   * 清空当前命名空间的cookie
   *
   * @category cache
   * @param {Cookies.CookieAttributes} [options] cookie的配置项
   */
  clearCookie(options?: Cookies.CookieAttributes) {
    Cookies.remove(this.namespace, options)
  }
}

/**
 * 创建指定命名空间的cookie
 *
 * @category cache
 * @param {string} [namespace='xiao-nomi'] 命名空间
 * @return {Cookie}
 */
export function createCookie(namespace = 'xiao-nomi') {
  return new Cookie(namespace)
}
