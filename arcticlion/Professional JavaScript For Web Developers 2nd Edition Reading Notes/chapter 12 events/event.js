/*
 * 在触发DOM上某个事件时
 * 会自动产生event对象
 * 包含事件元素、类型、及特定事件相关信息
 * event,type表示事件类型
 * 事件处理程序内部this === event.currentTarget
 * event.target等于真正的目标值
 * 直接将事件处理程序指点给目标元素，三者相等
 * 事件处理程序在按钮的富姐电中this === currentTarget
 */
var btn = document.getElementById("myBtn");
btn.onclick = function(event) {
    alert(event.type);    //"click"
    alert(event.currentTarget === this);    //true
    alert(event.target === this);    //true
};
btn.addEventListener("click", function(event) {
    alert(event.type);    //"click"
}, false);
<input type="button" value="Click Me" onclick="alert(event.type)"/>

document.body.onclick = function(event) {
    alert(event.currentTarget === document.body);    //true
    alert(this === document.body);    //true
    alert(event.target === document.getElementById("myBtn");    //true
};

