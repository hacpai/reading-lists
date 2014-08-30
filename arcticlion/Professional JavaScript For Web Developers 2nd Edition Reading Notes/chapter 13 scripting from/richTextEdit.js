/*
 * 富文本编辑
 *     嵌入包含空HTML的iframe,设置designMode使页面可编辑
 */

//简单HTML页面作为内容来源
<html>
    <head>
        <title>Blank Page for Rich Text Editing</title>
    </head>
    <body>
    </body>
</html>

<iframe name = "richedit" style = "height:100px; width:100px;" src = "black.htm"></iframe>

<script type = "text/javascritpt">

//使用onload事件处理程序设置designMode为on
EventUtil.addHandler(window, "load", function() {
    frames["richedit"].document.designMode = "on";
});

