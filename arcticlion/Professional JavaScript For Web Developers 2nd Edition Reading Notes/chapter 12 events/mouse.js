/*
 * 鼠标事件
 * 取得鼠标事件客户端的坐标信息
 * clientX和clientY:事件发生时鼠标指针在视口中的水平和垂直坐标
 * 屏幕坐标位置
 * screenX和screenY确定事件发生时鼠标指针相对于整个屏幕的坐标信息
 * DOM规定4个属性(shiftKey, ctrlKey, altKey, metaKey)修改键的状态
 * 4个属性返回布尔值：用户按下该键则值为true
 */
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event) {
    event = EventUtil.getEvent(event);
    alert("Client coordinates: " + event.clientX + "," + event.clientY);
    alert("Screen coordinates: " + event.screenX + "," + event.screenY);
    //检测用户按下了修改键数目
    var keys = new Array();

    if (event.shiftKey) {
        keys.push("shift");

    if (event.ctrlKey) {
        keys.push("ctrl");

    if (event.altKey) {
        keys.push("alt");

    if (event.metaKey) {
        keys.push("meta");

    alert("Keys: " + keys.join(","));
});

