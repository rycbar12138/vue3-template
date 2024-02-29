(function (base, min, max, scaling) {
  let cacheWidth = 0
  let timer
  const docEl = document.documentElement
  const recalc = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    clientWidth = Math.max(Math.min(clientWidth, max), min)
    if (cacheWidth !== clientWidth) {
      clearInterval(timer)
      cacheWidth = clientWidth
      docEl.style.fontSize = scaling * (clientWidth / base) + 'px'
    }
  }
  recalc()
  setTimeout(recalc, 300)
  if (!window.addEventListener) return
  const resizeWithTimer = function () {
    timer = setInterval(recalc, 10)
  }
  if ('onorientationchange' in window) window.addEventListener('orientationchange', resizeWithTimer)
  if ('onresize' in window) window.addEventListener('resize', resizeWithTimer)
})(375, 300, 768, 100);
