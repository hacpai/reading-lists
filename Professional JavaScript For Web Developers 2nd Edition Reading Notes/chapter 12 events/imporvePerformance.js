/*
 * 内存和性能
 *     事件委托:解决处理程序过多问题
 *         利用了事件冒泡，指定一个事件处理程序来管理一类事件
 *     移除事件处理程序
 *         移除过时不用的空事件处理程序
 *         DOM操作移除:removeChild()&replaceChild()
 *         Script操作移除:xxxx=null
 *         innerHTML前需移除事件处理程序
 *
 * <ul id="myLinks">
 *     <li id="goSomewhere">Go somewhere</li>
 *     <li id="doSomething">Do something</li>
 *     <li id="sayHi">Say hi</li>
 * </ul>
 */
var list = document.getElementById("myLinks");

EventUtil.addHandler(list, "click", function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event)

    switch(target.id) {
        case "doSomething":
            document.title = "I changed the document's title";
            break;
        
        case "goSomewhere":
            location.href = "http://www.wrox.com";
            break;

        case "sayHi":
            alert("Hi");
            break;
    }
});

<div id="myDiv">
    <input type="button" value="Click Me" id="myBtn">
</div>
<script type="text/javascript">
    var btn = document.getElementById("myBtn");
    //先执行某些操作

    btn.coclick=null;
    //单击这个按钮替换成一个消息
    document.getElementById("myDiv").innerHTML = "Processing...";
    };
</script>

