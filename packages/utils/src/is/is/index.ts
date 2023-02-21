/**
 * @module is
 */

const toString = Object.prototype.toString

/**
 * 是否为指定类型
 *
 * @category is
 * @param {unknown} val 要判断的值
 * @param {string} type 类型
 * @return {boolean}
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

/**
 * 是否已经定义
 *
 * @category is
 * @template T
 * @param {T} [val] 要判断的值
 * @return {boolean}  {val is T}
 */
export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined'
}

/**
 * 是否为未定义
 *
 * @category is
 * @template T
 * @param {T} [val] 要判断的值
 * @return {boolean}  {val is T}
 */
export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val)
}

/**
 *  是否为对象，不包含null
 *
 * @category is
 * @param {*} val 要判断的值
 * @return {boolean}  {val is Record<any, any>}
 */
export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object')
}

/**
 * 是否为空数据
 * - 空数组
 * - 空字符串
 * - 空map
 * - 空set
 * - 空对象，不包含null
 *
 * @category is
 * @param {T} val 要判断的值
 * @return {boolean}  {val is T}
 */
export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val)) {
    return val.length === 0
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0
  }

  return false
}

/**
 * 是否为日期格式
 *
 * @category is
 * @param {unknown} val 要判断的值
 * @return {boolean}  {val is Date}
 */
export function isDate(val: unknown): val is Date {
  return is(val, 'Date')
}

/**
 * 是否为null
 *
 * @category is
 * @param {unknown} val 要判断的值
 * @return {boolean}  {val is null}
 */
export function isNull(val: unknown): val is null {
  return val === null
}

/**
 * 是否为undefined或null
 *
 * @category is
 * @param {unknown} val 要判断的值
 * @return {boolean}  {(val is null | undefined)}
 */
export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val)
}

/**
 * 是否为undefined或null
 *
 * @category is
 * @param {unknown} val 要判断的值
 * @return {boolean}  {(val is null | undefined)}
 */
export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val)
}

/**
 * 是否为Number
 *
 * @category is
 * @param {unknown} val 要判断的值
 * @return {boolean}  {val is number}
 */
export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}

/**
 * 是否为Promise
 *
 * @category is
 * @param {unknown} val 要判断的值
 * @return {boolean}  {val is Promise<T>}
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

/**
 * 是否为字符串
 *
 * @category is
 * @param {unknown} val 要判断的值
 * @return {boolean}  {val is string}
 */
export function isString(val: unknown): val is string {
  return is(val, 'String')
}

/**
 * 是否为Function
 *
 * @param {unknown} val 要判断的值
 * @return {boolean}  {val is Function}
 */
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

/**
 * 是否为布偶值
 *
 * @param {unknown} val 要判断的值
 * @return {boolean}  {val is boolean}
 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean')
}

/**
 * 是否为正则表达式
 *
 * @category is
 * @param {unknown} val 要判断的值
 * @return {boolean}  {val is RegExp}
 */
export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp')
}

/**
 * 是否为数组
 *
 * @category is
 * @param {*} val 要判断的值
 * @return {boolean}  {val is Array<any>}
 */
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val)
}

/**
 * 是否有window对象
 *
 * @category is
 * @param {*} val 要判断的值
 * @return {boolean}  {val is Window}
 */
export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window')
}

/**
 * 是否为html元素
 *
 * @category is
 * @param {unknown} val 要判断的值
 * @return {boolean}  {val is Element}
 */
export function isElement(val: unknown): val is Element {
  return isObject(val) && !!val.tagName
}
