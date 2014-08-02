/* 
 * 使用NodeList
 * 每当文档结构发生变化时，都会更新
 * 第一行代码取得文档所有<div>元素的HTMLCollection
 * 迭代NodeList应使用length属性初始化第二个变量
 * 避免无限循环和减少访问NodeList的次数
 */
var divs = document.getElementsByTagName("div");

for (var i = 0, len = divs.length; i < len; i++) {
    var div = document.createElement("div");
    document.body.appendChild(div);
}

