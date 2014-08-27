/*
 * 模拟事件
 *     createEvent()创建event对象，接受创建事件类型的字符串
 *     dispatchEvent():触发事件
 *     模拟鼠标事件
 *         createEvent("MouseEvents")
 *         initMouseEvent():指定鼠标事件的有关信息,接受15个参数
 *     模拟键盘事件
 *         createEvent(KeyEvents)
 *         initKeyEvent()接受10个参数
 *     模拟变动事件
 *         createevent("MutationEvents")
 *         initMutationEvent()
 *     模拟HTML事件
 *         createevent("HTMLEvent")
 *         initEvent()初始化
 *     IE中事件模拟
 *         思路与DOM模拟相似
 *         document.createEventObject():创建event对象，改方法不接受参数
 *         fireEvent():触发事件，接受两个参数，事件处理程序名称和event对象,自动添加srcElement和type属性
 *
 */

var btn = document.getElementById("myBtn");
//创建事件对象
var event = document.createEvent"MouseEvents");
//初始化事件对象
event.initMouseEvent("click", true, ture, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
//触发事件
btn.dispatchEvent(event);

//只适用于Firefox
var textbox = document.getElementById("myTextbox");
//创建事件对象
var event = document.createEvent("KeyEvents");
//初始化事件对象
event.initKeyEvent("keypress", true, true, document.defaultView, false, false, false, false, 65, 65);
//触发事件
textbox.dispatchEvent(event);

//创建通用事件
var textbox = document.getElementById("myTextbox");
//创建事件对象
var event = document.createEvent("Events");
//初始化事件对象
event.initEvent(type, bubbles, cancelable);
event.view = document.defaultView;
event.altKey = false;
event.ctrlKey = false;
event.shiftKey = false;
event.metaKey = false;
event.keyCode = 65;
event.charCode = 65;
//触发事件
textbox.dispatchEvent(event);

//模拟DOMNodeInserted事件
var event = document.createEvent("MutationEvents");
event.initMouseEvent("DOMNodeInserted", true, false, someNode, "", "", "", 0);
target.dispatchEvent(event);

//给定目标模拟focus事件
var event = document.createEvent("HTMLEvents");
event.initEvent("focus", true, false);
target.dispatchEvent(event);

//模拟鼠标事件
var btn = document.getElementById("myBtn");
//创建事件对象
var event = document.createEventObject();
//初始化事件对象
event.screenX = 100;
event.screenY = 0;
event.clientX = 0;
event.clientY = 0'
event.ctrlKey = false;
event.altKey = false;
event.shiftKey = false;
event.button = 0;
//触发事件
btn.fireEvent("onclick", event);

//模拟键盘事件
var textbox = document.getElementById("myTextbox");
var event = document.createEventObject();

event.altKey = false;
event.ctrlKey = false;
event.shiftKey = false;
event.keyCode = 65;

textbox.fireEvent("onkeypress", event);

