/*
 * TreeWalker
 * 比NodeIterator更多方向遍历DOM
 * parentNode(): 遍历到当前节点的父节点
 * firstChild(): 遍历到当前节点的第一个子节点
 * lastChild(): 遍历到当前节点的最后一个子节点
 * nextSilbling(): 遍历到当前节点的下一个同辈节点
 * previousSibling(): 遍历到当前节点的上一个同辈节点
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

//直接移动不用filter取得<li>元素
var walker = document.createTreeWalker(div, NodeFilter_SHOW_ELEMENT, null, false);

walker.firstChild();    //转到<p>
walker.nextSibling();   //转到<ul>

node = walker.firstChild();    //转到第一个<li>,此处只返回元素，由传入到createTreeWalker()第二个参数决定
while (node != null) {
    alert(node.tagName);
    node = walker.nextSibling();
}

