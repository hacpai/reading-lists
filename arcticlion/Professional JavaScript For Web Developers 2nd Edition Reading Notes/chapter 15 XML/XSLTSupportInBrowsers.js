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

