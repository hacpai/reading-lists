/*
 * IE的event对象访问方式取决于指定事件处理程序的方法
 * DOM0级方法添加事件处理程序
 * event对象作为window对象一个属性
 * attachEvent()添加事件处理程序
 * event对象作为参数传入事件处理程序函数中
 * HTML特性指定的事件处理程序通过event的变量访问event对象
 */
var btn = document.getElementById("myBtn");
btn.onclick = function() {
    var event = window.event;
    alert(event.type);    //"click"
};

btn.attachEvent("onclick", function(event) {
    alert(event.type);    //"clcik"
});

<input type="button" value="Click Me" onclick="alert(event.type)"/>

