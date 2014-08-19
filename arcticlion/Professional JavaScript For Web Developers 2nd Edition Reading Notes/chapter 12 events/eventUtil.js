/*
 * 以跨浏览器方式处理事件
 * 一般使用js库
 * EventUtil对象处理浏览器之间的差异
 * EventUtil对象中有一个addHandler()
 * 接受3个参数
 * 要操作的元素
 * 事件名称
 * 事件处理函数
 *     if addEventListener添加事件处理程序
 *     elif attachEvent
 *     else DOM0级方法
 * 跨浏览器事件对象
 *     getEvent()返回对event对象的引用
 *     getTarget()返回事件的目标
 *     preventDefault()取消事件的默认行为 
 *     stopPropagation()取消事件的冒泡行为
 * 得到相关元素信息
 *     DOM通过event对象的relatedTarget属性提供相关信息
 *         该属性只支持mouseover&mouseout
 *     IE的fromElement&toElement属性分别保存mouseover&mouseout事件触发着的相关元素
 *     对于其他事件这个属性为null
 * 检测“MouseEvent”特性确定event对象中button是否含正确值
 * 检测失败说明为IE，就对相应值进行规范化
 */
var EventUtil = {

    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    getEvent: function(event) {
        return event ? event : window.event;
    },

    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    
    getButton: function(event) {
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button;
        } else {
            switch(event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    

    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = fale;
        }
    },
    
    getRelatedTarget: function(event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromeElement) {
            return event.fromElement;
        } else {
            return null;
        }
    },

    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type = null];
        }
    },

    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
}

//使用EventUtil对象
var btn = document.getElementById("myBtn");
var handler = function () {
    alert("Clicked");
};
EventUtil.addHandler(btn, "click", handler);

EventUtil.removeHandler(btn, "click", handler);

//事件对象的使用
btn.onclick = function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    alert("Clicked");
    eventUtil.stopPropagation(event);
};

var link = document.getElementById("myLink");
link.onclick = function(event) {
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
};

//为<div>mouseout事件注册一个事件处理程序
//事件触发时，弹窗显示鼠标移出和移入的元素信息
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "mouseout", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    var relatedTarget = EventUtil.getRelatedTarget(event);
    alert("Moused out of " + target.tagName + " to " + relatedTarget.tagName);
});

EventUtil.addHandler(div, "mousedown", function(event) {
    event = EventUtil.getEvent(event);
    alert(EventUtil.getButton(event));
});

