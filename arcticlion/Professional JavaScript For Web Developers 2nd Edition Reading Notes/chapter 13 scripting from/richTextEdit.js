/*
 * 富文本编辑
 *     嵌入包含空HTML的iframe,设置designMode使页面可编辑
 *     操作富文本
 *         document.execCommand():3个参数,命令名称,是否为命令提供用户界面,执行命令需要的一个值
 *         queryCommandEnabled():1个参数,要检测的命令
 *         queryCommandState():1个参数
 *         queryCommandValue():取得执行命令时传入的值
 *     富文本选区
 *         iframe的getSelection()确定实际选择的文本
 *         toString:返回选区所包含的文本内容
 *         getRangeAt(index):返回索引对应的选区的DOM范围
 *         
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

//检测编辑去是否允许传入加粗命令
var result = frames["richedit"].document.queryCommandEnabled("bold");
//检测当前文本是否已经转换成粗体
var isBold = frames["richedit"].document.queryCommandState("bold");
//检测当前文本应用"fontsize"传入的值
var fontSize = frames["richedit"].document.queryCommandValue("fontsize");

var selsection = frames["richedit"].getSelection();

//取得选择的文本
var selectedText = selsection.toString();
//取得代表选取的范围
var range = selsection.getRangeAt(0);
//突出显示选择的文本
    //为文本添加黄色的背景
    //surroundContents()将选区添加到带有黄色背景的<span>元素中
var span = frames["richedit"].document.createElement("span");
span.style.backgroundColor = "yellow";
range.surroundContents(span);

