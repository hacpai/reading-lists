/*
 * 专有事件
 *     上下文菜单事件
 *         事件是冒泡，可用document指定事件处理程序
 *         target＝用户操作的元素
 *         为<div>添加oncontextmenu事件处理程序
 *         取消默认行为，保证不显示浏览器默认菜单
 *         再根据event.clientX和clientY确定放置<ul>位置
 *         最后visibility="visible"显示自定义菜单
 *         另外为document添加一个onclick事件处理程序，用于用户单机隐藏菜单
 *     卸载前事件
 *         在页面卸载前触发，通过它取消卸载和继续使用原有页面
 *         控制权在用户
 *         event.returnValue：对话框显示的字符
 *     鼠标滚轮事件
 *             mousewheel事件
 *                 鼠标滚动时触发mousewheel事件
 *                 event.wheelDelta＝120的倍数,正负号确定方向
 *             DOMMouseScroll事件
 *                 类似mousewheel事件
 *                 detail=-3倍数
 *         
 * <html>
 * <head>
 *     <title>ContextMenu Event Example</title>
 * </head>
 * <body>
 *     <div id="myDiv">Right click or Ctrl+click me to get a custiom context menu.Click anywhere else to get the default context menu.</div>
 *     <ul id="myMenu" style="position:absolute;visibility:hidden;background-color:silver">
 *         <li><a href="http://www.google.com">Google</a></li>
 *         <li><a href="http://www.baidu.com">Baidu</a></li>
 *         <li><a href="http://yahoo.com">Yahoo!</a></li>
 *     </ul>
 * </body>
 * </html>
 */

EventUtil.addHandler(window, "load", function(event) {
    var div = document.getElementById("myDiv");

    EventUtil.addHandler(div, "contextmenu", function(event) {
        event = EventUtil.getEvent(event);
        EventUtil.preventDefault(event);

        var menu = document.getElementById("myMenu");
        menu.style.left = event.clientX + "px";
        menu.style.top = event.clientY + "px";
        menu.style.visibility = "visible";
    });

    EventUtil.addHandler(document, "click", function(event) {
        document.getElementById("myMenu").style.visibility = "hidden";
    });
});

EventUtil.addHandler(window, "beforeunload", function(event) {
    event = EventUtil.getEvent(event);
    event.returnValue = "I'm really going to miss you if you go.";
});

EventUtil.addHandler(document, "mousewheel", function(event) {
    event = EventUtil.getEvent(event);
    var delta = (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta " event.wheelDelta);
    alert(delta);
});

EventUtil.addHandler(window, "DOMMouseScroll", function(event) {
    event = EventUtil.getEvent(event);
    alert(event.detail);
});
