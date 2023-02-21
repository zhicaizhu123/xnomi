/**
 * @module log 日志
 */

const systemConsole = {
  warn: console.warn,
  log: console.log,
  error: console.error,
  debug: console.log,
}

/** 日志方法类型 */
export type ConsoleType = keyof typeof systemConsole

/** 自定义日志样式接口 */
export interface StyleConfigModel {
  /** 警告 */
  warn?: string
  /** 普通 */
  log?: string
  /** 错误 */
  error?: string
  /** 调试 */
  debug?: string
}

/** 日志配置接口 */
export interface GlobalConsoleConfigModel {
  /** 全局日志模块名称 */
  moduleName?: string
  /** 不同日志的icon */
  icon?: StyleConfigModel
  /** 不同一日的样式 */
  style?: StyleConfigModel
}

/** 默认全局配置 */
const DEFAULT_GLOBAL_CONFIG: Required<GlobalConsoleConfigModel> = {
  moduleName: 'xnomi',
  icon: {
    warn: '🟠',
    log: '🟢',
    error: '🔴',
    debug: '🔵',
  },
  style: {
    warn: 'background: #faad14; color: #fff; padding: 4px 6px; border-radius: 4px;',
    log: 'background: #1890ff; color: #fff; padding: 4px 6px; border-radius: 4px;',
    error: 'background: #f5222d; color: #fff; padding: 4px 6px; border-radius: 4px;',
    debug: 'background: rgba(0, 0, 0, 0.45); color: #fff; padding: 4px 6px; border-radius: 4px;',
  },
}

/** 全局配置 */
const GLOBAL_CONFIG = DEFAULT_GLOBAL_CONFIG

/**
 * 自定义日志函数
 *
 * @category log
 * @param {ConsoleType} type 日志类型
 * @return {*}
 */
function xConsole(type: ConsoleType) {
  return (...args) => {
    const { icon, moduleName, style } = GLOBAL_CONFIG
    systemConsole[type](`%c${icon[type]} ${moduleName}`, style[type], ...args)
  }
}

/**
 * 自定义日志函数（可定制模块名称）
 *
 * @category log
 * @param {ConsoleType} type 日志类型
 * @return {*}
 */
function xModuleConsole(type: ConsoleType) {
  return (moduleName: string, ...args) => {
    const { icon, style } = GLOBAL_CONFIG
    systemConsole[type](`%c${icon[type]} ${moduleName}`, style[type], ...args)
  }
}

/**
 * 警告日志
 *
 * @category log
 * @function
 */
export const warn = xConsole('warn')
/**
 * 普通日志
 *
 * @category log
 * @function
 */
export const log = xConsole('log')
/**
 * 错误日志
 *
 * @category log
 * @function
 */
export const error = xConsole('error')
/**
 * 调试日志
 *
 * @category log
 * @function
 */
export const debug = xConsole('debug')
/**
 * 警告日志（定制模块名称）
 *
 * @category log
 * @param {string} moduleName 模块名称
 * @function
 */
export const moduleWarn = xModuleConsole('warn')
/**
 * 普通日志（定制模块名称）
 *
 * @category log
 * @param {string} moduleName 模块名称
 * @function
 */
export const moduleLog = xModuleConsole('log')
/**
 * 调试日志（定制模块名称）
 *
 * @category log
 * @param {string} moduleName 模块名称
 * @function
 */
export const moduleError = xModuleConsole('error')
/**
 * 错误日志（定制模块名称）
 *
 * @category log
 * @param {string} moduleName 模块名称
 * @function
 */
export const moduleDebug = xModuleConsole('debug')

/**
 * 配置全局信息
 *
 * @category log
 * @param {GlobalConsoleConfigModel} config 配置信息
 */
export function configGlobalConsole(config: GlobalConsoleConfigModel) {
  if (config.moduleName) {
    GLOBAL_CONFIG.moduleName = config.moduleName
  }
  if (config.icon) {
    Object.assign(GLOBAL_CONFIG.icon, config.icon)
  }
  if (config.style) {
    Object.assign(GLOBAL_CONFIG.style, config.style)
  }
}

/**
 * 设置是否覆盖全局的console对象的方法
 *
 * @param {boolean} isCover 是否覆盖
 */
export function coverSystemConsole(isCover: boolean) {
  if (isCover) {
    console.log = log
    console.info = log
    console.error = error
    console.warn = warn
    console.debug = debug
  } else {
    console.log = systemConsole.log
    console.info = systemConsole.log
    console.error = systemConsole.error
    console.warn = systemConsole.warn
    console.debug = systemConsole.debug
  }
}

/**
 * 还原全局配置信息
 */
export function resetConfig() {
  Object.assign(GLOBAL_CONFIG, DEFAULT_GLOBAL_CONFIG)
  coverSystemConsole(false)
}
