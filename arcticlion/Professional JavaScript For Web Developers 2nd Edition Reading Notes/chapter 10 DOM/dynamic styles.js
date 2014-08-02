/* 
 * 动态样式
 * <link>包含来自外部的文件
 * <link rel="stylesheet" type="text/css" href="style.css">
 * DOM代码如下
 * <link>需要添加到<head>下
 * 以loadStyles()封装
 */
function loadStyles(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "style/css";
    link.href = link;
    link.head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
}

loadStyles("styles.css");

/*
 * <style>元素包含嵌入式CSS
 * <style type="text/css">
 * body {
 *     backgroud-color: red;
 * }
 * </style>
 * DOM代码
 * 兼容IE
 * 以loadStyleString()封装
 */
function loadStylesString(css) {
    var style = document.createElement("style");
    style.type = "text/css";
    try {
        style.appendChild(document.createElement(css));
    } catch (ex) {
        style.styleSheet.cssText = css;
    }
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
}

loadStylesString("body{backgroud-color:red}");
