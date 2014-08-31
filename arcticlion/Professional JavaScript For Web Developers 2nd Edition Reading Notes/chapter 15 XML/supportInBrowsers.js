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
 *         其他解析方式
 *             LSParser还执行两种类型的解析:来自URI的文件和基于上下文解析
 *         序列化XML
 *             创建LSSerializer对象
 *             LSSerializer.writeToString():接受节点类型的参数返回该节点的XML代码
 *     IE对XML的支持
 *         ActiveX对象实现
 *             ActiveXObject类型创建ActiveX对象的实例
 *         序列化XML
 *             xml属性简单的序列化
 *         加载XML文档
 *             指定加载方式
 *                 async=true表示异步，false表示同步
 *                 确定方式后调用load()下载
 *                 异步加载需要为XML onreadystatechange指定处理程序
 *                     有4个就绪状态,实际开发关注状态4
 *                     onreadystatechange不需要放在load()语句前
 *         跨浏览器处理XML
 *             解析XML
 *             序列化XML
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

//上下文解析
//parseWithContext(): 3个参数
    //LSInput对象
    //上下文节点
        //指的是解析完的片段应该插入的地方
    //要执行的操作
        //必须是LSParser常量之一
var newInput = implementation.createLSInput();
newDDocument.stringDate = "<child/>";

parser.parseWithContext(newInput, xmldom.documentElement, parser.ACTION_APPEND_AS_CHILDREN);

alert(xmldom.documentElement.firstChild.tagName);    //"child"
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

//URI文件解析
parser.parseURI("example.xml");

//序列化XML
var serializer = document.implementation.createLSSerializer();

//domConfig设置适合打印输出的XML字符串格式
serializer.domConfig.setParameter("format-pretty-print", true);

var xml = "";

try {
    var xml = serializer.writeToString(xmldom);
} catch (ex) {
    //一般出错是因为传入到writeToString()方法中的参数不是DOM节点
    alert("Serialization error occurred.");
}

alert(xml);

//IE对XML的支持
function createDocument() {
    if (typeof arguments.callee.activeXString != "string") {
        //三个稳定的版本
        var versions = ["MSXML2.DOMDocument.6.0", "MSXML2.DOMDocument.3.0", "MSXML2.DOMDocument"];

        for (var i = 0. len = versions.length; i < len; i++) {
            try {
                var xmldom = new ActiveXObject(versions[i]);
                arguments.callee.activeXString = versions[i];
                return xmldom;
            } catch (ex) {
                //跳过
            }
        }
    }

    return new ActiveXObject(arguments.callee.activeXString);
}

//解析XML字符串
    //创建DOM文档
    //调用loadXML()传入XML字符串经解析之后填充到DOM文档中
var xmldom = createDocument();
xmldom.loadXML("<root><child/></root>");

alert(xmldom.documentElement.tagName);    //"root"
alert(xmldom.documentElement.firstChild.tagName);    //"child"

var anotherChild = xmldom.createElement("child");
xmldom.documentElement.appendChild(anotherChild);

var children = xmldom.getElementsByTagName("child");
alert(children.length);    /2

alert(xmldom.xml);

//加载XML文件
var xmldom = createDocument();
xmldom.async = false;

xmldom.load("example.xml");

//检测是否发生了解析错误
if (xmldom.parseError != 0) {
    alert("An error occurred:\nError Code: "
          + xmldom.parseError.errorCode + "\n"
          + "Line: " + xmldom.parseError.line + "\n"
          + "Line Pos: " + xmldom.parseError.linepos + "\n"
          + "Reason: " + xmldom.parseError.reason);
} else {

    alert(xmldom.documentElement.tagName);    //"root"
    alert(xmldom.documentElement.firstChild.tagName);    //"child"

    var anotherChild = xmldom.createElement("child");
    xmldom.documentElement.appendChild(anotherChild);

    var children = xmldom.getElementsByTagName("child");

    alert(xmldom.xml);
}

//序列化XML
alert(xmldom.xml);

//以异步方式加载XML文件模式
var xmldom = createDocument();
xmldom.async = true;

xmldom.onreadystatechange = function() {
    if (xmldom.readyState == 4) {
        if (xmldom.parseError != 0) {
            alert("An error occurred:\nError Code: "
          + xmldom.parseError.errorCode + "\n"
          + "Line: " + xmldom.parseError.line + "\n"
          + "Line Pos: " + xmldom.parseError.linepos + "\n"
          + "Reason: " + xmldom.parseError.reason);
        } else {

            alert(xmldom.documentElement.tagName);    //"root"
            alert(xmldom.documentElement.firstChild.tagName);    //"child"

            var anotherChild = xmldom.createElement("child");
            xmldom.documentElement.appendChild(anotherChild);

            var children = xmldom.getElementsByTagName("child");
            alert(children.length);    //2

            alert(xmldom.xml);
        }
    }
};

xmldom.load("example.xml");

//跨浏览器解析XML
function parseXml(xml) {
    var xmldom = null;

    if (typeof DOMParser != "underfined") {
        xmldom = (new DOMParser()).parseFromString(xml, "text/xml");
        var errors = xmldom.getElementsByTagName("parsererror");
        if (errors.length) {
            throw new Error("XML parsing error:" + errors[0].textContent);
        }

    } else if (document.implementation.hasFeature("LS", "3.0")) {
        var implementation = document.implementation;
        var parser = implementation.createLSPasrser(implementation.MODE_SYNCHRONOUS, null);
        var input = implementation.createLSInput();
        input.stringDate = xml;
        xmldom = parser.parse(input);
    } else if (typeof ActiveXObject != "undefined") {
        xmldom = createDocument();
        xmldom.loadXML(xml);
        if (xmldom.parseError != 0) {
            throw new Error("XML parsing error: " + xmldom.parseError.reason);
        }
    } else {
        throw new Error("No XML parser available.");
    }

    return xmldom;
}

//跨浏览器的序列化XML
function serializeXml(xmldom) {

    if (typeof XMLSerializer != "undefined") {
        return (new XMLSerializer()).serializeToString(xmldom);
    } else if (document.implementation.hasFeature("LS", "3.0")) {
        var implementation = document.implementation;
        var serializer = implementation.createLSSerializer();
        return serializer.writeToString(xmldom);
    } else if (typeof xmldom.xml != "undefined") {
        return xmldom.xml;
    } else {
        throw new Error("Could not serialize XML DOM.");
    }
}
 
