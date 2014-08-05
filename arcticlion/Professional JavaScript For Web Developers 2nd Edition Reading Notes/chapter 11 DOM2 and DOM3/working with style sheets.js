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

