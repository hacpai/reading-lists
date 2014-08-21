/*
 * 键盘事件
 *     keyCode:按下字符的ASCII
 *         提窗键码值
 *     textInput事件
 *         只有在编辑区域触发
 *         只有按下实际字符键才触发
 *         event.data:表示用户输入的字符
 */
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "keyup", function(event) {
    event = EventUtil.getEvent(event);
    alert(event.keyCode);
});

EventUtil.addHandler(textbox, "textInput", function(event) {
    event = EventUtil.getEvent(event);
    alert(event.data);
});

