import { throttleFn } from '../helper'
import { on, off } from '../event'
import { screenMap, SizeEnum, ScreenEnum, CreateBreakpointListenerParams } from './model'

export * from './model'

/**
 * 获取分界点
 *
 * @return {*}
 */
export function getBreakpoint() {
  let screen: SizeEnum = SizeEnum.XL
  let realWidth = window.innerWidth

  const width = document.body.clientWidth
  const xs = screenMap.get(SizeEnum.XS)!
  const sm = screenMap.get(SizeEnum.SM)!
  const md = screenMap.get(SizeEnum.MD)!
  const lg = screenMap.get(SizeEnum.LG)!
  const xl = screenMap.get(SizeEnum.XL)!
  if (width < xs) {
    screen = SizeEnum.XS
  } else if (width < sm) {
    screen = SizeEnum.SM
  } else if (width < md) {
    screen = SizeEnum.MD
  } else if (width < lg) {
    screen = SizeEnum.LG
  } else if (width < xl) {
    screen = SizeEnum.XL
  } else {
    screen = SizeEnum.XXL
  }
  realWidth = width

  return {
    screen,
    realWidth,
    width: screenMap.get(screen) as number,
    screenEnum: ScreenEnum,
    sizeEnum: SizeEnum,
    screenMap,
  }
}

/**
 * 获取当前尺寸数据，只调用一次
 *
 * @export
 * @param {(opt: CreateBreakpointListenerParams) => void} [fn]
 * @return {*}
 */
export function createBreakpointListener(fn?: (opt: CreateBreakpointListenerParams) => void) {
  function resizeFn() {
    const { screen, width, realWidth, screenEnum, sizeEnum, screenMap } = getBreakpoint()
    fn?.({
      screen,
      width,
      realWidth,
      screenEnum,
      sizeEnum,
      screenMap,
    })
  }

  const resizeHandler = throttleFn(resizeFn, 80)
  on(window, 'resize', resizeHandler)
  function remove() {
    off(window, 'resize', resizeHandler)
  }
  resizeFn()
  return remove
}
