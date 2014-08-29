/*
 * 文本框脚本
 *     两种方式表示
 *         <input>:单行文本
 *             <input type="text" size="25" maxlength="50" value="initial value">
 *         <textarea>:多行文本
 *             <textarea rows="25" cols="5">initial value</textarea>
 *         两种方式都会将用户输入保存在value中,可以设置读取何设置文本框的值
 *
 */

//建议使用value设置何读取文本框的值
var textbox = document.forms[0].elements["textbox1"];
alert(textbox.value);

textbox.value = "Some new value";

 
