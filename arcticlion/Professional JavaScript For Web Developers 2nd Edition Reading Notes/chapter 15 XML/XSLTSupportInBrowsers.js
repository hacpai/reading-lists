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
 * 
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

