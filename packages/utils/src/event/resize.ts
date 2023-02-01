import ResizeObserver from 'resize-observer-polyfill'

const isServer = typeof window === 'undefined'

/**
 * resize回调
 *
 * @param {any[]} entries
 */
function resizeHandler(entries: any[]) {
  for (const entry of entries) {
    const listeners = entry.target.__resizeListeners__ || []
    if (listeners.length) {
      listeners.forEach((fn: () => any) => {
        fn()
      })
    }
  }
}

/**
 * 添加resize事件
 *
 * @param {*} element 监听元素
 * @param {() => any} fn 回调
 */
export function addResizeListener(element: any, fn: () => any) {
  if (isServer) return
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = []
    element.__ro__ = new ResizeObserver(resizeHandler)
    element.__ro__.observe(element)
  }
  element.__resizeListeners__.push(fn)
}

/**
 * 销毁resize事件
 *
 * @param {*} element 监听元素
 * @param {() => any} fn 回调
 */
export function removeResizeListener(element: any, fn: () => any) {
  if (!element || !element.__resizeListeners__) return
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1)
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect()
  }
}

/**
 * 触发resize事件
 *
 */
export function triggerWindowResize() {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  ;(event as any).eventType = 'message'
  window.dispatchEvent(event)
}
