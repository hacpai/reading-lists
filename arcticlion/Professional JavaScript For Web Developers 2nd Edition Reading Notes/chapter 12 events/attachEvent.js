/*
 * IE的事件处理程序
 * attachEvent()
 * 接受2个参数
 * 事件程序名称:需要加"on"
 * 事件处理函数
 * 事件处理程序的作用域为window
 * 添加多个事件处理程序以相反的添加顺序触发
 * detachEvent()移除事件处理函数
 */
var btn = document.getElementById("myBtn");
btn.attchEvent("onclick", function() {
    alert("Click");
    alert(this === window);    //true
});
btn.attachEvent("onclick", function() {
    alert("Hello world!");
});    //"Hello world!"
         "Click"
         true

var handler = function() {
    alert("Click");
};
btn.attachEvent("onclick", handler);

btn.detachEvent("onclick", handler);

