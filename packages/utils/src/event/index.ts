/**
 * @module event
 */

export * from './resize'

/**
 * 监听事件
 *
 * @param {HTMLElement} element 监听事件元素
 * @param {string} event 事件名称
 * @param {Fn} handler 回调
 * @param {(boolean | AddEventListenerOptions)} options 配置参数
 */
export function on(
  element: Window | Document | HTMLElement | Element,
  event: string,
  handler: Fn,
  options?: boolean | AddEventListenerOptions
) {
  if (element && event && handler) {
    element.addEventListener(event, handler, options)
  }
}

/**
 * 注销事件
 *
 * @param {HTMLElement} element 注销事件元素
 * @param {string} event 事件名称
 * @param {Fn} handler 回调
 * @param {(boolean | AddEventListenerOptions)} options 配置参数
 */
export function off(
  element: Window | Document | HTMLElement | Element,
  event: string,
  handler: Fn,
  options?: boolean | AddEventListenerOptions
) {
  if (element && event && handler) {
    element.removeEventListener(event, handler, options)
  }
}

/**
 * 只监听一次事件
 *
 * @param {HTMLElement} element 监听事件元素
 * @param {string} event 事件名称
 * @param {EventListener} fn 回调
 */
export function once(element: HTMLElement, event: string, fn: EventListener): void {
  const listener = function (this: any, ...args: unknown[]) {
    if (fn) {
      fn.apply(this, args)
    }
    off(element, event, listener)
  }
  on(element, event, listener)
}
