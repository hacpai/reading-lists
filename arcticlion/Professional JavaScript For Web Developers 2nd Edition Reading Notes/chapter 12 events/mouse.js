/*
 * 鼠标事件
 * 取得鼠标事件客户端的坐标信息
 * clientX和clientY:事件发生时鼠标指针在视口中的水平和垂直坐标
 * 屏幕坐标位置
 * screenX和screenY确定事件发生时鼠标指针相对于整个屏幕的坐标信息
 */
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event) {
    event = EventUtil.getEvent(event);
    alert("Client coordinates: " + event.clientX + "," + event.clientY);
    alert("Screen coordinates: " + event.screenX + "," + event.screenY);
});

