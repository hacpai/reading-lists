/*
 * 专有事件
 *     上下文菜单事件
 *         事件是冒泡，可用document指定事件处理程序
 *         target＝用户操作的元素
 *         为<div>添加oncontextmenu事件处理程序
 *         取消默认行为，保证不显示浏览器默认菜单
 *         再根据event.clientX和clientY确定放置<ul>位置
 *         最后visibility="visible"显示自定义菜单
 *         另外为document添加一个onclick事件处理程序，用于用户单机隐藏菜单
 *     卸载前事件
 *         在页面卸载前触发，通过它取消卸载和继续使用原有页面
 *         控制权在用户
 *         event.returnValue：对话框显示的字符
 *     鼠标滚轮事件
 *         mousewheel事件
 *             鼠标滚动时触发mousewheel事件
 *             event.wheelDelta＝120的倍数,正负号确定方向
 *         DOMMouseScroll事件
 *             类似mousewheel事件
 *             detail=-3倍数
 *     DOMContentLoaded事件
 *         与load事件不同，支持在页面下载早期添加事件处理程序
 *         target=document
 *         对于不支持该事件的浏览器
 *             设置一个事件为0ms的超时调用
 *     就绪状态变化事件(for IE)
 *         readystatechange:提供与文档或元素加载状态有关的信息
 *         document.readyState包含文档加载初始到加载完毕后的5个状态
 *             interactive:DOM树已经加载完毕
 *         <script>和<link>也会触发readystatechange事件
 *             readyState="loaded"or"complete"都可表示资源可用
 *
 *     页面显示和页面隐藏事件
 *         往返缓存:浏览器"后退"和“前进”加快转换速度，将整个页面保存内容中
 *         pageshow:页面显示时触发
 *             event.persisted检测页面是否保存在往返缓存
 *         pagehide:unload事件之前触发
 *             事件处理程序必须添加到window对象
 *             event.persisted:页面从bfcache加载的就会true
 *     移动Safari支持事件
 *         方向变化事件
 *             orientationchange:
 *                 0, 肖像模式
 *                 90， 左旋转横向
 *                 -90, 右旋转横向
 *             用户改变查看模式触发
 *         触摸事件
 *             touchstart:手指放在屏幕上触发
 *             touchmove:手指在屏幕上滑动时连续触发
 *             touchend:手机移开屏幕时触发
 *             touchcancel:系统停止跟踪触摸时触发
 *             触摸事件的属性
 *                 event.touches:当前跟踪触摸操作的Touch对象的数组
 *                 event.targetouchs:特定于事件目标的Touch对象的数组
 *                 event.changeTouches:上次触摸以来发生了改变的数组
 *                 Touch对象的属性
 *                     clientX:触摸目标在视口中的X坐标
 *                     clientY:触摸目标在视口中的Y坐标
 *                     identifier:标示触摸的唯一ID
 *                     pageX:触摸目标在页面中的X坐标
 *                     pageY:触摸目标在页面中的Y坐标
 *                     screenX
 *                     screenY
 *                     target:触摸的DOM节点目标
 *
 *
 * <html>
 * <head>
 *     <title>ContextMenu Event Example</title>
 * </head>
 * <body>
 *     <div id="myDiv">Right click or Ctrl+click me to get a custiom context menu.Click anywhere else to get the default context menu.</div>
 *     <ul id="myMenu" style="position:absolute;visibility:hidden;background-color:silver">
 *         <li><a href="http://www.google.com">Google</a></li>
 *         <li><a href="http://www.baidu.com">Baidu</a></li>
 *         <li><a href="http://yahoo.com">Yahoo!</a></li>
 *     </ul>
 * </body>
 * </html>
 */

EventUtil.addHandler(window, "load", function(event) {
    var div = document.getElementById("myDiv");

    EventUtil.addHandler(div, "contextmenu", function(event) {
        event = EventUtil.getEvent(event);
        EventUtil.preventDefault(event);

        var menu = document.getElementById("myMenu");
        menu.style.left = event.clientX + "px";
        menu.style.top = event.clientY + "px";
        menu.style.visibility = "visible";
    });

    EventUtil.addHandler(document, "click", function(event) {
        document.getElementById("myMenu").style.visibility = "hidden";
    });
});

EventUtil.addHandler(window, "beforeunload", function(event) {
    event = EventUtil.getEvent(event);
    event.returnValue = "I'm really going to miss you if you go.";
});

EventUtil.addHandler(document, "mousewheel", function(event) {
    event = EventUtil.getEvent(event);
    var delta = (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
    alert(delta);
});

EventUtil.addHandler(window, "DOMMouseScroll", function(event) {
    event = EventUtil.getEvent(event);
    alert(event.detail);
});

EventUtil.addHandler(document, "DOMContentLoaded", function(event) {
    alert("Content loaded.");
});

//超时调用模拟DOMContentLoaded事件
    //必须作为页面第一个超时调用
    //页面下载和构建期间，只有一个JavaScript处理过程，因此超时调用会在该过程结束时触发
    //当JavaScript处理完成后立即运行这个函数
setTimeout(function() {
    //在此添加事件处理程序
}, 0);

EventUtil.addHandler(document, "readyStatechange", function(event) { 
    if (document.readyState == "interactive") {
        alert("Content loaded");
    }
});

//交互阶段可能晚于完成阶段
    //为了抢占先机，有必要同时检测这2个阶段
    //当readystatechange事件触发时
        //检测是否进入交互阶段或完成阶段
        //若是，这移除相应事件处理程序，以免程序再执行
        //由于事件处理程序是匿名函数，故用arguments.callee来引用
    //该代码和DOMContentLoaded效果相近
EventUtil.addHandler(document, "readystatechange", function(event) {
    if (document.readyState == "interactive" || document.readyStat == "complete") {
        EventUtil.removeHandler(document, "readystatechange", arguments.callee);
        alert("Content loaded");
    }
});

EventUtil.addHandler(window, "load", function() {

    var script = document.createElement("script");

    EventUtil.addHandler(script, "readystatechange", function(event) {
        event = EventUtil.getEvent(event);
        var target = Event.getTarget(event);
        
        if (target.readyState == "loaded" || target.readyState == "complete") {
            EventUtil.removeHandler(target, "readystatechange", arguments.callee);
            alert("Script Loaded");
        }
    });
    script.src = "example.js";
    document.body.appendChind(script);
});

//同样的编码也适用于<link>加载CSS的情况
EventUtil.addHandler(window, "load", function(event) {

    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";

    EventUtil.addHandler(link, "readystatechange", function(event) {
        event = EventUtil.getEvent(event);
        var tareget = EventUtil.getTarget(event);
        if (target.readyState == "loaded" || target.readyState == "complete") {
            EventUtil.removeHandler(target, "readystatechange", arguments.callee);
            alert("CSS Loaded");
        }
    });
    link.href = "example.css";
    document.getElementByTagName("head")[0].appendChild(link);
});

//首次加载完成，showCount=0
//"后退"后showCount++
//"刷新"后showCount=0
(function() {
    var showCount = 0;

    EventUtil.addHandler(window, "load", function() {
        alert("Load fired");
    });

    EventUtil.addHandler(window, "pageshow", function(event) {
        showCout++;
        alert("Show has the fired " + showCount + " time. Persisted? " + event.persisted);
    });
})();

EventUtil(window, "load", function(event) {
    var div = document.getElementById("myDiv");
    div.innerHTML = "Current orientation is " + window.orientation;

    EventUtil.addHandler(window, "orientationchange", function(event) {
        div.innerHTML = "Current orientation is " + window.orientation;
    }
