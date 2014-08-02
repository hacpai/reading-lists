/* 
 * 动态样式
 * <link>包含来自外部的文件
 * <link rel="stylesheet" type="text/css" href="style.css">
 * DOM代码如下
 * <link>需要添加到<head>下
 */
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "style/css";
link.href = "style.css";
link.head = document.getElementsByTagName("head")[0];
head.appendChild(link);


