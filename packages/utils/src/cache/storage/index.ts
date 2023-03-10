/**
 * @module Storage
 */

import { removeKeys } from '../../transfer'

export type StorageType = 'local' | 'session'

const xnomiStoreMap = new Map()

/**
 * 指定命名空间的loalStorage/sessionStorage类
 *
 * @category cache
 * @class Storage
 */
export class Storage {
  private store: globalThis.Storage
  private namespace: string
  private state: { [x: string]: any }

  constructor(type: StorageType, namespace: string) {
    this.store = type === 'session' ? window.sessionStorage : window.localStorage
    this.namespace = namespace
    this.state = {}
    this.init()
  }

  /**
   * 初始化
   *
   * @category cache
   */
  init() {
    try {
      const data = this.getItem(this.namespace)
      if (data) {
        this.state = JSON.parse(data)
      }
      this.saveState()
    } catch (err) {
      this.state = {}
      this.saveState()
    }
  }

  /**
   * 使用命名空间保存到本地存储
   *
   * @category cache
   */
  saveState() {
    this.store.setItem(this.namespace, JSON.stringify(this.state))
  }

  /**
   * 保存值
   *
   * @category cache
   * @param {string} key 保存字段key
   * @param {*} data 保存字段value
   * @return {*} 返回当前命名空间的数据
   */
  setItem(key: string, data: any) {
    this.state[key] = data
    this.saveState()
    return this.state
  }

  /**
   * 获取给定key的值
   *
   * @category cache
   * @param {string} key 获取命名空间下字段key对应的值
   * @return {*} 返回key对应的值
   */
  getItem(key: string) {
    return this.state[key]
  }

  /**
   * 移除给定key的值
   *
   * @category cache
   * @param {string} key 命名空间下字段key对应的值
   * @return {*} 返回当前命名空间的数据
   */
  removeItem(key: string) {
    this.state = removeKeys(this.state, [key])
    this.saveState()
    return this.state
  }

  /**
   * 清空命名空间下的值
   *
   * @category cache
   */
  clear() {
    this.state = {}
    this.store.removeItem(this.namespace)
  }
}

/**
 * 生成指定命名空间的本地存储
 *
 * @category cache
 * @param {StorageType} [type='local'] 本地存储类型
 * @param {string} [namespace='xnomi-store'] 命名空间字符串名称
 * @return {Storage}
 */
export function createStorage(type: StorageType = 'local', namespace = 'xnomi-store'): Storage {
  if (xnomiStoreMap.has(namespace)) {
    return xnomiStoreMap.get(namespace)
  }
  xnomiStoreMap.set(namespace, new Storage(type, namespace))
  return xnomiStoreMap.get(namespace)
}
