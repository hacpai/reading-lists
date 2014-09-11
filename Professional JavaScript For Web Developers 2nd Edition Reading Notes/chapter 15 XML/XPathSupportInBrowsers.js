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
 *                 默认类型结果
 *                     ANY_TYPE
 *                         自动确定返回结果的类型
 *             保存结果的XPathResult对象(通常为null)
 *         createNSResolver(node):接受一个参数
 *             包含命名空间定义的节点
 *     IE中的XPath
 *         selectSingleNode()
 *             接受一个XPath模式
 *             返回第一个匹配节点
 *         selectNodes()
 *             接受一个XPath模式作为参数
 *             返回与模式匹配的所有节点
 *         IE对命名空间的支持
 *             按照下列格式创建字符串
 *                 "xmlns:prefix1='uri1' xmlns:prefix2='uri2' xmlns:prefix3='uri3'"
 *                 setProperty():接受2个参数
 *                      属性名: SelectionNamespaces
 *                      属性值: 前面格式的字符串
 *     跨浏览器使用XPath
 *         重创selectSingleNode():三个参数j
 *             上下文节点
 *             XPath表达式
 *             可选的命名空间对象
 *                 {
 *                     prefix1: "uri1",
 *                     prefix2: "uri2",
 *                     prefix3: "uri3"
 *                 }
 *         重创selectNodes():3个参数
 *             
 *
 * <?xml version="1.0" ?>
 * <wrox:books xmlns:wrox="http://www.wrox.com/">
 *     <wrox:book>
 *         <wrox:title>Professional JavaScript for Web Developers</wrox:title>
 *     </wrox:book>
 *     <wrox:book>
 *         <wrox:title>Professional Ajax</wrox:title>
 *         <wrox:author>Nicholas C. Zakas</wrox:author>
 *         <wrox:author>Jeremy McPeak</wrox:author>
 *         <wrox:author>Joe Fawcett</wrox:author>
 *     </wrox:book>
 * </wrox:books>
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

var result = xmldom.evaluate("employee/name", xmldom.documentElement, null, XPathResult.ANY_TYPE, null);

if (result != null) {
    switch(result.resultType {
        case XPathResult.STRING_TYPE:
            //处理字符串类型
            break;

        case XPathResult.NUMBER_TYPE:
            //处理数值类型
            break;

        case XPathResult.BOOLEAN_TYPE:
            //处理布尔值类型
            break;

        case XPathResult.UNORDERED_NODE_ITERATOR_TYPE:
            //处理次序不一致的节点迭代器类型
            break;

        default:
            //处理其他可能的结果类型
    }
}
        
//处理命名空间的XML
var nsresolver = xmldom.createNSResolver(xmldom.documentElement);

//第二种定义nsresolver
//用于不确定哪个节点包含命名空间定义的情况
var nsresolver = function(prefix) {
    switch (prefix) {
        case "wrox": return "http://www.wrox.com/";
        //其他前缀
    }
};

var result = xmldom.evaluate("wrox:book/wrox:auther", xmldom.documentElement, nsresolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

alert(result.snapshotLength);

//IE中的XPath
var element = xmldom.documentElement.selectSingleNode("employee/name");

if (element !== null) {
    alert(element.xml);
}

var elements = xmldom.documentElement.selectNodes("employee/name");
alert(elements.length);

xmldom.setProperty("SelectionNamespaces", "xmlns:wrox='http://www.wrox.com/'");

var result = xmldom.documentElement.selectNodes("wrox:book/wrox:author");
alert(result.length);


function selectSingleNode(context, expression, namespaces) {
    var doc = (context.nodeType != 9 ? context.ownerDocument : context);

    if (typeof doc.evalute != "undefined") {
        var nsresolver = null;
        if (namespaces instanceof Object) {
            nsresolver = function(prefix) {
                return namespaces[prefix];
            };
        }

    var result = doc.evaluate(expression, context, nsresolver, XPathResult.FIRST_CROERED_NODE_TYPE, null);
    return (result !== null ? result.singleNodeValue : null);
    } else if (typeof context.selectSingleNode != "undefined") {
        
        //创建命名空间字符串
        if (namespaces instandof Object) {
            var ns = "";
            for (var prefix in namespaces) {
                if (namespaces.hasOwnProperty(prefix) ) {
                    ns += "xmlns:" + prefix + " ='" + namespaces[prefix] +
                        "' ";
                }
                doc.setProperty("SelectionNamespace", ns);
            }
            return context.selectSingleNode(expression);
        } else {
            throw new Error("No XPath engine found.");
        }
    }

var result = selectSingleNode(xmldom.documentElement, "wrox:book/wrox:author", { wrox: "http://www.wrox.com/" });
alert(serializeXml(result));


function selectNodes(context, expression, namespaces) {
    var doc = (context.nodeType != 9 ? context.ownerDocument : context);

    if (typeof doc.evaluate != "undefined") {
        var nsresolver = null;
        if (namespaces instanceof Object) {
            nsresolver = function(prefix) {
                return namespaces[prefix];
            };
        }

        var result = doc.evaluate(expression, context, nsresolver, 
                                  CPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                                  null);
        var nodes = new Array();

        if (result !== null) {
            for (var i = 0, len = result.snapshotLength; i < len; i++) {
                nodes.push(result.snapshotItem(i));
            }
        }

        return nodes;
    } else if (typeof context.selectNodes != "undefined") {

        //创建命名空间
        if (namespaces instanceof Object) {
            if (namespaces.hasOwnProperty(prefix)) {
                ns += "xmlns:" + prefix + "='" + namespaces[prefix] + "' ";
            }
            doc.setProperty("SelectionNamespaces", ns);
        }
        var result = context.selectNodes(expression);
        var nodes = new Array();

        for (var i = 0, len = result.length; i < len; i++) {
            nodes.push(result[i]);
        }

        return nodes;
    } else {
        throw new Error("No XPath engine found.");
    }
}

var result = selectNodes(xmldom.documentElement, "wrox:book/wrox:author", { wrox: "http://www.wrox.com/" });
alert(result.length);

