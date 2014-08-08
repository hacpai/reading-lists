/*
 * 客户端大小
 * 元素内部的空间大小
 * 2个属性：clientWidth和clientHeight
 * 首先检测document.compatMode属性，确定浏览器是否混杂模式
 * 确定浏览器视口大小
 * document.documentElement或document.body(IE之前的版本)
 */
function getViewport() {
    if (document.compatMode == "BackCompat") {
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
    }
}
