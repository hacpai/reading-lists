/*
 * 鼠标事件
 * 取得鼠标事件客户端的坐标信息
 * clientX和clientY:事件发生时鼠标指针在视口中的水平和垂直坐标
 */
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event) {
    event = EventUtil.getEvent(event);
    alert("Client coordinates: " + event.clientX + "," + event.clientY);
});

