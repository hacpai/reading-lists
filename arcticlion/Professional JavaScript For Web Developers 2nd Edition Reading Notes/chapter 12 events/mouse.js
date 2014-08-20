/*
 * 鼠标事件
 * 取得鼠标事件客户端的坐标信息
 * clientX和clientY:事件发生时鼠标指针在视口中的水平和垂直坐标
 * 屏幕坐标位置
 * screenX和screenY确定事件发生时鼠标指针相对于整个屏幕的坐标信息
 * DOM规定4个属性(shiftKey, ctrlKey, altKey, metaKey)修改键的状态
 * 4个属性返回布尔值：用户按下该键则值为true
 * 相关元素
 * <html>
 * <head>
 *     <title>Related Element Example</title>
 * </head>
 * <body>
 *     <div id="myDiv" style="background-color:red;height:100px;width:100px">Move the mouse from here to the white</div>
 * </body>
 * </html>
 * 指针从<div>移出时，触发mouseout事件，相关元素为<body>.
 * 与此同时，<body>触发mouseover事件，相关元素为<div>
 * detail:记录给定位置发生多少次单击
 * 易访问性问题
 *     使用click事件执行代码。即使onmousedown执行代码让人觉得速度更快
 *     不用用onmouseover显示新选项，因为屏幕阅读器无法触发这个事件
 *     不使用dbclick执行重复操作，因为键盘无法触发这个事件
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

