/**
 * @module helper
 */

/**
 * 将await信息拆分为错误信息和正确数据
 *
 * @template T
 * @template U
 * @param {Promise<T>} promise Promise类型参数
 * @param {object} [error] 自定义错误信息
 * @return {(Promise<[U | null, T | undefined]>)}
 */
export function to<T, U = Error>(
  promise: Promise<T>,
): Promise<[U | null, T | undefined]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      return [err, undefined]
    })
}

/**
 * 延时执行
 *
 * @param {number} delayTime 延时时间，毫秒为单位
 * @return {Promise<unknown>} 返回Promise
 */
export function delay(delayTime: number) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(true)
      clearTimeout(timer)
    }, delayTime)
  })
}

/**
 * 延时执行，并可以取消
 *
 * @param {number} duration 延时执行时间
 * @param {Fn} fn 执行函数
 * @param {*} rest 执行函数参数
 * @return {() => void}
 */
export function defer(duration: number, fn: Fn, ...rest) {
  const timer = setTimeout(() => {
    fn(...rest)
  }, duration)
  function stop() {
    timer && clearTimeout(timer)
  }
  return stop
}

/**
 * 组合高阶函数
 *
 * @param {Fn} filter
 * @param {Fn} fn
 * @return {(...args: any[]) => void}
 */
function createFilterWrapper(filter: Fn, fn: Fn) {
  function wrapper(this: any, ...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args })
  }
  return wrapper
}

/**
 * 防抖
 *
 * @param {number} ms 防抖阈值，毫秒为单位
 * @return {*}
 */
function debounceFilter(ms: number) {
  let timer
  const filter = (invoke) => {
    const duration = ms
    if (timer) clearTimeout(timer)
    if (duration <= 0) return invoke()
    timer = setTimeout(invoke, duration)
  }
  return filter
}

/**
 * 截流
 *
 * @param {number} ms 截流阈值，毫秒为单位
 * @param {boolean} [trailing=true] 是否在尾部执行
 * @return {*}
 */
function throttleFilter(ms: number, trailing = true) {
  let lastExec = 0
  let timer
  const clear = () => {
    if (timer) {
      clearTimeout(timer)
      timer = undefined
    }
  }
  const filter = (invoke) => {
    const duration = ms
    const elapsed = Date.now() - lastExec
    clear()
    if (duration <= 0) {
      lastExec = Date.now()
      return invoke()
    }
    if (elapsed > duration) {
      lastExec = Date.now()
      invoke()
    } else if (trailing) {
      timer = setTimeout(() => {
        clear()
        invoke()
      }, duration)
    }
  }
  return filter
}

/**
 * 防抖
 *
 * @param {Fn} fn 在延迟毫秒后执行的函数
 * @param {number} [ms=200] 以毫秒为单位的零或更大的延迟。对于事件回调，100或250(甚至更高)左右的值是最有用的
 */
export function debounceFn(fn: Fn, ms = 200) {
  return createFilterWrapper(debounceFilter(ms), fn)
}

/**
 * 截流，特别适用于速率限制，在诸如调整大小和滚动等事件上执行处理程序。
 *
 * @param {Fn} fn 延迟毫秒后执行的函数。' this '上下文和所有参数都按原样传递
 * @param {number} [ms=200] 以毫秒为单位的零或更大的延迟。对于事件回调，100或250(甚至更高)左右的值是最有用的
 * @param {boolean} [trailing=true] 是否尾部执行
 */
export function throttleFn(fn: Fn, ms = 200, trailing = true) {
  return createFilterWrapper(throttleFilter(ms, trailing), fn)
}

/**
 * 生成随机数
 *
 * @param {number} [len=5] 生成随机字符串的长度
 * @return {string}
 */
export function randomString(len = 5) {
  // 生成随机名
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const maxPos = chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

const hexList: string[] = []
for (let i = 0; i <= 15; i++) {
  hexList[i] = i.toString(16)
}
/**
 * 生成uuid
 *
 * @return {string}
 */
export function buildUUID(): string {
  let uuid = ''
  for (let i = 1; i <= 36; i++) {
    if (i === 9 || i === 14 || i === 19 || i === 24) {
      uuid += '-'
    } else if (i === 15) {
      uuid += 4
    } else if (i === 20) {
      uuid += hexList[(Math.random() * 4) | 8]
    } else {
      uuid += hexList[(Math.random() * 16) | 0]
    }
  }
  return uuid.replace(/-/g, '')
}

let unique = 0
/**
 * 生成短的uuid
 *
 * @param {string} [prefix=''] 前缀
 * @return {string}
 */
export function buildShortUUID(prefix = '') {
  const time = Date.now()
  const random = Math.floor(Math.random() * 1000000000)
  unique++
  return prefix + '_' + random + unique + String(time)
}

/**
 * 抛出错误信息
 *
 * @param {string} error 提示错误的字符串
 */
export function throwNoKeyError(error: string): Error {
  throw new Error(error)
}

/**
 * 获取文本长度（一个表情包算一个字符）
 *
 * @param {string} str 源字符串
 * @return {number}
 */
export function getTextLength(str: string) {
  const emojiExp = /(\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g
  if (!str) return 0
  let emojiCount = 0
  str.replace(emojiExp, (val) => {
    emojiCount++
    return val
  })
  return str.length - emojiCount
}

/**
 * 空函数
 *
 */
export function noop() {}
