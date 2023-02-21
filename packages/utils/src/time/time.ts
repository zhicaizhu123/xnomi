import dayjs, { ConfigType, OpUnitType } from 'dayjs'

/**
 * 将时间转为毫秒格式
 *
 * @category time
 * @param {ConfigType} time
 * @return {number}
 */
export function getMillisecond(time: ConfigType) {
  if (typeof time === 'number') {
    if (time.toString().length === 10) {
      time *= 1000
    }
  }
  return time ? dayjs(time).valueOf() : 0
}

/**
 * 格式化时间
 *
 * @category time
 * @param {ConfigType} time 日期对象/日期字符串/时间戳毫秒
 * @param {string} [format='YYYY-MM-DD HH:mm'] 格式化格式
 * @return {string}
 */
export function formatToDate(time: ConfigType, format = 'YYYY-MM-DD HH:mm') {
  time = getMillisecond(time)
  return time ? dayjs(time).format(format) : ''
}

/**
 * 获取给定时间和类型的起始时间
 *
 * @category time
 * @param {ConfigType} time 时间
 * @param {OpUnitType} [type='day'] 类型 "millisecond" | "second" | "minute" | "hour" | "day" | "month" | "year" | "date" | "d" | "M" | "y" | "h" | "m" | "s" | "ms" | "week" | "w"
 * @return {number} 返回时间戳
 */
export function getStartTime(time: ConfigType, type: OpUnitType = 'day') {
  time = getMillisecond(time)
  return dayjs(time).startOf(type).valueOf()
}

/**
 * 获取给定时间和类型的结束时间
 *
 * @category time
 * @param {ConfigType} time 时间
 * @param {OpUnitType} [type='day'] 类型 "millisecond" | "second" | "minute" | "hour" | "day" | "month" | "year" | "date" | "d" | "M" | "y" | "h" | "m" | "s" | "ms" | "week" | "w"
 * @return {number} 返回时间戳
 */
export function getEndTime(time: ConfigType, type: OpUnitType = 'day') {
  time = getMillisecond(time)
  return dayjs(time).endOf(type).valueOf()
}

/**
 * 获取已过去时间
 *
 * @category time
 * @param {ConfigType} time 计算时间
 * @return {string}
 */
export function getPastTime(time: ConfigType) {
  time = getMillisecond(time)
  if (time) {
    const srcTime = time
    const targetTime = dayjs()
    const years = targetTime.diff(srcTime, 'year')
    const months = targetTime.diff(srcTime, 'month')
    const weeks = targetTime.diff(srcTime, 'week')
    const days = targetTime.diff(srcTime, 'day')
    const hours = targetTime.diff(srcTime, 'hour')
    const minutes = targetTime.diff(srcTime, 'minute')
    if (years >= 1) {
      return `${Math.floor(days)}年前`
    }
    if (months >= 1) {
      return `${Math.floor(days)}个月前`
    }
    if (weeks >= 1) {
      return `${Math.floor(days)}个星期前`
    }
    if (days >= 1) {
      return `${Math.floor(days)}天前`
    }
    if (hours >= 1) {
      return `${hours.toFixed()}小时前`
    }
    if (minutes >= 1) {
      return `${minutes.toFixed()}分钟前`
    }
    return '刚刚'
  }
  return ''
}

/**
 * 获取倒计时
 *
 * @category time
 * @param {ConfigType} time 计算时间
 * @return {*}
 */
export function getCountDownTime(time: ConfigType) {
  time = getMillisecond(time)
  if (time) {
    const srcTime = Date.now()
    const targetTime = dayjs(time)
    const years = targetTime.diff(srcTime, 'year')
    const months = targetTime.diff(srcTime, 'month')
    const weeks = targetTime.diff(srcTime, 'week')
    const days = targetTime.diff(srcTime, 'day')
    const hours = targetTime.diff(srcTime, 'hour')
    const minutes = targetTime.diff(srcTime, 'minute')
    if (years >= 1) {
      return `还有${Math.floor(days)}年`
    }
    if (months >= 1) {
      return `还有${Math.floor(days)}个月`
    }
    if (weeks >= 1) {
      return `还有${Math.floor(days)}个星期`
    }
    if (days >= 1) {
      return `还有${Math.floor(days)}天`
    }
    if (hours >= 1) {
      return `还有${hours.toFixed()}小时`
    }
    if (minutes >= 1) {
      return `还有${minutes.toFixed()}分钟`
    }
    return '开始'
  }
  return ''
}

/**
 * 格式化时长
 *
 * @category time
 * @param {number} duration 时长 单位为毫秒
 * @param {string} [format='HH:mm:ss'] 格式
 * @return {*}  {string}
 */
export function formatDuration(duration: number, format = 'HH:mm:ss'): string {
  if (duration <= 0) return ''
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
  const month = day * 30
  const M = Math.floor(duration / month)
  const D = Math.floor((duration - M * month) / day)
  const H = Math.floor((duration - M * month - D * day) / hour)
  const m = Math.floor((duration - M * month - D * day - H * hour) / minute)
  const s = Math.floor((duration - M * month - D * day - H * hour - m * minute) / second)
  const o = {
    'M+': M, //月份
    'D+': D, //日
    'H+': H, //小时
    'm+': m, //分
    's+': s, //秒
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return format
}

/**
 * @category time
 */
export const time = dayjs
