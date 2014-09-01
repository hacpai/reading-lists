/*
 * 浏览器对XPath的支持
 *     Xpath设计用来在DOM文档中查找节点
 *     DOM3级XPath
 *         evaluate():接受5个参数
 *             XPath表达式
 *             上下文节点
 *             命名空间求解器
 *             返回结果的类型
 *                 ORDERED_NODE_ITERATOR_TYPE:返回匹配的节点集合，节点持续于文档中的次序一致，最常见的结果类型。
 *                 ORDERED_NODE_SPAPSHOT_TYPE:返回节点集合快照
 *             保存结果的XPathResult对象(通常为null)
 *
 */

var supportsXPath = document.implementation.hasFeature("XPath", "3.0");

var result = xmldom.evaluate("employee/name", xmldom.documentElement, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

if (result != null) {
    //节点是一个节点迭代器,iterateNext取得匹配节点
    var node = result.iterateNext();
    while(node) {
        alert(node.tagName);
        node = node.iterateNext();
    }
}

//快照结果类型必须使用snapshotItem()和snapshotLength
var result = xmldom.evaluate("employee/name", xmldom.documentElement, null, XPathResult.ORDEEED_NODE_SNAPSHOT_TYPE, null);

if (result !== null) {
    for (var i = 0, len = result.snapshotLength; i < len; i++) {
        alert(result.snapshotItem(i).tagName);
    }
}

