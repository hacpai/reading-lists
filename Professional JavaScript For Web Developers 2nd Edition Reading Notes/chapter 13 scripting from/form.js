/*
 * 表单
 * HTML表单是<form>表示,JavaScript表单是HTMLFormElement类型
 * document.forms:取得页面中所有表单
 * document.forms[0]:取得第一个表单
 * document.forms["form2"]:取得名为“form2”的表单
 *     提交表单
 *         用户单击提交按钮或图像按钮时提交表单
 *         <input>或<button>定义提交按钮，设置type＝"submit" or type="image"
 *         JavaScript调用submit()提交表单,该方式无需表单包含提交按钮,不触发提交事件
 *         用户重复提交问题:第一次提交后禁用提交按钮or onsubmit事件 处理程序取消后续表单提交操作 
 *     重置表单
 *         用户单击重置按钮时，表单被重置
 *         适用type="reset"的<input>or<button>创建重置按钮
 *         调用reset()像单击重置按钮一样触发reset事件
 *     表单字段
 *         可以像访问页面中其他元素一样,使用原生DOM方法访问表单元素
 *         form.elements:表单中所有元素的有序集合
 *         共有的表单字段属性
 *             通过JavaScript动态修改表单属性
 *             form:指向当前字段所属表单的指针
 *         共有表单字段方法
 *             focus():激活表单字段，使其响应键盘事件
 *             blur():将焦点移走,类似readonly
 *         共有的表单字段事件
 *             blur:字段失去焦点时触发
 *             change:<input>and<textarea>获得焦点到失去焦点且值改变触发；<slect>选项改变时触发
 *             focus:字段获得焦点时触发
 *             通常用focus和blur事件给用户视觉提示或添加额外功能(如显示一个下拉选项菜单)
 *             change用于验证用户在字段中输入的数据
 *             
 *
 * <form method="post" id="myForm">
 *     <ul>
 *         <li><input type="radio" name="color" value="red">Red</li>
 *         <li><input type="radio" name="color" value="green">Green</li>
 *         <li><input type="radio" name="color" value="blue">Blue</li>
 *    </ul>
 * </form>
 *
 */

var form = document.getElementById("myForm");
EventUtil.addHandler(form, "submit", function(event) {

    //取得事件对象
    event = EventUtil.getEvent(event);

    //阻止默认事件
    EventUtil.preventDefault(event);
});

var form = document.getElementById("myForm");
EventUtil.addHandler(form, "reset", function(event) {
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
});

var form = document.getElementById("myForm");

var colorFields = form.elements["color"];
alert(colorFields.length);    //3
//form.elements的第一个表单字段与包含在form.elements["color"]中第一个元素相同
var firstColorField = colorFields[0];
var firstFormField = form.elements[0];
alert(firstColorField == firstFormField);    //true

form.reset();

var form = document.getElementById("form1");
//取得表单中第一个字段
var field1 = form.elements[0];
//取得名为textbox1的字段
var field2 = form.elements["textbox1"];
//取得表单中包含的字段数量
var fieldCount = form.elements.length;

//修改value属性
field.value = "Another value";
//检查form属性的值
alert(field.form == form);    //true
//把焦点设置到当前字段
field.focus();
//禁用当前字段
field.disabled = true;
//修改type属性
field.type = "checkbox";

//防止用户多次提交表单
EventUtil.addHandler(form, "submit", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    //取得提交按钮
    var btn = target.elements["submit-btn"];
    //禁用它
    btn.disabled = true;
});

EventUtil.addHandler(window, "load", function(event) {
    document.forms[0].elements[0].focus();
    document.forms[0].elements[0].blur();
});

//只允许用户输入数值的文本框
    //focus修改文本框背景颜色
    //blur恢复文本框背景颜色
    //change用户输入非数值再次修改背景颜色
var textbox = document.forms[0].elements[0];

EventUtil.addHandler(textbox, "focus", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    if (target.style.backgroundColor != "red") {
        target.style.backgroundColor = "yellow";
    }
});

EventUtil.addHandler(textbox, "blur", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    //正着表达式测试用户输入是不是非数值
    if (/[^\d]/.test(target.value)) {
        target.style.backgroundColor = "red";
    } else {
        target.style.backgroundColor = "";
    }
});

EventUtil.addHandler(textbox, "change", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    if (/[^\d]/.test(target.value)) {
        target.style.backgroundColor = "red";
    } else {
        target.style.backgroundColor = "";
    }
});

