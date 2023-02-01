export function flexible(designWidth = 375) {
  const win = window
  const doc = win.document
  const docEl = doc.documentElement
  let metaEl = doc.querySelector('meta[name="viewport"]')
  const flexibleEl = doc.querySelector('meta[name="flexible"]')
  let dpr = 0
  let scale = 0
  let tid: TimeoutHandle
  if (metaEl) {
    const match = metaEl.getAttribute('content')?.match(/initial-scale=([\d.]+)/)
    if (match) {
      scale = parseFloat(match[1])
      dpr = parseInt(1 / scale)
    }
  } else if (flexibleEl) {
    const content = flexibleEl.getAttribute('content')
    if (content) {
      const initialDpr = content.match(/initial-dpr=([\d.]+)/)
      const maximumDpr = content.match(/maximum-dpr=([\d.]+)/)
      if (initialDpr) {
        dpr = parseFloat(initialDpr[1])
        scale = parseFloat((1 / dpr).toFixed(2))
      }
      if (maximumDpr) {
        dpr = parseFloat(maximumDpr[1])
        scale = parseFloat((1 / dpr).toFixed(2))
      }
    }
  }

  if (!dpr && !scale) {
    const isIPhone = win.navigator.appVersion.match(/iphone/gi)
    const devicePixelRatio = win.devicePixelRatio
    if (isIPhone) {
      // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
      if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
        dpr = 3
      } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
        dpr = 2
      } else {
        dpr = 1
      }
    } else {
      // 其他设备下，仍旧使用1倍的方案
      dpr = 1
    }
    scale = 1 / dpr
  }

  docEl.setAttribute('data-dpr', `${dpr}`)
  if (!metaEl) {
    metaEl = doc.createElement('meta')
    metaEl.setAttribute('name', 'viewport')
    metaEl.setAttribute(
      'content',
      'initial-scale=' +
        scale +
        ', maximum-scale=' +
        scale +
        ', minimum-scale=' +
        scale +
        ', user-scalable=no'
    )
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl)
    } else {
      const wrap = doc.createElement('div')
      wrap.appendChild(metaEl)
      doc.write(wrap.innerHTML)
    }
  }

  function refreshRem() {
    let width = docEl.getBoundingClientRect().width
    if (width / dpr > designWidth) {
      width = designWidth * dpr
    }
    const rem = width / (designWidth / 100)
    docEl.style.fontSize = rem + 'px'
  }

  refreshRem()

  win.addEventListener(
    'resize',
    function () {
      tid && clearTimeout(tid)
      tid = setTimeout(refreshRem, 100)
    },
    false
  )
  win.addEventListener(
    'pageshow',
    function (e) {
      if (e.persisted) {
        tid && clearTimeout(tid)
        tid = setTimeout(refreshRem, 100)
      }
    },
    false
  )

  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = 12 * dpr + 'px'
  } else {
    doc.addEventListener(
      'DOMContentLoaded',
      function () {
        doc.body.style.fontSize = 12 * dpr + 'px'
      },
      false
    )
  }
}
