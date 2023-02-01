/**
 * @module likeHtml
 */

import { faceEmojiPngMap } from '@flinks/emoji'
import { isImage } from '../file'
import { isLink } from '../rules'
import { getBaseUrl } from '../url'
import { stringifyStyle, CSSProperties } from './style'

export * from './style'

const DEFAULT_FLOWER_PLACEHOLDER = '[鲜花]'
const DEFAULT_FLOWER_PLACEHOLDER_ATTR = 'data-flower'
const DEFAULT_EMOJI_PLACEHOLDER_ATTR = 'data-emoji'

/**
 * 转换标签
 *
 * @param {string} str 源字符串
 * @return {string}
 */
export function covertToLikeHtml(str: string) {
  const hash = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&#39;': "'",
    '&quot;': '"',
  }
  const res = str.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, (tag) => hash[tag] || tag)
  return res
}

/**
 * 获取html文本中转化为纯文本信息
 *
 * @param {string} str 源字符串
 * @return {string}
 */
export function covertLikeHtmlToPureText(str: string) {
  const result = str.replace(
    /<(div|p|h1|h2|h3|h4|h5|h6|header|footer|section|aside|article|br)[^>]*>/gi,
    '\n'
  )
  return result.replace(/(^\n+)|(<[^>]+>)|(<style[^>]*>[\d\D]*?<\/style>)|(\n+$)/gi, '')
}

/**
 * 根据属性生成指定条件的正则表达式列表
 *
 * @param {Recordable} attrs 附加属性，键值对
 * @returns {RegExp[]}
 */
function generateRegExpByAttrs(attrs: Recordable) {
  const rules: RegExp[] = []
  Object.keys(attrs).forEach((key) => {
    if (attrs[key]) {
      rules.push(new RegExp(`${key}\\s*=\\s*(['"])${attrs[key]}\\1`, 'gim'))
    }
  })
  return rules
}

/**
 * 通过附加属性的筛选获取元素列表
 *
 * @param {string[]} list 元素列表
 * @param {Recordable} filter 属性筛选
 * @return {string[]}
 */
function getLikeHtmlByAttrs(list: string[], filter: Recordable) {
  let result = [...list]
  const rules: RegExp[] = generateRegExpByAttrs(filter)
  const res: string[] = []
  rules.forEach((reg) => {
    result.forEach((item) => {
      if (reg.test(item)) {
        res.push(item)
      }
    })
    result = res
  })
  return result
}

/**
 * 通过附加属性的筛选获取元素列表
 *
 * @param {string[]} list 元素列表
 * @param {Recordable} attr 属性筛选
 * @return {string[]}
 */
function getLikeHtmlByAttrKeys(list: string[], attr: string | string[]) {
  let result = [...list]
  const keys = Array.isArray(attr) ? attr : [attr]
  const rules = keys.map((key) => new RegExp(`${key}\\s*=\\s*(['"])([^\\1]+?)\\1`, 'gmi'))
  const res: string[] = []
  rules.forEach((reg) => {
    result.forEach((item) => {
      if (reg.test(item)) {
        res.push(item)
      }
    })
    result = res
  })
  return result
}

/**
 * 从文本中获取指定条件的标签
 *
 * @param {{ target: string, tag:string, attr: string | string[], filters?: Recordable }} params
 * - target: 需要解析的源文本
 * - tag: 需要解析元素的tagName
 * - attr: 需要获取属性值的解析元素的属性名称
 * - filters: 附加属性添加更快查询解析元素
 * @return {RegExpMatchArray}
 */
export function getTagFromLikeHtml(params: {
  target: string
  tag: string
  attr?: string | string[]
  filter?: Recordable
}) {
  const { target, tag, attr, filter } = params
  const singleTags = 'br,hr,img,input,param,meta,link'.split(',')
  let reg = new RegExp(`<${tag}[^<>]*>[\\d\\D]*?<\\/${tag}>`, 'gmi')
  // 判断是否为单标签
  if (singleTags.includes(tag)) {
    reg = new RegExp(`<${tag}[^<>]*\\/?>`, 'gmi')
  }
  let result = target.match(reg)
  if (result && result.length && attr) {
    result = getLikeHtmlByAttrKeys(result, attr)
  }
  if (result && result.length && filter && Object.keys(filter).length) {
    result = getLikeHtmlByAttrs(result, filter)
  }
  return result || []
}

/**
 * 获取html文本中某类元素指定属性的属性值
 *
 * @param {{ target: string, tag:string, attr: string | string[], filter?: Recordable }} params
 * - target: 需要解析的源文本
 * - tag: 需要解析元素的tagName
 * - attr: 需要获取属性值的解析元素的属性名称
 * - filter: 附加属性添加更快查询解析元素
 * @return {Recordable<any>[]}
 */
export function getAttrsFromLikeHtml(params: {
  target: string
  tag: string
  attr: string | string[]
  filter?: Recordable
}) {
  const { attr } = params
  const result = getTagFromLikeHtml(params)
  const attrList = result.map((item) => {
    const keys = Array.isArray(attr) ? attr : [attr]
    const rules = keys.map((key) => new RegExp(`${key}\\s*=\\s*(['"])([^\\1]+?)\\1`, 'gmi'))
    const result: Recordable = {}
    rules.forEach((rule) => {
      const list = rule.exec(item)
      if (list && list.length > 1) {
        const key = list[0].split('=')[0].trim()
        const value = list[2]
        result[key] = value
      }
    })
    return result
  })
  return attrList.filter((item) => item && Object.keys(item).length)
}

// -----------------------------------------------------------------链接处理 begin------------------------------------------------------------------------------
/**
 * 将链接字符串转换成a标签
 *
 * @param {string} link 链接字符串
 * @param {(string | CSSProperties)} [style] 样式
 * @return {string}
 */
export function covertLinkToATag(link: string, style?: string | CSSProperties) {
  const styles = stringifyStyle(style)
  return `<a class="primary-color" href="${link}" target="_blank" style="${styles}">${link}</a>`
}
/**
 * 将a标签转换成链接字符串
 *
 * @param {string} 源字符串
 * @return {string}
 */
export function covertATagToLink(str: string) {
  let res = str
  const imgEls = getTagFromLikeHtml({ target: str, tag: 'a', attr: 'href' })
  const imgUrls = getAttrsFromLikeHtml({ target: str, tag: 'a', attr: 'href' })
  imgEls.forEach((item, index) => {
    // 添加空格避免与后面的文本链接在一起
    res = res.replace(item, imgUrls[index].href + ' ')
  })
  return res
}
// -----------------------------------------------------------------链接处理 end------------------------------------------------------------------------------

// -----------------------------------------------------------------鲜花 begin------------------------------------------------------------------------------
/**
 * 将鲜花占位符转换成img标签
 *
 * @param {string} [placeholder='[鲜花]'] 占位符
 * @param {(string | CSSProperties)} [style] 样式
 * @param {string} [placeholderAttr='data-flower'] 占位符对应的属性字段名称
 * @return {string}
 */
export function covertFlowerToImgTag(
  placeholder: string = DEFAULT_FLOWER_PLACEHOLDER,
  style?: string | CSSProperties,
  placeholderAttr: string = DEFAULT_FLOWER_PLACEHOLDER_ATTR
) {
  const styles = stringifyStyle(style)
  return `<img src="//linkstech.oss-cn-shenzhen.aliyuncs.com/upload/20220304/58c6b9525a82426794ea29c8c9cec3ed.png" title="${placeholder}" ${placeholderAttr}="${placeholder}" title="${placeholder}" data-emoji="${placeholder}" style="${styles}" />`
}

/**
 * 将鲜花链接转换成鲜花占位符
 *
 * @param {string} str 源字符串
 * @param {string} [placeholderAttr='data-flower'] 占位符对应的属性字段名称
 * @return {string}
 */
export function covertImgTagToFlower(
  str: string,
  placeholderAttr: string = DEFAULT_FLOWER_PLACEHOLDER_ATTR
) {
  let res = str
  const imgEls = getTagFromLikeHtml({ target: str, tag: 'img', attr: placeholderAttr })
  const imgUrls = getAttrsFromLikeHtml({ target: str, tag: 'img', attr: placeholderAttr })
  imgEls.forEach((item, index) => {
    // 添加空格避免与后面的文本链接在一起
    res = res.replace(item, imgUrls[index][placeholderAttr])
  })
  return res
}
// -----------------------------------------------------------------链接处理 end------------------------------------------------------------------------------

// -----------------------------------------------------------------图片处理 begin------------------------------------------------------------------------------
/**
 * 将图片链接转换成img标签
 *
 * @param {string} link 源字符串
 * @param {(string | CSSProperties)} [style] 样式
 * @return {string}
 */
export function covertLinkToImgTag(link: string, style?: string | CSSProperties) {
  const styles = stringifyStyle(style)
  return `<img src="${link}" alt="图片" style="${styles}" />`
}

/**
 * 将img标签转为值为src的字符串
 *
 * @param {string} str 处理的字符串
 * @return {string}
 */
export function covertImgTagToLink(str: string) {
  let res = str
  const imgEls = getTagFromLikeHtml({ target: str, tag: 'img', attr: 'src' })
  const imgUrls = getAttrsFromLikeHtml({ target: str, tag: 'img', attr: 'src' })
  imgEls.forEach((item, index) => {
    // 添加空格避免与后面的文本链接在一起
    res = res.replace(item, imgUrls[index].src + ' ')
  })
  return res
}
// -----------------------------------------------------------------链接处理 end------------------------------------------------------------------------------

// -----------------------------------------------------------------表情处理 begin------------------------------------------------------------------------------
/**
 * 转换表情占位符为img标签
 *
 * @param {string} placeholder 表情占位符
 * @param {(string | CSSProperties)} [style] 样式
 * @return {string}
 */
export function covertEmojiToImgTag(placeholder: string, style?: string | CSSProperties) {
  const styles = stringifyStyle(style)
  const url = faceEmojiPngMap.get(placeholder)
  if (!url) return placeholder
  return `<img src="${url}" title="${placeholder}" data-emoji="${placeholder}"  alt="${placeholder}" style="${styles}" />`
}

/**
 * 将表情img标签转为值为表情占位符的字符串
 *
 * @param {string} str 处理的字符串
 * @param {string} [placeholderAttr='data-emoji'] 占位符对应的属性
 * @return {string}
 */
export function covertImgTagToEmoji(
  str: string,
  placeholderAttr: string = DEFAULT_EMOJI_PLACEHOLDER_ATTR
) {
  let res = str
  const imgEls = getTagFromLikeHtml({ target: str, tag: 'img', attr: placeholderAttr })
  const placeholders = getAttrsFromLikeHtml({ target: str, tag: 'img', attr: placeholderAttr })
  imgEls.forEach((item, index) => {
    // 添加空格避免与后面的文本链接在一起
    res = res.replace(item, placeholders[index][placeholderAttr] + ' ')
  })
  return res
}
// -----------------------------------------------------------------链接处理 end------------------------------------------------------------------------------

/**
 * 元素类型
 *
 * @enum {number}
 */
export enum ElementType {
  /**
   * 文本
   */
  text = 'text',
  /**
   * 链接
   */
  link = 'link',
  /**
   * 图片
   */
  image = 'image',
  /**
   * 表情
   */
  emoji = 'emoji',
  /**
   * 鲜花
   */
  flower = 'flower',
}

/**
 * 元素模型结构
 *
 * @interface ElementModel
 */
export interface ElementModel {
  /**
   * 元素类型
   */
  type: ElementType
  /**
   * 元素内容
   */
  value: string
}

/**
 * 类型分隔符
 */
const splitSymbol = '|%%%%|'

interface ParamsInterface {
  /**
   * 表情占位符对应的属性字段名称
   */
  emojiPlaceholderAttr?: string
  /**
   * 鲜花占位符对应的属性字段名称
   */
  flowerPlaceholderAttr?: string
  /**
   * 鲜花的占位符
   */
  flowerPlaceholder?: string
}

/**
 * 将文本转换为元素
 *
 * @param {string} str 源字符串
 * @return {ElementModel[]}
 */
export function covertLikeHtmlToElements(str: string, params?: ParamsInterface): ElementModel[] {
  // 将图片标签链接转化成表情占位符
  let res = covertImgTagToEmoji(str, params?.emojiPlaceholderAttr)
  // 将图片标签链接转化成鲜花占位符
  res = covertImgTagToFlower(res, params?.flowerPlaceholderAttr)
  // 将图片标签链接转化成链接
  res = covertImgTagToLink(res)
  // 将a标签转换成链接
  res = covertATagToLink(res)
  // 去除html标签并转化成文本
  res = covertLikeHtmlToPureText(res)
  // 将链接，表情占位符，鲜花占位符和其他文本分隔开
  res = res.replace(
    /((https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|])|(\[.*?\])/gim,
    (url) => `${splitSymbol}${url}${splitSymbol}`
  )
  const list = res.split(splitSymbol).filter(Boolean)
  const flowerPlaceholder = params?.flowerPlaceholder || DEFAULT_FLOWER_PLACEHOLDER
  return list.map((value) => {
    let type = ElementType.text
    if (isImage(getBaseUrl(value, true))) {
      type = ElementType.image
    } else if (isLink(value)) {
      type = ElementType.link
    } else if (faceEmojiPngMap.get(value)) {
      type = ElementType.emoji
    } else if (flowerPlaceholder === value) {
      type = ElementType.flower
    }
    return {
      type,
      value,
    }
  })
}

/**
 * 元素样式
 */
interface ElementStyle {
  /**
   * 图片样式
   */
  image?: string | CSSProperties
  /**
   * 链接样式
   */
  link?: string | CSSProperties
  /**
   * 表情样式
   */
  emoji?: string | CSSProperties
  /**
   * 鲜花样式
   */
  flower?: string | CSSProperties
}

/**
 * 将普通字符串转换成html文本
 *
 * @param {string} str 处理的字符串
 * @param {ElementStyle} [styles] 样式
 * @return {string}
 */
export function covertStringToLikeHtml(str: string, styles?: ElementStyle) {
  const data = covertLikeHtmlToElements(str)
  const list = data.map((item) => {
    switch (item.type) {
      case ElementType.image:
        return covertLinkToImgTag(item.value, styles?.image)
      case ElementType.link:
        return covertLinkToATag(item.value, styles?.link)
      case ElementType.emoji:
        return covertEmojiToImgTag(item.value, styles?.emoji)
      case ElementType.flower:
        return covertFlowerToImgTag(item.value, styles?.flower)
      default:
        return item.value
    }
  })
  return list.join('')
}
