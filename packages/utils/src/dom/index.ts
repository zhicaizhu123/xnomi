/**
 * @module DOM
 */

import { ViewportOffsetResult } from './types'

/**
 * 动态加载js文件
 *
 * @param {string} url 需要加载的 js 链接
 * @return {(Promise<void | Error>)} 返回的是个Promise对象
 */
export function loadJs(url: string, params?: Recordable): Promise<void | Error> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    if (params) {
      Object.keys(params).forEach((key) => {
        script.setAttribute(key, params[key])
      })
    }
    script.onload = function () {
      resolve()
    }
    script.onerror = function () {
      reject(new Error('加载失败'))
    }
    script.src = url
    document.body.appendChild(script)
  })
}

/**
 * 获取元素的样式
 *
 * @param {HTMLElement|string|Window} el 当前元素
 * @param {string} style 需要查询样式的驼峰值，如 ：zIndex
 * @return {any}
 */
export const getStyle = (el: HTMLElement, style: string | string[]) => {
  if (!el) return
  if (typeof style === 'string') {
    return getComputedStyle(el)[style]
  } else {
    return style.reduce((acc, key) => {
      acc[key] = getComputedStyle(el)[key]
      return acc
    }, {} as Record<string, string>)
  }
}

/**
 * 打开窗口
 *
 * @param {string} url 链接
 * @param {({ target?: TargetContext | string; noopener?: boolean; noreferrer?: boolean })} [opt] 窗口选项
 */
export function openWindow(
  url: string,
  opt?: { target?: TargetContext | string; noopener?: boolean; noreferrer?: boolean }
) {
  const { target = '_blank', noopener = true, noreferrer = true } = opt || {}
  const feature: string[] = []
  noopener && feature.push('noopener=yes')
  noreferrer && feature.push('noreferrer=yes')
  window.open(url, target, feature.join(','))
}

/**
 * 获取元素距离视图的偏移
 *
 * @param {Element} element 计算的元素
 * @return {(DOMRect | number)}
 */
export function getBoundingClientRect(element: Element): DOMRect | number {
  if (!element || !element.getBoundingClientRect) {
    return 0
  }
  return element.getBoundingClientRect()
}

/**
 * 获取元素到视图的偏移量
 *
 * @param {Element} element 计算的元素
 * @return {ViewportOffsetResult}
 */
export function getViewportOffset(element: Element): ViewportOffsetResult {
  const doc = document.documentElement

  const docScrollLeft = doc.scrollLeft
  const docScrollTop = doc.scrollTop
  const docClientLeft = doc.clientLeft
  const docClientTop = doc.clientTop

  const pageXOffset = window.pageXOffset
  const pageYOffset = window.pageYOffset

  const box = getBoundingClientRect(element)

  const { left: retLeft, top: rectTop, width: rectWidth, height: rectHeight } = box as DOMRect

  const scrollLeft = (pageXOffset || docScrollLeft) - (docClientLeft || 0)
  const scrollTop = (pageYOffset || docScrollTop) - (docClientTop || 0)
  const offsetLeft = retLeft + pageXOffset
  const offsetTop = rectTop + pageYOffset

  const left = offsetLeft - scrollLeft
  const top = offsetTop - scrollTop

  const clientWidth = window.document.documentElement.clientWidth
  const clientHeight = window.document.documentElement.clientHeight
  return {
    left: left,
    top: top,
    right: clientWidth - rectWidth - left,
    bottom: clientHeight - rectHeight - top,
    rightIncludeBody: clientWidth - left,
    bottomIncludeBody: clientHeight - top,
  }
}

function trim(string: string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

/**
 * 判断是否有class
 *
 * @param {Element} el 操作元素
 * @param {string} cls 判断className
 * @return {boolean}
 */
export function hasClass(el: Element, cls: string) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

/**
 * 添加class
 *
 * @param {Element} el 操作元素
 * @param {string} cls 添加className
 */
export function addClass(el: Element, cls: string) {
  if (!el) return
  let curClass = el.className
  const classes = (cls || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

/**
 * 移除class
 *
 * @param {Element} el 操作元素
 * @param {string} cls 移除className
 */
export function removeClass(el: Element, cls: string) {
  if (!el || !cls) return
  const classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}
