/*
 * 浏览器对XSLT的支持
 *     IE中的XSLT
 *         简单的XSLT转换
 *             分别加到DOM文档中
 *             transformNode()返回转换信息的字符串
 *             复杂的XSLT转换
 *                 XSL模版
 *                 XSL处理器
 *                 第一步把XSLT样式表加载到线程安全的XML文档中
 *                     MSXML2.FreeThreadedDOMDocument
 *                 创建XSL处理器对象的模版
 *                     XSL处理器对象事用来转换XML文档
 *                 更多控制
 *                     接受传入参数
 *                         addParameter():2个参数
 *                             要设置的参数名称(与<xsl:param>的name特性一样
 *                             要指定的值(多数情况是字符串，也可以是数值或布尔值）
 *                      设置操作模式
 *                          mode特性为模版定义模式
 *                          setStartMode()只接受一个参数
 *                              即要为处理器设置的模式
 *                          reset():同一样式表进行多次转换，可在每次转换后充值处理器
 *     XSLTProcessor类型
 *         Firefox创建用于XSLT转换XML文档
 *         第一步加载两个DOM文档
 *             一个基于XML
 *             一个基于XSLT
 *         然后创建XSLTProcessor对象
 *         importStylesheet()指定一个XSLT
 *         最后执行转换
 *             两种方式
 *                 transformToDocument(): 返回完整DOM文档
 *                 transformToFragment():返回一个文档片段对象
 *                     2个参数
 *                         替换的XML DOM
 *                         插入的文档
 */

//加载XML和XSLT（IE）
xmldom.load("employees.xml");
xsltdom.load("employees.xslt");

//转换
var result = xmldom.transformNode(xsltdom);

function createThreadSafeDocument() {
    if (typeof arguments.callee.activeXString != "string") {
        var versions = ["MSXML2.FreeThreadedDOMDocument.6.0",
            "MSXML2.FreeThreadedDOMDocument.3.0",
            "MSXML2.FreeThreadedDOMDocument"];

        for (var i = 0, len = versions.length; i < len; i++) {
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

var xsltdom = createThreadSafeDocument();
xsltdom.async = false;
xsltdom.load("employees.xslt");

function createXSLTemplate() {
    if (typeof arguments.callee.activeXString != "string") {
        var versions = ["MSXML2.XSLTemplate.6.0",
                        "MSXML2.XSLTemplate.3.0",
                        "MSXML2.XSLTemplate"];

        for (var i = 0, len = versions.length; i < len; i++) {
            try {
                var template = new ActiveXObject(versions[i]);
                arguments.callee.activeXString = versions[i];
                return template;
            } catch (ex) {
                //跳过
            }
        }
    }

    return new ActiveXObject(arguments.callee.activeXString);
}

var template = createXSLTemplate();
template.stylesheet = xsltdom;

var processor = template.cteateProcessor();
//节点保存在input才能转换
processor.input = xmldom;
//转换并保存在output属性中
processor.transform();

var result = processor.output;

//事例样式表
    //定义了名为mseeage的参数
    //然后将参数输出到转换结果中
<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>
    <xsl:param name="message"/>

    <xsl:template match="/">
        <html>
             <head>
                 <title>Employee</title>
             </head>
             <body>
                <ul>
                     <xsl:apply-templates select="*"/>
                </ul>
                <p>Message: <xsl: value-of select="$message"/></p>
             </body>
        </html>
    </xsl:template>

    <xsl:template mathch="employee">
         <li><xsl:value-of select="@title"/></em></li>
    </xsl:template>

</xsl:stylesheet>

processor.input = xmldom.documentElement;
processor.addParameter("message", "Hello World!");
processor.transform();

//这个样式表定义一个模版
//将mode特性设置为“title-first"(即“先显示职位”）
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:param name="message"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Employees</title>
            </head>
            <body>
                <ul>
                    <xsl:apply-templates select="*"/>
                </ul>
                <p>Message: <xsl:value-of select="$message"/></p>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="employee">
        <li><xsl:value-of select="name"/>
            <em><xsl:value-of select="@title"/><em></li>
    </xsl:template>

<xsl:template match="employee" mode="title-first"?
        <li><em><xsl:value-of select="@title"/></em>
            <xsl:value-of select-"name"/></li>
    </xsl:template>

</xsl:stylesheet>

processor.input = xmldom;
processor.addParameter("message", "Hello World!");
processor.setStartMode("title-first");
processor.transform();

//由于处理器已经编译了XSLT样式表，与使用teansformNode()相比，进行重复转换速度更快一些
processor.reset();    //准备下一次转换

var processor = new XSLTProcessor();
processor.importStylesheet(xsltdom);

var result = processor.transformToDocument(xmldom);
alert(serializeXml(result);

var fragment = processor.transformToDocument(xmldom, document);
var div = document.getElementById("divResult");
div.appendChild(fragment);

//取得文本
var text = fragment.firstChild.nodeValue;
alert(text);

