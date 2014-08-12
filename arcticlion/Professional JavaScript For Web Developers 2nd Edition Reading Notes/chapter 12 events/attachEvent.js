/*
 * IE的事件处理程序
 * attachEvent()
 * 接受2个参数
 * 事件程序名称:需要加"on"
 * 事件处理函数
 */
var btn = document.getElementById("myBtn");
btn.attchEvent("onclick", function() {
    alert("Click");
});

