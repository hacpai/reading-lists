/*
 * 键盘事件
 * keyCode:按下字符的ASCII
 * 提窗键码值
 */
var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox, "keyup", function(event) {
    event = EventUtil.getEvent(event);
    alert(event.keyCode);
});

