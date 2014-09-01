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
 *                 单节点结果
 *                     FIRST_ORDERED_NODE_TYPE:返回第一个匹配节点
 *                     singleNodeValue访问该节点
 *                 简单类型结果
 *                     booleanValue
 *                     numberValue
 *                         XPath表达式需要加上能够返回数值的XPath函数
 *                     stringValue
 *                         返回匹配的第一个子节点的值
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

var result = xmldom.evaluate("employee/name", xmldom.documentElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

if (result != null) {
    alert(result.singleNodeValue.tagName);
}

var result = xmldom.evaluate("employee/name", xmldom.documentElement, null, XPathResult.NUMBER_TYPE, null);
alert(result.booleanValue);    //有节点匹配"employee/name", true

var result = xmldom.evaluate("count(employee/name", xmldom.documentElement, null, XPathResult.NUMBER_TYPE, null);
alert(result.numberValue);    //输出匹配节点数量

var result = xmldom.evaluate("employee/name", xmldom.documentElement, null, XPath.STRING_TYPE, null);
alert(result.stringValue);    //输出与"element/name"匹配的第一个元素的第一个子节点包含的字符串


