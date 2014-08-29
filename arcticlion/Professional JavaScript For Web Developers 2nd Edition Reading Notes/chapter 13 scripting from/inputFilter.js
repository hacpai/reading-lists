/*
 * 过滤输入
 *     屏蔽字符
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
    if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9) {
        EventUtil.preventDefault(event);
    }
});

