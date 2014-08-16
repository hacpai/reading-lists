/*
 * IE的event对象访问方式取决于指定事件处理程序的方法
 * DOM0级方法添加事件处理程序
 * event对象作为window对象一个属性
 * attachEvent()添加事件处理程序
 * event对象作为参数传入事件处理程序函数中
 * HTML特性指定的事件处理程序通过event的变量访问event对象
 * IE事件处理程序作用域是根据他指定的方式确定的
 * 故this不一定会等于事件的目标，使用event.srcElement保险
 * DOM0级方法指定的事件处理程序中，srcElement属性===this
 * returnValue相当于preventDefault()取消给定事件的默认行为
 * cancelBubble与stopPropagation()相同，用来停止事件冒泡
 */
var btn = document.getElementById("myBtn");
btn.onclick = function() {
    var event = window.event;
    alert(event.type);    //"click"
    alert(window.event.srcElement === this);    //true
};

btn.attachEvent("onclick", function(event) {
    alert(event.type);    //"clcik"
    alert(event.srcElement === this);    //false
});

<input type="button" value="Click Me" onclick="alert(event.type)"/>

//使用returnValue达到阻止链接默认行为的目的
var link = document.getElementById("myLink");
link.onclick = function() {
    window.event.returnValue = false;
};

//通过在onclick事件处理程序中将cancelBubble设置为true，可阻止事件通过冒泡而触发document.body中注册的事件处理程序
//结果，单击按钮之后，智慧显示一个警告框
btn.onclick = function() {
    alert("Clicked");
    window.event.cancelBubble = true;
};

document.body.onclick = function() {
    alert("Body clicked");
};

