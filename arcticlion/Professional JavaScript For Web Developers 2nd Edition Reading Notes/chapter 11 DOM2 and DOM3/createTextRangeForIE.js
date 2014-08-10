/*
 * IE中的范围
 * var range = document.body.createTextRange()
 * findText()简单实现选择
 * <p id="p1"><b>Hello</b> world!</p>
 */
var range = document.body.createTextRange();
var found = range.findText("Hello");    //选择“Hello”
alert(found);    //true
alert(range.text);    //"Hello"

