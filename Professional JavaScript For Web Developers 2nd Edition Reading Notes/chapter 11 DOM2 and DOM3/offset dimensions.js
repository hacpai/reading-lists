/*
 * 偏移量
 * 求某个元素在页面上的偏移量
 * 将这个元素的offsetLeft和offsetTop与其offsetParent的这些属性相加
 * 直至循环到根元素
 * 使用offsetParent属性在DOM层次中逐级向上回溯
 */
function getElementLeft(element) {
    var actualLeft = element.offsetLeft;
    var curent = element.offsetParent;

    while (curent != null) {
        actualLeft += curent.offsetLeft;
        curent = curent.offsetLeft;
    }

    return actualLeft;
}

function getElementTop(element) {
    var actualTop = element.offsetTop;
    var curent = element.offsetParent;

    while (curent != null) {
        actualTop += curent.offsetTop;
        curent = curent.offsetTop;
    }

    return actualTop;
}
