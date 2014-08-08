/* 
 * 滚动大小
 * scrollWidth和scrollHeight确定元素内容实际大小
 * 带有垂直滚动条的页面总高度是document.documentElement.scrollHeight
 * 不包含滚动条的页面因为scrollWidth和scrollHeight与clientWidth和clientHeight关系不清晰
 * 所以取得scrollWidth/clientWidth和scrollHeight/clientHeight的最大值，保证跨浏览器兼容
 * 处于混杂模式下的IE需用document.body代替document.documentElement
 */
var docHeight = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight);
var docWidth = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth);
