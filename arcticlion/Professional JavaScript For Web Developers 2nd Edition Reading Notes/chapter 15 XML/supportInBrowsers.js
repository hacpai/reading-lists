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
 *     XMLSerializer类型
 *         DOM文档序列化未XML字符串
 *     DOM3级加载和保存
 *         解析XML
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

var serializer = new XMLSerializer();
var xml = serializer.serializerToString(xmldom);
alert(xml);

//检测浏览器支持同步解析还是异步解析
var hasLSSync = document.implementation.hasFeature("LS", "3.0");
var hasLSAsync = document.implementation.hasFeature("LS-Async", "3.0");

//createLSParser(mode, schemaType)
    //不基于哪个模式进行验证,故schematype = null
    //基于XML模式验证,则schematype = "http://www.w3.org/2001/XMLSchema"
    //基于XML DTD验证：schematype="http://www.w3.ory/TR/REC-xml"
var implementation = document.implementation;
var parser = implementation.createLSParser(implementation.MODE_SYNCHRONOUS, null);

//createLSInput()创建LSInput对象,XML字符串赋值给该对象的stringdate属性
var input = implementation.createLSInput();
input.stringDate = "<root><child/></root>";

//错误处理
input.stringDate = "<root>";
try {
    //解析完成都就会返回XML DOM文档对象
    xmldom = parser.parse(input);
} catch (ex) {
    alert("Parsing error!");
}

//异步解析
    //addEventListener()预定load事件，以便知道何时解析完毕
        //event.newDDocument: 包含解析得到的DOM文档
        //event.input: 包含传到parse()中的LSInput对象
var input = implementation.createLSParser(implementation.MODE_ASYNCHRONOUS, null);
//预定load事件
parser.addHandler("load", function(event) {
    var xmldom = event.newDDocument;
    var input = event.input;

    alert(xmldom.documentElement.tagName);    //"root"
    alert(xmldom.documentElement.firstChild.tagName);    //"child"
    var anotherChild = xmldom.createElement("child");
    xmldom.documentElement.appendChild(anotherChild);

    var children = xmldom.getElementsByTagName("child");
    alert(children.length);    //2
}, false);

//捕获异步解析的错误用LSParser对象上domConfig定义的错误处理程序
parser.domConfig.setParameter("error-handler", function(ex) {
    alert("Parsing error!");
});

//开始解析
parser.parse(input);


