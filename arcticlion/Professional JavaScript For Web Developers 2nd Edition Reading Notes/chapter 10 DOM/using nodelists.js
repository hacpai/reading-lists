/* 
 * 使用NodeList
 * 每当文档结构发生变化时，都会更新
 * 第一行代码取得文档所有<div>元素的HTMLCollection
 */
var divs = document.getElementsByTagName("div");

for (var i = 0; i < divs.length; i++) {
    var div = document.createElement("div");
    document.body.appendChild(div);
}

