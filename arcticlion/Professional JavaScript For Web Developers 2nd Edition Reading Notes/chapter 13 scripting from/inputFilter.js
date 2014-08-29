/*
 * 过滤输入
 *     屏蔽字符
 *     操作剪贴板
 *     自动切换焦点
 * <input type="text" name="tel1" id="txtell" maxlength="3">
 * <input type="text" name="tel2" id="textll" maxlength="3">
 * <input type="text" name="tel3" id="textll" maxlength="3"> 
 */

//屏蔽所有数字字符
EventUtil.addHandler(textbox, "keypress", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    //跨浏览器取得字符编码
    var charCode = EventUtil.getCode(event);
    //再将字符转化成字符串用正则测试
    //取消屏蔽方向键和删除键
        //Firefox这些键字符编码为0，Safari3-为8，故屏蔽charCode > 9的字符
        //取消屏蔽Ctrl
    if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 && !event.CtrlKey) {
        EventUtil.preventDefault(event);
    }
});

//检测黏贴的值是否为数值
EventUtil.addHandler(textbox, "paste", function(event) {
    event = EventUtil.getEvent(event);
    var text = EventUtil.getClipboardText(event);

    if (!/^\d*$/.test(text)) {
        EventUtil.preventDefault(event);
    }
});

//设置数值到剪贴板
Eventil.addHandler(textbox, "copy", function(event) {
    event = Eventil.getEvent(event);
    EventUtil.preventDefault(event);
    EventUtil.setClipboardText(event, "Hello world!");
});

//自动切换焦点
(function() {

    function tabForward(event) {
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);

        if (target.value.length  == target.maxLength) {
            var form = target.form;
            for (var i = 0, len=form.elements.length; i < len; i++) {
                if (form.elements[i] == target) {
                    form.elements[i+1].focus();
                    return;
                }
            }
        }
    }
    var textbox1 = document.getElementByName("txtTel1");
    var textbox2 = document.getElementByName("txtTel2");
    var textbox3 = document.getElementByName("txtTel3");

    EventUtil.addHandler(textbox1, "keyup", tabForward);
    EventUtil.addHandler(textbox2, "keyup", tabForward);
    EventUtil.addHandler(textbox3, "keyup", tabForward);
}();

