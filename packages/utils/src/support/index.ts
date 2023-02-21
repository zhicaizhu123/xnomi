/**
 * @module support
 */

/**
 * 是否支持rtc
 *
 * @category support
 */
export function isSupportRTC() {
  return ['RTCPeerConnection', 'webkitRTCPeerConnection'].some((item) => item in window)
}

/**
 * 是否支持全屏功能
 *
 * @category support
 */
export function isSupportFullscreen() {
  const functionsMap = [
    [
      'requestFullscreen',
      'exitFullscreen',
      'fullscreenElement',
      'fullscreenEnabled',
      'fullscreenchange',
      'fullscreenerror',
    ],
    [
      'webkitRequestFullscreen',
      'webkitExitFullscreen',
      'webkitFullscreenElement',
      'webkitFullscreenEnabled',
      'webkitfullscreenchange',
      'webkitfullscreenerror',
    ],
    [
      'webkitRequestFullScreen',
      'webkitCancelFullScreen',
      'webkitCurrentFullScreenElement',
      'webkitCancelFullScreen',
      'webkitfullscreenchange',
      'webkitfullscreenerror',
    ],
    [
      'mozRequestFullScreen',
      'mozCancelFullScreen',
      'mozFullScreenElement',
      'mozFullScreenEnabled',
      'mozfullscreenchange',
      'mozfullscreenerror',
    ],
    [
      'msRequestFullscreen',
      'msExitFullscreen',
      'msFullscreenElement',
      'msFullscreenEnabled',
      'MSFullscreenChange',
      'MSFullscreenError',
    ],
  ]
  let isSupport = false
  if (typeof document === 'undefined') isSupport
  for (const m of functionsMap) {
    if (m[1] in document) {
      isSupport = true
      break
    }
  }
  return isSupport
}

/**
 * 是否支持flash
 *
 * @category support
 * @function
 * @return {boolean}
 */
export const isSupportFlash = () => {
  let swf
  const plugins = navigator.plugins
  if (plugins && plugins.length > 0) {
    swf = plugins['Shockwave Flash']
  } else if (document.all) {
    // @ts-ignore
    swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
  }
  return !!swf
}
