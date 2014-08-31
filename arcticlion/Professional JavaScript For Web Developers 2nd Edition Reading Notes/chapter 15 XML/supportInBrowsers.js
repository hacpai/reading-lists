/*
 * 浏览器对XML DOM的支持
 *     DOM2级核心
 *         创建空白XML文档
 *             var xmldom = document.implementation.createDocument(namespaceUrl, root, doctype);
 *             通常只使用参数root,root指定XML DOM文件的标签名
 */

//创建<root>XML文档
var xmldom = document.implementation.createDocument("", "root", null);

alert(xmldom.documentElement.tagName);    //"root"

var child = xmldom.createElement("child");
xmldom.documentElement.appendChild(child);

//检测浏览器是否支持DOM2级XML
var hasXmlDom = document.implementation.hasFeature("XML", "2.0");

