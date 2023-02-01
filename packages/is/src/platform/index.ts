/**
 * @module platform
 */

/**
 * 通过正则表达式判断为什么平台
 *
 * @param {RegExp} regexp 正则表达式
 * @return {boolean}
 */
const isPlatform = (regexp: RegExp) => {
  return () => !!navigator.userAgent.match(regexp)?.length
}

/**
 * 判断设备
 *
 * @function
 * @param {RegExp} regexp 正则表达式
 * @return {boolean}
 */
export const isDevice = (regexp: RegExp) => isPlatform(regexp)

/**
 * 是否为手机端
 *
 * @function
 * @return {boolean}
 */
export const isMobile = isPlatform(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)

/**
 * 是否为PC端
 *
 * @function
 * @return {boolean}
 */
export const isPc = () => !isMobile()

/**
 * 是否为安卓端
 *
 * @function
 * @return {boolean}
 */
export const isAndroid = isPlatform(/android|adr/gi)

/**
 * 是否为iOS端
 *
 * @function
 * @return {boolean}
 */
export const isIOS = isPlatform(/\(i[^;]+;( U;)? CPU.+Mac OS X/gi)

/**
 * 是否为iPhone端
 *
 * @function
 * @return {boolean}
 */
export const isIPhone = isPlatform(/iPhone/gi)

/**
 * 是否为iPad端
 *
 * @function
 * @return {boolean}
 */
export const isIPad = isPlatform(/iPad/gi)

/**
 * 是否为企业微信端
 *
 * @function
 * @return {boolean}
 */
export const isWorkWx = isPlatform(/wxwork/i)

/**
 * 是否为谷歌端
 *
 * @function
 * @return {boolean}
 */
export const isChrome = isPlatform(/Chrome/i)

/**
 * 是否为火狐端
 */
export const isFirefox = isPlatform(/Firefox/gi)

/**
 * 是否为Safari端
 *
 * @function
 * @return {boolean}
 */
export const isSafari = isPlatform(/version.*safari/gi)

/**
 * 是否为微信端
 *
 * @function
 * @return {boolean}
 */
export const isMicroMessenger = isPlatform(/MicroMessenger/gi)

/**
 * 是否为QQ浏览器端
 *
 * @function
 * @return {boolean}
 */
export const isQQBrowser = isPlatform(/qq/gi)

/**
 * 是否为支付宝
 *
 * @function
 * @return {boolean}
 */
export const isAlipay = isPlatform(/Alipay/gi)

/**
 * 是否为DingTalk
 *
 * @function
 * @return {boolean}
 */
export const isDingTalk = isPlatform(/DingTalk/gi)

/**
 * 是否为百度浏览器
 *
 * @function
 * @return {boolean}
 */
export const isBaidu = isPlatform(/baiduboxapp/gi)

/**
 * 是否为UC浏览器
 *
 * @function
 * @return {boolean}
 */
export const isUC = isPlatform(/UCBrowser/gi)

/**
 * 是否为Opera浏览器
 *
 * @function
 * @return {boolean}
 */
export const isOpera = isPlatform(/OPR/gi)

/**
 * 是否为vivo自带浏览器
 *
 * @function
 * @return {boolean}
 */
export const isVivo = isPlatform(/vivobrowser/gi)

/**
 * 是否为猎豹浏览器
 *
 * @function
 * @return {boolean}
 */
export const isLieBao = isPlatform(/liebaofast/gi)

/**
 * 是否为夸克浏览器
 *
 * @function
 * @return {boolean}
 */
export const isQuark = isPlatform(/quark/gi)

/**
 * 是否为edge浏览器
 *
 * @function
 * @return {boolean}
 */
export const isEdge = isPlatform(/Edg/gi)

/**
 * 是否为搜狗浏览器
 *
 * @function
 * @return {boolean}
 */
export const isSogou = isPlatform(/sogoumobilebrowser/gi)

/**
 * 获取浏览器名称
 * 
 * @function
 * @return {string}
 */

export const getBrowserName = () => {
  if (isSogou()) return '搜狗浏览器'
  if (isEdge()) return 'edge浏览器'
  if (isQuark()) return '夸克浏览器'
  if (isMicroMessenger()) return '微信浏览器'
  if (isWorkWx()) return '企业微信浏览器'
  if (isQQBrowser()) return 'QQ浏览器'
  if (isLieBao()) return '猎豹浏览器'
  if (isUC()) return 'UC浏览器'
  if (isBaidu()) return '百度浏览器'
  if (isFirefox()) return '火狐浏览器'
  if (isVivo()) return 'vivo自带浏览器'
  if (isDingTalk()) return 'DingTalk'
  if (isAlipay()) return '支付宝'
  if (isOpera()) return 'Opera浏览器'
  if (isChrome()) return '谷歌浏览器'
  if (isSafari()) return 'Safari浏览器'
  return '未知浏览器'
}

interface DeviceInfo {
  /**
   * 设备名称
   */
  device: string
  /**
   * 系统名称
   */
  system: string
  /**
   * 浏览器名称
   */
  browser: string
  /**
   * ua
   */
  userAgent: string
}

/**
 * 获取设备信息
 * 
 * @return {DeviceInfo}
 */
export const getDeviceInfo = () => {
  const ua = navigator.userAgent
  const deviceInfo = {} as DeviceInfo
  if (isIPhone() || isIPad()) {
    if (isIPhone()) {
      deviceInfo.device = 'iPhone'
    } else {
      deviceInfo.device = 'iPad'
    }
    const res = ua.match(/iPhone OS .*?(?= )/gi)
    if (res?.length) {
      deviceInfo.system = res[0]
    } else {
      deviceInfo.system = 'unknown'
    }
  } else if (isAndroid()) {
    const res = ua.match(/Android.*; ?(.*(?= Build))/gi)
    if (res && res?.length > 1) {
      deviceInfo.system = res[1]
    }
    const res2 = ua.match(/Android.*?(?=;)/gi)
    if (res2?.length) {
      deviceInfo.system = res2[0]
    }
    deviceInfo.device = deviceInfo.device || 'unknown'
    deviceInfo.system = deviceInfo.system || 'unknown'
  }
  deviceInfo.browser = getBrowserName()
  deviceInfo.userAgent = ua
  return deviceInfo
}
