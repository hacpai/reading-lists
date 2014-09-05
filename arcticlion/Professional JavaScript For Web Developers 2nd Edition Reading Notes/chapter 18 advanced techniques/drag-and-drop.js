/*
 * 拖放
 *     设置onmousemove事件处理程序，总是将指定元素移动到鼠标指针位置上
 *     修缮拖动功能
 */

EventUtil.addHandler(document, "mousemove", function(event) {
    var myDiv = document.getElementById("myDiv");
    myDiv.style.left = event.clientX + "px";
    myDiv.style.top = event.clientY + "px";
});

//最简单的拖放界面
var DragDrop = function() {
    //存放被拖动的元素
    var dargging = null;
    //保存x和y坐标的差值
    var diffX = 0;
    var diffY = 0;

    function handleEvent(event) {

        //获取事件和目标
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);

        //确定事件类型
        switch(event.type) {
            case "mousedown":
                //检查target的class是否包含"draggable"类
                //如果是则将target存放到dragging中
                if (target.className.indexOf("draggable") > -1) {
                    dragging = target;
                    diffX = event.clientX - target.offsetLeft;
                    diffY = event.clientY - target.offsetTop;
                }
                break;
            
            case "mousemove":
                if (dragging !== null) {

                    //获取事件
                    event = EventUtil.getEvent(event);

                    //指定位置
                    dragging.style.left = (event.clientX - diffX) + "px";
                    dragging.style.top = (event.clientY - diffY) + "px";
                }
                break;

            case "mouseup":
                dragging = null;
                break;     
        }
    };

    //公共接口
    return {
        enable: function() {
            EventUtil.addHandler(document, "mousedown", handleEvent);
            EventUtil.addHandler(document, "mousemove", handleEvent);
            EventUtil.addHandler(document, "mouseup", handleEvent);
        },

        disable: function() {
            EventUtil.removeHandler(document, "mousedown", handleEvent);
            EventUtil.removeHandler(document, "mousemove", handleEvent);
            EventUtil.removeHandler(document, "mouseup", handleEvent);
        }
    }
}();

//针对所有包含"draggable"类的元素启用
//为了元素能够被托 dog，必须绝对定位
<div class="draggable" style="position:absolute; background:red" ></div>

