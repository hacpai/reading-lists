/*
 * 浏览器对XPath的支持
 *     Xpath设计用来在DOM文档中查找节点
 *     DOM3级XPath
 *         evaluate():接受5个参数
 *             XPath表达式
 *             上下文节点
 *             命名空间求解器
 *             返回结果的类型
 *             保存结果的XPathResult对象(通常为null)
 *
 */

var supportsXPath = document.implementation.hasFeature("XPath", "3.0");

var result = xmldom.evaluate("employee/name", xmldom.documentElement, null, XPathResult.ORDERED_NODE_ITERATOR_TYPEk, null);

if (result != null) {
    //节点是一个节点迭代器,iterateNext取得匹配节点
    var node = result.iterateNext();
    while(node) {
        alert(node.tagName);
        node = node.iterateNext();
    }
}

