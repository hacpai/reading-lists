/*
 * 以跨浏览器方式处理事件
 * 一般使用js库
 * EventUtil对象处理浏览器之间的差异
 * EventUtil对象中有一个addHandler()
 * 接受3个参数
 * 要操作的元素
 * 事件名称
 * 事件处理函数
 *     if addEventListener添加事件处理程序
 *     elif attachEvent
 *     else DOM0级方法
 * 跨浏览器事件对象
 *     getEvent()返回对event对象的引用
 *
 */
var EventUtil = {

    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    getEvent: function(event) {
        return event ? event : window.event;
    },

    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type = null];
        }
    }
}

//使用EventUtil对象
var btn = document.getElementById("myBtn");
var handler = function () {
    alert("Clicked");
};
EventUtil.addHandler(btn, "click", handler);

EventUtil.removeHandler(btn, "click", handler);

