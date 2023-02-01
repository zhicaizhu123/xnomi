/**
 * @module mitt
 */

export type EventType = string | symbol

/** 事件处理程序可以接受可选的事件参数, 并且不应该返回值 */
export type Handler<T = any> = (event?: T) => void
export type WildcardHandler = (type: EventType, event?: any) => void

/** 类型的所有当前注册的事件处理程序的数组 */
export type EventHandlerList = Array<Handler>
export type WildCardEventHandlerList = Array<WildcardHandler>

/** 事件类型及其对应的事件处理程序的映射。 */
export type EventHandlerMap = Map<EventType, EventHandlerList | WildCardEventHandlerList>

/**
 * 事件中心接口
 */
export interface Emitter {
  all: EventHandlerMap

  /**
   * 监听事件
   */
  on<T = any>(type: EventType, handler: Handler<T>): void
  on(type: '*', handler: WildcardHandler): void

  /**
   * 注销事件
   */
  off<T = any>(type: EventType, handler: Handler<T>): void
  off(type: '*', handler: WildcardHandler): void

  /**
   * 触发事件
   */
  emit<T = any>(type: EventType, event?: T): void
  emit(type: '*', event?: any): void

  /**
   * 清空事件
   */
  clear(): void
}

/**
 * 发布订阅
 *
 * @param {EventHandlerMap} [all] 全部
 * @return {Emitter}
 */
export function mitt(all?: EventHandlerMap): Emitter {
  all = all || new Map()

  return {
    /**
     * 事件名称到已注册处理程序函数的映射
     */
    all,

    /**
     * 为给定类型注册事件处理程序。
     * @param {string|symbol} type 要侦听的事件类型，或“”*“”表示所有事件
     * @param {Function} handler 函数，以响应给定事件
     */
    on<T = any>(type: EventType, handler: Handler<T>) {
      const handlers = all?.get(type)
      const added = handlers && handlers.push(handler)
      if (!added) {
        all?.set(type, [handler])
      }
    },

    /**
     * 删除给定类型的事件处理程序。
     * @param {string|symbol} type  要从其中注销“处理程序”或““*”的事件类型
     * @param {Function} handler 要删除的处理程序函数
     */
    off<T = any>(type: EventType, handler: Handler<T>) {
      const handlers = all?.get(type)
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1)
      }
    },

    /**
     * 调用给定类型的所有处理程序。
     * 如果存在，' "*" '处理程序将在类型匹配的处理程序之后调用。
     *
     * 注意:不支持手动触发“*”处理程序。
     *
     * @param {string|symbol} type 要调用的事件类型
     * @param {any} [evt] 传递给每个处理程序的任何值(推荐使用强大的对象)
     */
    emit<T = any>(type: EventType, evt: T) {
      ;((all?.get(type) || []) as EventHandlerList).slice().map((handler) => {
        handler(evt)
      })
      ;((all?.get('*') || []) as WildCardEventHandlerList).slice().map((handler) => {
        handler(type, evt)
      })
    },

    /**
     * 全部清除
     */
    clear() {
      this.all.clear()
    },
  }
}
