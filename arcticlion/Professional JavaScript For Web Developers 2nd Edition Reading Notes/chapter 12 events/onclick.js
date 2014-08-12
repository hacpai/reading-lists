/*
 * 事件处理程序名称以"on"
 * 因此"click"事情处理程序就是"onclick"
 * DOM0级事件处理程序
 * 单击按钮显示的是元素的ID
 * 元素的方法
 */
var btn = document.getElementById("myBtn");
btn.onClick = function() {
    alert("CLicked");
    alert(this.id);    //"myBtn"
}

