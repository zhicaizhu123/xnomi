/**
 * @module log
 */

const linksWarn = console.warn
const linksLog = console.log
const linksError = console.error
const linksVerbose = console.log

let globalNamespace = 'links'

/**
 * 警告日志
 *
 * @param {*} args 打印参数
 */
export function warn(...args) {
  linksWarn(
    `%c👮‍♀️ ${globalNamespace}`,
    'background: #faad14; color: #fff; padding: 4px 6px; border-radius: 4px;',
    ...args
  )
}

/**
 * 普通日志
 *
 * @param {*} args 打印参数
 */
export function log(...args) {
  linksLog(
    `%c🙆‍♂️ ${globalNamespace}`,
    'background: #1890ff; color: #fff; padding: 4px 6px; border-radius: 4px;',
    ...args
  )
}

/**
 * 错误日志
 *
 * @param {*} args 打印参数
 */
export function error(...args) {
  linksError(
    `%c🙅‍♂️ ${globalNamespace}`,
    'background: #f5222d; color: #fff; padding: 4px 6px; border-radius: 4px;',
    ...args
  )
}

/**
 * 调试日志
 *
 * @param {*} args 打印参数
 */
export function verbose(...args) {
  linksVerbose(
    `%c🐛 ${globalNamespace}`,
    'background: rgba(0, 0, 0, 0.45); color: #fff; padding: 4px 6px; border-radius: 4px;',
    ...args
  )
}

/**
 * 警告日志（包含模块）
 *
 * @param {string} module 模块
 * @param {*} args 打印参数
 */
export function moduleWarn(module: string, ...args) {
  linksWarn(
    `%c👮‍♀️ ${module}`,
    'background: #faad14; color: #fff; padding: 4px 6px; border-radius: 4px;',
    ...args
  )
}

/**
 * 普通日志（包含模块）
 *
 * @param {string} module 模块
 * @param {*} args 打印参数
 */
export function moduleLog(module: string, ...args) {
  linksLog(
    `%c🙆‍♂️ ${module}`,
    'background: #1890ff; color: #fff; padding: 4px 6px; border-radius: 4px;',
    ...args
  )
}

/**
 * 错误日志（包含模块）
 *
 * @param {string} module 模块
 * @param {*} args 打印参数
 */
export function moduleError(module: string, ...args) {
  linksError(
    `%c🙅‍♂️ ${module}`,
    'background: #f5222d; color: #fff; padding: 4px 6px; border-radius: 4px;',
    ...args
  )
}

/**
 * 提示日志（包含模块）
 *
 * @param {string} module 模块
 * @param {*} args 打印参数
 */
export function moduleVerbose(module: string, ...args) {
  linksVerbose(
    `%c🐛 ${module}`,
    'background: rgba(0, 0, 0, 0.45); color: #fff; padding: 4px 6px; border-radius: 4px;',
    ...args
  )
}

/**
 * 注入全局日志
 *
 * @param {string} namespace 项目命名空间
 */
export function injectGlobalLog(namespace: string = 'links') {
  globalNamespace = namespace
  console.log = log
  console.error = error
  console.warn = warn
}
