/**
 * @module dataTransfer
 */

/**
 * 对象属性处理类型
 *
 * @category transfer
 */
export type FilterKeysType = 'keep' | 'remove'

/**
 * 根据保留/删除类型过滤字段
 *
 * @category transfer
 * @param {FilterKeysType} type 类型
 * - 'keep'：保留字段
 * - 'remove'：删除字段
 * @return {Record<string, any>} 返回处理后的对象
 */
const filterKeys =
  (type: FilterKeysType) =>
  (obj: Record<string, any>, keys: string[] = []) =>
    Object.keys(obj).reduce((acc, key) => {
      if (type === 'keep' ? keys.includes(key) : !keys.includes(key)) {
        acc[key] = obj[key]
      }
      return acc
    }, {} as Record<string, any>)

/**
 * 保留给定字段
 *
 * @category transfer
 * @param {Record<string, any>} obj 要处理的对象
 * @param {string[]} [keys=[]] 要保留的字段列表
 * @return {Record<string, any>} 返回已保留对应字段后的对象
 */
export const keepKeys = filterKeys('keep')

/**
 * 删除给定字段
 *
 * @category transfer
 * @param {Record<string, any>} obj 要处理的对象
 * @param {string[]} [keys=[]] 要删除的字段列表
 * @return {Record<string, any>} 返回已移除对应字段后的对象
 */
export const removeKeys = filterKeys('remove')

/**
 * 替换对象字段名
 *
 * @category transfer
 * @param {object} obj 要操作的对象
 * @param {object} [rules={}] key-value键值对，key 为 原字段，value为替换字段
 * @returns
 */
export const replaceKeys = (obj: Record<string, any>, rules: Record<string, any> = {}) => {
  const keys: string[] = Object.keys(rules)
  return Object.keys(obj).reduce((acc, key) => {
    acc[keys.includes(key) ? rules[key] : key] = obj[key]
    return acc
  }, {} as Record<string, any>)
}

/**
 * 将列表转化为key-value对象
 *
 * @category transfer
 * @param {T[]} list 列表数据
 * @param {string} [key='id'] key
 * @param {(item: T) => U} [cb] 处理函数
 * @return {Record<string, U>}
 */
export function list2Hash<T, U = T>(list: T[], key = 'id', cb?: (item: T) => U) {
  return list.reduce((acc, item) => {
    acc[item[key]] = (cb ? cb(item) : item) as unknown as U
    return acc
  }, {} as Record<string, U>)
}

/**
 * 将key-value对象转换成列表
 *
 * @category transfer
 * @param {Record<string, T>} map 对象
 * @param {(item: T) => U} [cb] 处理函数
 * @return {U[]}
 */
export function hash2List<T, U = T>(map: Record<string, T>, cb?: (item: T) => U) {
  return Object.keys(map).map((key) => {
    return cb ? cb(map[key]) : map[key]
  }) as unknown as U[]
}

export const DEFAULT_CONFIG = {
  id: 'id',
  parentId: 'parentId',
}

export type TreeConfig = typeof DEFAULT_CONFIG

export type Tree<T> = T & { children?: Tree<T>[] }

const getConfig = (config: Partial<TreeConfig>) => ({ ...DEFAULT_CONFIG, ...config })

/**
 * 将一维数组转化为树形结构
 *
 * @category transfer
 * @param {Tree<T>[]} list 一维数组数据
 * @param {Partial<TreeConfig>} [config={}] 数据关键字段映射
 * @return {Tree<T>[]}
 */
export function list2Tree<T extends Record<string, any>>(
  list: Tree<T>[],
  config: Partial<TreeConfig> = {}
) {
  const { id, parentId } = getConfig(config)
  const nodeMap = new Map()
  const result: Tree<T>[] = []

  for (const node of list) {
    node.children = node.children || []
    if (!node[id]) {
      console.warn(`${id}字段名不在数组元素中`)
      return []
    }
    nodeMap.set(node[id], node)
  }

  for (const node of list) {
    const parent = nodeMap.get(node[parentId])
    ;(parent ? parent.children : result).push(node)
  }
  return result
}

/**
 * 将树形结构time成以为数组
 *
 * @category transfer
 * @param {T[]} tree 树形结构数据
 * @return {T[]}
 */
export function tree2List<T extends { children?: T[] }>(tree: T[]) {
  const list: T[] = [...tree]
  for (let i = 0; i < list.length; i++) {
    const children = list[i].children
    if (children) {
      list.splice(i + 1, 0, ...children)
    }
  }
  return list
}

/**
 * 遍历树形结构数据
 *
 * @category transfer
 * @param {T[]} tree 树形结构数据
 * @param {(item: T) => void | boolean} [handler] 每个节点的处理函数和判断是否中断
 */
export function forEachTree<T extends { children?: T[] }>(
  tree: T[],
  handler?: (item: T) => void | boolean
) {
  const list: T[] = [...tree]
  for (let i = 0; i < list.length; i++) {
    const abort = handler && handler(list[i])
    // 如果返回为true，则中止查询
    if (abort) return
    const children = list[i].children
    if (children?.length) {
      list.splice(i + 1, 0, ...children)
    }
  }
}

/**
 * 将树形结构数据转化成Map
 *
 * @category transfer
 * @param {T[]} tree 树形结构数据
 * @param {Partial<TreeConfig>} [config={}] 数据关键字段映射
 * @param {boolean} [includeChildren=false] 解析出来的数据是否包含子元素列表
 * @return {Map<string | number, T>}
 */
export function tree2Map<T extends { children?: T[] }>(
  tree: T[],
  config: Partial<TreeConfig> = {},
  includeChildren = false
) {
  const { id } = getConfig(config)
  const map: Map<string | number, T> = new Map()
  function add(node: T) {
    if (includeChildren) {
      map.set(node[id], node)
    } else {
      const tempNode = { ...node }
      Reflect.deleteProperty(tempNode, 'children')
      map.set(tempNode[id], tempNode)
    }
  }
  forEachTree(tree, add)
  return map
}

/**
 * 通过指定id获取完整链式信息
 *
 * @category transfer
 * @param {any[]} tree 树形结构数据
 * @param {(string | number)} id 需要查询的id
 * @param {Partial<TreeConfig>} [config={}] 数据关键字段映射
 * @return {{ chainIds: string | number)[]; chainNodes: any[] }}
 */

/**
 * 通过指定id获取完整链式信息
 *
 * @category transfer
 * @param {T[]} tree 树形结构数据
 * @param {(string | number)} id 需要查询的id
 * @param {Partial<TreeConfig>} [config={}] 数据关键字段映射
 * @return {{ chainIds: (string | number)[]; chainNodes: T[];}}
 */
export function getChainInfo<T extends { children?: T[] }>(
  tree: T[],
  id: string | number,
  config: Partial<TreeConfig> = {}
) {
  const { parentId } = getConfig(config)
  const map = tree2Map(tree, config)
  let tempId = id
  const res: {
    chainIds: (string | number)[]
    chainNodes: T[]
  } = {
    chainIds: [],
    chainNodes: [],
  }
  while (tempId && map.has(tempId)) {
    const node = map.get(tempId)
    if (!node) return res
    res.chainIds.unshift(tempId)
    res.chainNodes.unshift(node)
    tempId = node[tempId][parentId]
  }
  return res
}

/**
 * 根据id查询对应节点的完整信息
 *
 * @category transfer
 * @param {any[]} tree 树形结构数据
 * @param {(string | number)} id 需要查询的id
 * @param {Partial<TreeConfig>} [config={}] 数据关键字段映射
 * @return {T | undefined}
 */
export function findTreeNode<T extends { children?: T[] }>(
  tree: T[],
  id: string | number,
  config: Partial<TreeConfig> = {}
) {
  const { id: nodeId } = getConfig(config)
  let res!: T | undefined
  function filter(node: T) {
    if (node[nodeId] === id) {
      res = node
      return true
    }
  }
  forEachTree(tree, filter)
  return res
}

/**
 *  过滤树节点
 *
 * @category transfer
 * @param {T[]} tree 树形结构数据
 * @param {(data: T) => boolean} handler 过滤回调函数
 * @return {T[]}
 */
export function filterTree<T extends { children?: T[] }>(tree: T[], handler: (data: T) => boolean) {
  const list: T[] = JSON.parse(JSON.stringify(tree)).filter(handler)
  function forEach(data: T[]) {
    data.forEach((item) => {
      if (item.children) {
        item.children = item.children.filter(handler)
        forEach(item.children)
      }
    })
  }
  forEach(list)
  return list
}
