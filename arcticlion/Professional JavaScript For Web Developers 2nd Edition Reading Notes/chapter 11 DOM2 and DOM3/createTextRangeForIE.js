/*
 * IE中的范围
 * var range = document.body.createTextRange()
 * findText()简单实现选择
 * <p id="p1"><b>Hello</b> world!</p>
 * 接受一个参数：正值,当前位置向后搜索;负值，反之
 */
var range = document.body.createTextRange();
var found = range.findText("Hello");    //选择“Hello”
alert(found);    //true
alert(range.text);    //"Hello"

var foundAgain = range.findText("Hello", 1);

