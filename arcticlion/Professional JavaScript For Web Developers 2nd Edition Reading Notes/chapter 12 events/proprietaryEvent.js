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

EventUtil.addHandler(window, "load", fucntion(event) {
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

