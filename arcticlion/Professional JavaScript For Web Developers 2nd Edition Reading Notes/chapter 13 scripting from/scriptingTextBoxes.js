/*
 * 文本框脚本
 *     两种方式表示
 *         <input>:单行文本
 *             <input type="text" size="25" maxlength="50" value="initial value">
 *         <textarea>:多行文本
 *             <textarea rows="25" cols="5">initial value</textarea>
 *         两种方式都会将用户输入保存在value中,可以设置读取何设置文本框的值
 *     选择文本
 *         select():不接受参数,调用时将焦点设置到文本框
 *             选择事件:
 *                 选择文本框文本时触发select事件,知道用户选择了文本
 *                 何时触发因浏览器而异
 *             取得选择的文本
 *                 selectionStart&selectionEnd:用户选择了什么文本,保存的是数值
 *                 IE的document.selection:保存着用户选择的文本信息
 *             选择部分文本
 *                 selectionRange():接受2个参数,要选择的第一个字符的索引何要选择的最后一个字符之后的索引
 *                 IE的createTextRange():
 *                     先创建一个范围
 *                     collapse()将范围折叠到文本框开始位置
 *                     再使用moveStart()&moveEnd()移动到位
 *                     最后select()选择文本
 *                 选择部分文本技术可用于提供自动完成建议的文本框
 *
 */

//建议使用value设置何读取文本框的值
var textbox = document.forms[0].elements["textbox1"];
alert(textbox.value);

textbox.value = "Some new value";

textbox.select();


//只要文本框获得焦点就选择其中所有文本,便于删除文本框内的默认文本
EventUtil.addHandler(textbox, "focus", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    target.select();
});

//跨浏览器时需在事件处理程序中重新获取对文本框的应用
var textbox = document.forms[0].elements["textbox1"];
EventUtil.addHandler(textbox, "select", function(event) {
    var target = document.forms[0].elements["textbox1"];
    alert("Text selected");
});

//取得文本框中选择的文本
function getSelectonText(textbox) {
    if (document.selection) {
        //假定用户选择文本框中的文本
        return document.selection.createRange().text;
    } else {
        return textbox.value.substring(textbox.selectionStart, textbox.selectionEnd);
    }
}

textbox.value = "Hello world!";
//选择所有文本
textbox.selectionRange(0, textbox.value.length);    //"Hello world!"
//选择前3个字符
textbox.setSelectionRange(0, 3);    //"Hel"
//选择第4个到第6个字符
textbox.setSelectionRange(4, 7);    //"o w"

textbox.value = "Hello world!";

var range = textbox.createTextRange();

//选择所有文本
range.collapse(true);
range.moveStart("character", 0);
range.moveEnd("character", textbox.value.length);    //"Hello world!"
range.select();

//选择前3个字符
range.collapse(true);
range.moveStart("character", 0);
range.moveEnd("character", 3);
range.select();    //"Hel"

//选择第4到第6个字符
range.collapse(true);
range.moveStart("character", 4);
range.moveEnd("character", 3);
range.select();    //"o w"

//看到文本被选择的效果,需让文本框获得焦点
function selectText(textbox, startIndex, stopIndex) {
    if (textbox.setSelectionRange) {
        textbox.setSelectionRange(startIndex, stopIndex);
    } else if (textbox.createTextRange) {
        var range = textbox.createTextRange();
        range.collapse(true);
        range.moveStart("character", startIndex);
        range.moveEnd("character", stopIndex - startIndex);
        range.select();
    }
    textbox.focus();
}

textbox.value = "Hello world!"
//选择所有文本
selectText(textbox, 0, textbox.value.length);    //"Hello world!"
//选择前3个字符
selectText(textbox, 0, 3);    //"Hel"
//选择第4到第6个字符
selectText(textbox, 4, 7);    //"o w"

