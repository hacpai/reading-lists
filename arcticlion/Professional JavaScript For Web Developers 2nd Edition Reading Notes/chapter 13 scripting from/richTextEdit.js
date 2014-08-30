/*
 * 富文本编辑
 *     嵌入包含空HTML的iframe,设置designMode使页面可编辑
 *     操作富文本
 *         document.execCommand():3个参数,命令名称,是否为命令提供用户界面,执行命令需要的一个值
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

//使用这些命令修改富文本区域外观
//转换粗体文本
frames["richedit"].document.execCommand("bold", false, null);
//转换斜体文本
frames["richedit"].document.execCommand("italic", false, null);
//创建指向www.wrox.com链接
frames["richedit"].document.execCommand("createlink", false, "http://www.wrox.com");
//格式化为1级标题
frames["richedit"].document.execCommand("formatblock", false, "<h1>");

