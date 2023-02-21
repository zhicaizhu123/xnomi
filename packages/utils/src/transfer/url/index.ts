import { removeKeys } from '../data'

/**
 * 返回协议 + 链接域名
 *
 * @category url
 * @param {string} url 源链接字符串
 * @param {boolean} [includePath=false] 是否返回出参数外的字符串
 * @return {string}
 */
export function getBaseUrl(url: string, includePath = false): string {
  if (includePath) return url.split('?')[0]
  const reg = new RegExp('^(((\\w+):)?\\/\\/([^\\/:]*)(?::(\\d+))?)(.*)')
  reg.exec(url)
  return RegExp.$1
}

/**
 * 将链接参数转为JSON格式返回
 *
 * @category url
 * @param {string} search 解析字符串
 * @return {Record<string, string>}
 */
export function parseUrlParams(search: string) {
  const result: Record<string, string> = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (res, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    result[name] = val
    return res
  })
  return result
}

/**
 * 将链接参数转为JSON格式返回
 *
 * @category url
 * @param {string} [url=location.href] 源链接字符串
 * @return {Record<string, string>}
 */
export function params2Json(url = location.href) {
  const search = url.substring(url.lastIndexOf('?') + 1)
  return parseUrlParams(search)
}

/**
 * 获取链接指定字段名的值
 *
 * @category url
 * @param {T} key 指定获取的字段名
 * @param {*} [url=location.href] 源链接字符串
 * @return {*}  {(T extends string ? (string | undefined) : Record<string, string>)}
 */
export function getUrlParam<T extends string[] | string>(
  key: T,
  url = location.href
): T extends string ? string | undefined : Record<string, string> {
  const params = params2Json(url)
  if (typeof key === 'string') {
    return params[key] as any
  } else {
    const res: Record<string, string> = {}
    key.forEach((item) => {
      res[item] = params[item]
    })
    return res as any
  }
}

/**
 * 转换json为链接参数字符串
 *
 * @category url
 * @param {T} json 需要解析的json
 * @return {*}  {string}
 */
export function json2Params<T extends Record<string, any>>(json: T) {
  return Object.keys(json)
    .map((key) => {
      if (json[key] === void 0 || json[key] === null) return ''
      return `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`
    })
    .filter((item) => item !== '')
    .join('&')
}

/**
 * 添加参数到链接上
 *
 * @category url
 * @param {T} params 需要添加的参数
 * @param {string} [url=location.href] 源链接字符串
 * @return {*}  {string}
 */
export function addUrlParams<T extends Record<string, any>>(
  params: T,
  url = location.href
): string {
  const path = url.split('?')[0]
  const json = params2Json(url)
  const paramStr = json2Params({ ...json, ...params })
  return `${path}?${paramStr}`
}

/**
 * 删除链接指定的参数
 *
 * @category url
 * @param {(string[] | string)} params 如果为字符串时，多个参数需要用英文','分割，如果不传或者传的时空字符串或者空数组则删除全部参数
 * @param {string} [url=location.href] 源链接字符串
 * @return {string}
 */
export function removeUrlParams(params: string[] | string, url = location.href): string {
  const path = url.split('?')[0]
  if (!params || (Array.isArray(params) && !params.length)) return path
  let json = params2Json(url)
  json = removeKeys(json, Array.isArray(params) ? params : params.match(/\b\w+\b/g) || [])
  const paramStr = json2Params(json)
  return paramStr ? `${path}?${paramStr}` : path
}

/**
 * 去除参数中的某些字段
 *
 * @category url
 * @param {string} str 参数字符串
 * @param {(string[] | string)} keys 需要去除的字段
 * @return {string}
 */
export function removeParamsKeys(str: string, keys: string[] | string) {
  if (!str) return str
  let json = params2Json(str)
  json = removeKeys(json, Array.isArray(keys) ? keys : keys.match(/\b\w+\b/g) || [])
  const paramStr = json2Params(json)
  return paramStr
}

/**
 * 获取层级级域名
 *
 * @category url
 * @param {number} [level=1] 层级，默认获取一级域名
 * @return {string}
 */
export function getLevelDomain(level = 1) {
  return (location.hostname || location.host)
    .split('.')
    .slice(-1 - level)
    .join('.')
}

/**
 * http协议转换成https协议
 *
 * @category url
 * @param {string} url 待处理的文本
 * @return {string}
 */
export function http2https(url: string) {
  return url.replace(/^http:\/\//, 'https://')
}
