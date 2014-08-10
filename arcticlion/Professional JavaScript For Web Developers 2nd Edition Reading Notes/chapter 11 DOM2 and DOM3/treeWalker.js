/*
 * TreeWalker
 * 比NodeIterator更多方向遍历DOM
 * document.createTreeWalker()接受4个参数创建(同document.createNodeIterator())
 * 刚创建的TreeWalker指向根节点，第一次调用nextNode()指向第一个参数的位置
 */
var div = document.getElementById("div1");
var filter = function(node) {
    return (node.tagName.toLowerCase() == "li") ? NodeFilter.FILTER_ACCEPT: NodeFilter.FILTER_SKIP;
};

var iterator = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, filter, false);

var node = iterator.nextNode();
while (node != null) {
    alert(node.tagName);
    node = iterator.nextNode();
}

