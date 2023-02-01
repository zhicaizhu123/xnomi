import { isArray, isObject, isString } from '../is'
import * as CSS from 'csstype'

/**
 * 样式接口
 */
export interface CSSProperties
  extends CSS.Properties<string | number>,
    CSS.PropertiesHyphen<string | number> {}

const cacheStringFunction = (fn) => {
  const cache = Object.create(null)
  return (str) => {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

const hyphenateRE = /\B([A-Z])/g
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase())

function makeMap(str, expectsLowerCase = false) {
  const map = Object.create(null)
  const list = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val]
}

const isNoUnitNumericStyleProp = makeMap(
  `animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`
)

/**
 * 格式化样式
 *
 * @param {unknown} value 样式值
 * @return {(CSSProperties | string | undefined)}
 */
export function normalizeStyle(value: unknown): CSSProperties | string | undefined {
  if (isArray(value)) {
    const res = {}
    for (let i = 0; i < value.length; i++) {
      const item = value[i]
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item)
      if (isObject(normalized)) {
        for (const key in normalized) {
          res[key] = normalized[key]
        }
      }
    }
    return res
  } else if (isString(value)) {
    return value
  } else if (isObject(value)) {
    return value
  }
}

const listDelimiterRE = /;(?![^(]*\))/g
const propertyDelimiterRE = /:(.+)/

/**
 * 将字符串样式转化为对象
 *
 * @param {string} cssText 样式
 * @return {CSSProperties}
 */
export function parseStringStyle(cssText: string): CSSProperties {
  const ret = {}
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE)
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim())
    }
  })
  return ret
}

/**
 * 将样式转化为字符串格式
 *
 * @param {(CSSProperties | string | undefined)} styles 样式
 * @return {string}
 */
export function stringifyStyle(styles: CSSProperties | string | undefined): string {
  let ret = ''
  if (!styles || isString(styles)) {
    return ret
  }
  for (const key in styles) {
    const value = styles[key]
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key)
    if (isString(value) || (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
      ret += `${normalizedKey}:${value};`
    }
  }
  return ret
}

/**
 * 格式化class
 *
 * @param {unknown} value 类名
 * @return {string}
 */
export function normalizeClass(value: unknown): string {
  let res = ''
  if (isString(value)) {
    res = value
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i])
      if (normalized) {
        res += normalized + ' '
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + ' '
      }
    }
  }
  return res.trim()
}

/**
 * 格式化props
 *
 * @param {(Record<string, any> | null)} props 属性
 * @return {(Record<string, any> | null)}
 */
export function normalizeProps(props: Record<string, any> | null): Record<string, any> | null {
  if (!props) return null
  let { class: klass, style } = props
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass)
  }
  if (style) {
    props.style = normalizeStyle(style)
  }
  return props
}
