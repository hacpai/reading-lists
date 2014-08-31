/*
 * 浏览器对XML DOM的支持
 *     DOM2级核心
 *         创建空白XML文档
 *             var xmldom = document.implementation.createDocument(namespaceUrl, root, doctype);
 *             通常只使用参数root,root指定XML DOM文件的标签名
 *     DOMParser类型
 *         实际开发中,很少需要从头创建XML文档
 *         常见的情况是将某个XML文档解析成DOM结构，或者反之
 *             首先创建DOMParser实例
 *             调用parseFromString()：接受2个参数
 *                 要解析的XML字符串
 *                 内容类型：始终是"text/xml"
 *                 返回Document实例 
 *         只能解析格式良好的XML字符串
 *         解析错误时
 *             返回<parsererror>的文档
 *             Firefox,Opera返回<parsererror>文档
 *             Safari,Chrome<parsererror>是<root>第一个子元素
 */

//创建<root>XML文档
var xmldom = document.implementation.createDocument("", "root", null);

alert(xmldom.documentElement.tagName);    //"root"

var child = xmldom.createElement("child");
xmldom.documentElement.appendChild(child);

//检测浏览器是否支持DOM2级XML
var hasXmlDom = document.implementation.hasFeature("XML", "2.0");

var parser = new DOMParser();
var xmldom = parser.parserFormString("<root><child/></root>", "text/xml");

alert(xmldom.documentElement.tagName);    //"root"
alert(xmldom.documentElement.firstChild.tagName);    //"child"

var anotherChild = xmldom.createElement("child");
xmldom.documentElement.appendChild(anotherChild);

var children = xmldom.getElementsByTagName("child");
alert(children.length);    //2

//确认解析错误
var parser = new DOMParser();
//少了</root>导致解析错误
var xmldom = parser.parserFormString("<root>", "text/xml");

var error = xmldom.getElementsByTagName("parsererror");
if (error.length > 0) {
    alert("Parsing error!");
}

