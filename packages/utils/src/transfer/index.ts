/**
 * @module transfer
 */

import { isTel, isUnDef } from '@xnomi/is'

/**
 * 对象属性处理类型
 */
export type FilterKeysType = 'keep' | 'remove'

/**
 * 根据保留/删除类型过滤字段
 *
 * @param {FilterKeysType} type 类型
 * - 'keep'：保留字段
 * - 'remove'：删除字段
 * @return {Recordable<any>} 返回处理后的对象
 */
const filterKeys =
  (type: FilterKeysType) =>
  (obj: Recordable, keys: string[] = []) =>
    Object.keys(obj).reduce((acc, key) => {
      if (type === 'keep' ? keys.includes(key) : !keys.includes(key)) {
        acc[key] = obj[key]
      }
      return acc
    }, {} as Recordable)

/**
 * 保留给定字段
 *
 * @param {Recordable} obj 要处理的对象
 * @param {string[]} [keys=[]] 要保留的字段列表
 * @return {Recordable<any>} 返回已保留对应字段后的对象
 */
export const keepKeys = filterKeys('keep')

/**
 * 删除给定字段
 *
 * @param {Recordable} obj 要处理的对象
 * @param {string[]} [keys=[]] 要删除的字段列表
 * @return {Recordable<any>} 返回已移除对应字段后的对象
 */
export const removeKeys = filterKeys('remove')

/**
 * 替换对象字段名
 *
 * @export
 * @param {object} obj 要操作的对象
 * @param {object} [rules={}] key-value键值对，key 为 原字段，value为替换字段
 * @returns
 */
export const replaceKeys = (obj: Recordable, rules: Recordable = {}) => {
  const keys: string[] = Object.keys(rules)
  return Object.keys(obj).reduce((acc, key) => {
    acc[keys.includes(key) ? rules[key] : key] = obj[key]
    return acc
  }, {} as Recordable)
}

/**
 * 去除对象的属性值为undefined的字段
 *
 * @export
 * @param {Recordable} data 要操作的对象
 * @return {*}  {Recordable}
 */
export function getNonEmpty(data: Recordable) {
  const params: Recordable = {}
  Object.keys(data).forEach((key) => {
    if (!isUnDef(data[key])) {
      params[key] = data[key]
    }
  })
  return params
}

/**
 * 将列表转化为key-value对象
 *
 * @param {Recordable[]} list 列表
 * @param {string} [key='id'] 唯一标识值
 * @param {*} [cb=(item: Recordable): any => item.name] 校验钩子函数
 * @return {Recordable} 返回处理后的结果
 */
export function list2Map(
  list: Recordable[],
  key = 'id',
  cb = (item: Recordable): any => item.name
): Recordable {
  return list.reduce((acc, item) => {
    acc[item[key]] = cb(item)
    return acc
  }, {} as Recordable)
}

/**
 * 将对象转换成列表
 *
 * @param {Recordable} map 对象
 * @return {LabelValueOption[]}  返回处理的结果
 */
export function Map2Options(map: Recordable): LabelValueOption[] {
  return Object.keys(map).map((key) => {
    return map[key]
  })
}

/**
 * 列表选项转换为对象
 * - 键：第二个参数指定的值
 * - 值：列表元素
 *
 * @template T
 * @param {LabelValueOption[]} options 需要转换的列表选项
 * @param {string} [key='value'] 值的对应的字段
 * @return {T}
 */
export function options2Map<T = Recordable>(options: LabelValueOption[], key = 'value') {
  return options.reduce((acc, item) => {
    acc[key] = item
    return acc
  }, {} as T)
}

/**
 * 获取数组的最后一个元素
 *
 * @param {T[]} arr 源数组
 * @param {Fn} [cb] 回调，用于自定义返回数据，参数为数组最后一个元素
 * @return {(T | undefined)}
 */
export function getLastKey<T>(arr: T[], cb?: Fn) {
  if (cb) {
    return cb(arr[arr.length - 1])
  }
  return arr[arr.length - 1] || ''
}

/**
 * 获取叶子key
 *
 * @param {(string | string[])} [target] 源数组或字符串
 * @return {(string | undefined)}
 */
export function getLeafId(target?: string | string[]): string {
  return typeof target === 'string' ? target : getLastKey(target || [])
}

/**
 * 加密手机号
 *
 * @param {string} mobile 手机号
 * @return {string}
 */
export function encryptMobile(mobile: string) {
  if (mobile && isTel(mobile)) {
    return mobile.slice(0, 3) + '****' + mobile.slice(7)
  }
  return mobile
}

/**
 * 驼峰转中横线
 *
 * @param {string} str 需要转换的字符串
 * @return {string}
 */
export function decamelize(str: string): string {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}

/**
 * base64转blob
 *
 * @param {string} base64Buf base64字符串
 * @return {Blob}
 */
export function dataURLtoBlob(base64Buf: string) {
  const arr = base64Buf.split(',')
  const typeItem = arr[0]
  const mime = typeItem.match(/:(.*?);/)![1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

/**
 * 图片链接转base64
 *
 * @param {string} url 链接
 * @param {string} [mineType] 模式
 * @return {Promise<string>}
 */
export function urlToBase64(url: string, mineType?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement('CANVAS') as Nullable<HTMLCanvasElement>
    const ctx = canvas!.getContext('2d')

    const img = new Image()
    img.crossOrigin = ''
    img.onload = function () {
      if (!canvas || !ctx) {
        return reject()
      }
      canvas.height = img.height
      canvas.width = img.width
      ctx.drawImage(img, 0, 0)
      const dataURL = canvas.toDataURL(mineType || 'image/png')
      canvas = null
      resolve(dataURL)
    }
    img.src = url
  })
}

/**
 * File转DataURL
 *
 * @param {(File | Blob)} file 需要转换的File文件
 * @return {Promise<string>}
 */
export function fileToDataURI(file: File | Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result)
      }
    })
    reader.addEventListener('error', reject)
    reader.readAsDataURL(file)
  })
}

/**
 * 数字转换为金额
 *
 * @param {number} num 转换的数字
 * @param {number} [size=2] 保留的小数点
 * @return {string} 返回已格式化字符串
 */
export function toCurrency(num: number, size = 2) {
  num = Number(num)
  const isNegative = num < 0
  if (isNegative) {
    num = -num
  }
  let [interge, decimal] = num.toFixed(size < 0 ? 0 : size).split('.')
  interge = interge.replace(/(?!^)(?=(\d{3})+$)/g, ',')
  decimal = decimal ? decimal.substr(0, size) : ''
  let end = ''
  if (+decimal !== 0) {
    end = `${size > 0 ? '.' : ''}${decimal.padEnd(size, '0')}`
  }
  return `${isNegative ? '-' : ''}${interge}${end}`
}

/**
 * 树结构对应的接口
 */
export interface TreeConfig {
  id: string
  children: string
  pid: string
}

const DEFAULT_CONFIG: TreeConfig = {
  id: 'id',
  children: 'children',
  pid: 'parentId',
}

const getConfig = (config: Partial<TreeConfig>) => ({ ...DEFAULT_CONFIG, ...config })

/**
 * 将一维数组转化为树形结构
 *
 * @param {any[]} list 一维数组数据
 * @param {Partial<TreeConfig>} [config={}] 数据关键字段映射
 * @return {any[]}
 */
export function list2Tree(list: any[], config: Partial<TreeConfig> = {}) {
  const { id, children, pid } = getConfig(config)
  const nodeMap = new Map()
  const result: any[] = []

  for (const node of list) {
    node[children] = node[children] || []
    nodeMap.set(node[id], node)
  }

  for (const node of list) {
    const parent = nodeMap.get(node[pid])
    ;(parent ? parent.children : result).push(node)
  }
  return result
}

/**
 * 遍历树形结构数据
 *
 * @param {any[]} tree 树形结构数据
 * @param {Partial<TreeConfig>} [config={}] 数据关键字段映射
 * @param {Fn} [handler] 每个节点的处理函数和判断是否终端
 */
export function forEachTree(tree: any[], config: Partial<TreeConfig> = {}, handler?: Fn) {
  const { children } = getConfig(config)
  const list: any[] = [...tree]
  for (let i = 0; i < list.length; i++) {
    const abort = handler && handler(list[i])
    // 如果返回为true，则中止查询
    if (abort) return
    children && list[i][children] && list.splice(i + 1, 0, ...list[i][children])
  }
}

/**
 * 将树形结构数据转换成以为数组
 *
 * @param {any[]} tree 树形结构数据
 * @param {Partial<TreeConfig>} [config={}] 数据关键字段映射
 * @return {any[]}
 */
export function tree2List(tree: any[], config: Partial<TreeConfig> = {}) {
  const { children } = getConfig(config)
  const list: any[] = [...tree]
  for (let i = 0; i < list.length; i++) {
    children && list[i][children] && list.splice(i + 1, 0, ...list[i][children])
  }
  return list
}

/**
 * 将树形结构数据转化成Map
 *
 * @param {any[]} tree 树形结构数据
 * @param {Partial<TreeConfig>} [config={}] 数据关键字段映射
 * @param {boolean} [includeChildren=false] 解析出来的数据是否包含子元素列表
 * @return {Map}
 */
export function tree2Map(tree: any[], config: Partial<TreeConfig> = {}, includeChildren = false) {
  const { id, children } = getConfig(config)
  const map = new Map()

  function add(node) {
    if (includeChildren) {
      map.set(node[id], node)
    } else {
      const tempNode = { ...node }
      Reflect.deleteProperty(tempNode, children)
      map.set(tempNode[id], tempNode)
    }
  }
  forEachTree(tree, config, add)
  return map
}

/**
 * 通过指定id获取完整链式信息
 *
 * @param {any[]} tree 树形结构数据
 * @param {(string | number)} id 需要查询的id
 * @param {Partial<TreeConfig>} [config={}] 数据关键字段映射
 * @return {{ chainIds: string | number)[]; chainNodes: any[] }}
 */
export function getChainInfo(tree: any[], id: string | number, config: Partial<TreeConfig> = {}) {
  const { pid } = getConfig(config)
  const map = tree2Map(tree, config)
  let tempId = id
  const res: {
    chainIds: (string | number)[]
    chainNodes: any[]
  } = {
    chainIds: [],
    chainNodes: [],
  }
  while (tempId && map.has(tempId)) {
    res.chainIds.unshift(tempId)
    res.chainNodes.unshift(map.get(tempId))
    tempId = map.get(map.get(tempId)[pid])
  }
  return res
}

/**
 * 根据id查询对应节点的完整信息
 *
 * @param {any[]} tree 树形结构数据
 * @param {(string | number)} id 需要查询的id
 * @param {Partial<TreeConfig>} [config={}] 数据关键字段映射
 * @return {*}
 */
export function findTreeNode(tree: any[], id: string | number, config: Partial<TreeConfig> = {}) {
  const { id: nodeId } = getConfig(config)
  let res
  function filter(node) {
    if (node[nodeId] === id) {
      res = node
      return true
    }
  }
  forEachTree(tree, config, filter)
  return res
}

/**
 * 过滤树节点
 *
 * @param {any[]} tree 树形结构数据
 * @param {Partial<TreeConfig>} [config={}] 数据关键字段映射
 * @param {Fn} handler 过滤回调函数
 * @return {any[]}
 */
export function filterTree(tree: any[], config: Partial<TreeConfig> = {}, handler: Fn) {
  const { children } = getConfig(config)
  const list = JSON.parse(JSON.stringify(tree)).filter(handler)
  function forEach(data: Recordable[]) {
    data.forEach((item) => {
      if (item[children]) {
        item[children] = item[children].filter(handler)
        forEach(item[children])
      }
    })
  }
  forEach(list)
  return list
}

/**
 * 返回协议 + 链接域名
 *
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
 * @param {string} search 解析字符串
 * @return {Recordable}
 */
export function parseUrlParams(search: string) {
  const result: Recordable = {}
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
 * @param {string} [url=location.href] 源链接字符串
 * @return {Recordable}
 */
export function params2Json(url: string = location.href): Recordable<string> {
  const search = url.substring(url.lastIndexOf('?') + 1)
  return parseUrlParams(search)
}

/**
 * 获取链接指定字段名的值
 *
 * @param {(string[] | string)} key 指定获取的字段名
 * @param {string} [url=location.href] 源链接字符串
 * @return {*}  {(Recordable<string> | string | null)} 如果参数key为数组则返回对象
 */
export function getUrlParam(
  key: string[] | string,
  url: string = location.href
): Recordable<string> | string | null {
  const params = params2Json(url)
  if (Array.isArray(key)) {
    const res: Recordable = {}
    key.forEach((item) => {
      res[item] = params[item]
    })
    return res
  } else if (typeof key === 'string') {
    return params[key]
  }
  return null
}

/**
 * 转换json为链接参数字符串
 *
 * @param {Recordable} json 需要解析的json
 * @return {string}
 */
export function json2Params(json: Recordable): string {
  if (!json) return ''
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
 * @param {Recordable} [params={}] 源链接字符串
 * @param {string} [url=location.href] 需要添加的参数
 * @return {string}
 */
export function addUrlParams(params: Recordable = {}, url: string = location.href): string {
  const path = url.split('?')[0]
  const json = params2Json(url)
  const paramStr = json2Params({ ...json, ...params })
  return `${path}?${paramStr}`
}

/**
 * 删除链接指定的参数
 *
 * @param {string} [url=location.href] 源链接字符串
 * @param {(string[] | string)} [params=''] 如果为字符串时，多个参数需要用英文','分割，如果不传或者传的时空字符串或者空数组则删除全部参数
 * @return {string}
 */
export function removeUrlParams(
  url: string = location.href,
  params: string[] | string = ''
): string {
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
 * @param {string} url 待处理的文本
 * @return {string}
 */
export function http2https(url: string) {
  return url.replace(/^http:\/\//, 'https://')
}


