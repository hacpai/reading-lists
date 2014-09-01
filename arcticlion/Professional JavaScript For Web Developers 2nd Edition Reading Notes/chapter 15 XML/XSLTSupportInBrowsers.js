/*
 * 浏览器对XSLT的支持
 *     IE中的XSLT
 *         简单的XSLT转换
 *             分别加到DOM文档中
 *             transformNode()返回转换信息的字符串
 */

//加载XML和XSLT（IE）
xmldom.load("employees.xml");
xsltdom.load("employees.xslt");

//转换
var result = xmldom.transformNode(xsltdom);

