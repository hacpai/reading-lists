/*
 * 变动事件
 *     节点移除
 *         先触发DOMNodeRemoved事件
 *         event.target=被移除的节点,event.relatedNode=被移除节点的父节点
 *         被移除节点的子节点触发DOMNodeRemovedFromDocument事件
 *         被移除节点的父节点触发DOMSubtreeModified事件
 *
 * 事例HTML页面
 * <html>
 * <head>
 *     <title>Node Removal Events Example<title>
 * </head>
 * <body>
 *     <ul id="myList">
 *         <li>Item 1</li>
 *         <li>Item 2</li>
 *         <li>Item 3</li>
 *     </ul>
 * </body>
 * </html>
 */

//检测节点移除事件的事件发生顺序
EventUtil.addHandler(window, "load", function(event) {
    var list = document.getElementById("myList");

    EventUtil.addHandler(document, "DOMSubtreeModified", function(event) {
        alert(event.type);
        alert(event.target);
    });
    EventUtil.addHandler(document, "DOMNodeRemoved", function(event) {
        alert(event.type);
        alert(event.target);
        alert(event.relateNode);
    });
    EventUtil.addHandler(list.firstChild, "DOMNodeRemovedFromDocument", function(event) {
        alert(event.type);
        alert(event.target);
    });

    list.parenNode.removeChild(list);
});


