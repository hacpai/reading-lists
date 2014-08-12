/*
 * addEventListener()用于指定事件处理程序操作
 * 接受3个参数
 * 要处理的事件名
 * 作为事件处理程序的函数
 * 是否捕获阶段调用事件处理程序
 */
var btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
    alert(this.id);
}, false);    //false指冒泡阶段

