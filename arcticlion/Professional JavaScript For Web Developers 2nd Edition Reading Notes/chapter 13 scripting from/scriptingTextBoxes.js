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
 *             
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

