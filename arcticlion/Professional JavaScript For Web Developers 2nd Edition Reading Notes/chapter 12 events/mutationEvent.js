/*
 * 变动事件
 *     节点移除
 *         先触发DOMNodeRemoved事件
 *         event.target=被移除的节点,event.relatedNode=被移除节点的父节点
 *         被移除节点的子节点触发DOMNodeRemovedFromDocument事件
 *         被移除节点的父节点触发DOMSubtreeModified事件
 *     节点插入
 *         首先触发DOMNodeInserted事件
 *         event.target=被插入的节点,event.relatedNode=被插入的节点的父节点
 *         DOMNodeInsertedIntoDocument:新插入的节点触发
 *         DOMSubtreeModified:新插入节点的父节点触发
 *     特性变化
 *         触发DOMAttrModified事件
 *         relatedNode=修改特性的Attr节点，target=包含被修改特性的元素
 *         再触发DOMSubtreeModified事件
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

//验证节点插入事件的触发顺序
EventUtil.addHandler(window, "load", function(event) {
    var list = document.getElementById("myList");
    var item = document.createElement("li");
    item.appendChild(document.createTextNode("Item 4"));

    EventUtil.addHandler(document, "DOMSubtreeModefied", function(event) {
        alert(event.type);
        alert(event.target);
    });
    EventUtil.addHandler(document, "DOMNodeInsertrd", function(event) {
        alert(event.type);
        alert(event.target);
        alert(event.relatedNode);
    });
    EventUtil.addHandler(item, "DOMNodeInsertedIntoDocument", function(event) {
        alert(event.type);
        alert(event.target);
    });

    list.appendChild(item);
});

//检验特性变化有关事件流
EventUtil.addHandler(window, "load", function(event) {
    var list = document.getElementById("myList");

    EventUtil.addHandler(document, "DOMSubtreeModified", function(event) {
        alert(event.type);
        alert(event.target);
    });
    EventUtil.addHandler(document, "DOMAttrModified", function(event) {
        alert(event.type);
        alert(event.target);
        alert(event.relatedNode);
        alert(event.attrName);
        alert(event.prevValue);
        alert(event.newValue);
    });

    list.setAttribute("customname", "value");
});

