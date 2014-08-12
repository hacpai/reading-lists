/*
 * addEventListener()用于指定事件处理程序操作
 * 接受3个参数
 * 要处理的事件名
 * 作为事件处理程序的函数
 * 是否捕获阶段调用事件处理程序
 * 添加的事件处理程序也是在其依附的元素作用域中运行
 * 两个事件处理程序会按照添加它们的顺序触发
 * removeEentListener()移除添加的事件处理程序
 * 同样三个参数，必须相同
 * 匿名函数无法移除
 */
var btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
    alert(this.id);    //"myBtn"
}, false);    //false指冒泡阶段
btn.addEventListener("click", function() {
    alert("Hello, world!");
}, false);

btn.removeEventListener("click", function() {
    alert(this.id)
}, fasle);    //无效

var handler = function() {
    alert("Remove me.");
};
btn.addEventListener("click", handler, false);
btn.removeEventListener("click", handler, false);    //有效


