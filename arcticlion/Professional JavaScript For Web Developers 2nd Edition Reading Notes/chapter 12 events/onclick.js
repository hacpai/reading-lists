/*
 * 事件处理程序名称以"on"
 * 因此"click"事情处理程序就是"onclick"
 */
var btn = document.getElementById("myBtn");
btn.onClick = function() {
    alert("CLicked");
}

