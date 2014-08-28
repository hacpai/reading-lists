/*
 * 文本框脚本
 * 两种方式表现文本框:<input>单元素文本框和<textarea>多行文本框:
 *     <input type="text" size="25" maxlength="50" value="initial value">
 *     <textarea rows="25" cols=5">initial value</textarea>
 *     不建议用setAttribute()设置<input>的value特性
 *     不修改<textarea>的第一个子节点
 *     选择文本:
 *         select():选择文本框中的所有文本,浏览器将焦点设置到文本框中
 *         选择事件:
 *             选择文本框文本时触发select事件,知道用户选择了文本
 *             何时触发因浏览器而异
 *         取得选择的文本
 *             selectionStart&selectionEnd:用户选择了什么文本,保存的是数值
 *             IE的document.selection:保存着用户选择的文本信息
 *         选择部分文本
 *             selectionRange():接受2个参数,要选择的第一个字符的索引何要选择的最后一个字符之后的索引
 *
 */

//无论这两种文本框有什么区别,但他们都将用户输入内容保存在value属性中
var textbox = document.forms[0].forms[0].elements["textbox1"];
alert(textbox.value);

textbox.value = "Some new value";

textbox.select();

//文本框获得焦点时选择其所有文本
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

