const htmlEl = document.documentElement

// 375px => 16px
// 320px => 12px

function setRemUnit() {
    const htmlWidth = htmlEl.clientWidth
    const htmlFontsize = htmlWidth / 10
    console.log('htmlFontsize', htmlFontsize)
    htmlEl.style.fontSize = htmlFontsize + 'px'
}
setRemUnit()

window.addEventListener('resize', setRemUnit)