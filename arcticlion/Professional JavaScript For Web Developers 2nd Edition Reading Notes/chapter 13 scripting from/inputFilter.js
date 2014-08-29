/*
 * 过滤输入
 *     屏蔽字符
 */

//屏蔽所有字符
EventUtil.addHandler(textbox, "keypress", function(event) {
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
});

