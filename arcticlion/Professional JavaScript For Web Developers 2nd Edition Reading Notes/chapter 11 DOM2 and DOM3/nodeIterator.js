/*
 * 遍历
 * 使用document.createNodeIterator()方法创建实例
 * 接受4个参数: root, whatToShow,filter, entityReferenceExpansion
 * root: 起点
 * whatToShow: 访问哪些节点数字代码
 * filter：表示接受或拒绝某种特定节点的函数
 * entityReferenceExpansion：布尔值，是否扩展实体引用，一般不用
 * whateToShow是位掩码，形如NodeFilter.SHOW_ALL, NodeFilter.SHOW_ELEMENT常量形式
 * 可以使用按位或操作符组合，譬如var whatToShow = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
 * filter是一个只接收参数为节点的acceptNode()方法的对象
 * 也可以是一个与acceptNode()方法类似的函数
 * 不指定过滤器，传入null
 * acceptNode()方法对于应该访问的节点，返回NodeFilter.FILTER_ACCEPT;不应该访问的节点，返回NodeFilter.FILTER_SKIP
 * 下列代码展示创建一个只显示<p>元素的节点迭代器
 */
var filter = {
    acceptNode: function(node) {
        return node.tagName.toLowerCase() == "p" ? NodeFilter.FILTER_ACCEPT: NodeFilter.FILTER_SKIP;
    }
};
var iterator = document.createNodeIterator(root, NodeFilter.SHOW_ELEMENT, filter, false);
//第三个参数也可以是一个与acceptNode()方法类似的函数
var filter = function(node) {
    return node.tagName.toLowerCase() == "p" ? NodeFilter.FILTER_ACCEPT: NodeFilter.FILTER_SKIP;
}

//能够访问所有类型节点
var iterator = document.createNodeIterator(root, NodeFilter.SHOW_ALL, null, false);

/*
 * NodeIterator类型2个方法nextNode()和previousNode()
 * <div id="div1">
 *     <p><b>Hello</b> world!</p>
 *     <ul>
 *         <li>List item 1</li>
 *         <li>List item 2</li>
 *         <li>List item 3</li>
 *     </ul>
 * </div>
 * 遍历<div>元素中所有元素
 */
var div = document.getElementById("div1");
var iterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT, null, false);
var node = iterator.nextNode();
while (node != null) {
    alert(node.tagName);
    node = iterator.nextNode();
}

//返回遍历遇到的<li>只需修改filter
var filter = function(node) {
    rerturn (node.tagName.toLowerCase() == "li") ? NodeFilter.FILTER_ACCEPT: NodeFilter.FILTER_SKIP;
};
var iterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT, filter, false);
