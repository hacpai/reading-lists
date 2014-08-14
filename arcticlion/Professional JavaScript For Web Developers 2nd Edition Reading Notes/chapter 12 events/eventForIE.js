/*
 * IE的event对象访问方式取决于指定事件处理程序的方法
 * DOM0级方法添加事件处理程序
 * event对象作为window对象一个属性
 */
var btn = document.getElementById("myBtn");
btn.onclick = function() {
    var event = window.event;
    alert(event.type);    //"click"
};

