/*
 * 操作样式表
 * document.styleSheets表示应用于文档的所有样式表
 * document.styleSheets.length获知样式表的数量
 * document.styleSheets.href输出每一个样式表的href属性
 */
var sheet = null;
for (var i = 0, len = document.stylesheets.length; i < len; i++) {
    sheet.document.stylesheets[i];
    alert(sheet.href);
}

/*
 * sheet属性
 * 不同浏览器取得样式表对象
 * 取得第一个<link/>元素引入的样式表
 */
function getStyleSheet(element) {
    return element.sheet || element.stylesheets;
}

var link = document.getElementsByTagName("link")[0];
var sheet = getStyleSheet(link);

/*
 * 取得与规则相关的样式信息
 * CSSRule对象表示样式表中的每一条规则
 * slectorText:返回当前规则的选择符文本
 * style:可以通过它设置和取得规则中的特定样式值
 * style.cssText:只包含样式信息
 * div.box {
 *     background-color: blue;
 *     width: 100px;
 *     height: 200px;
 * }
 */
var sheet = document.stylesheets[0];
var rules = sheet.cssRules || sheet.rules;    //取得规则列表
var rule = rules[0];                          //取得第一条规则
alert(rule.selectorText);                     //"div.box"
alert(rule.style.cssText);                    //完整的CSS代码
alert(rule.style.backgroundColor);            //"blue"
alert(rule.style.width);                      //"100px"
alert(rule.style.height);                     //"200px"

rule.style.backgroundColor = "red";           //修改样式信息
