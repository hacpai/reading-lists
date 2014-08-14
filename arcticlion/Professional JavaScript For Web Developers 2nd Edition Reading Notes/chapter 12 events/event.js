/*
 * 在触发DOM上某个事件时
 * 会自动产生event对象
 * 包含事件元素、类型、及特定事件相关信息
 * event,type表示事件类型
 */
var btn = document.getElementById("myBtn");
btn.onclick = function(event) {
    alert(event.type);    //"click"
};
btn.addEventListener("click", function(event) {
    alert(event.type);    //"click"
}, false);
<input type="button" value="Click Me" onclick="alert(event.type)"/>

