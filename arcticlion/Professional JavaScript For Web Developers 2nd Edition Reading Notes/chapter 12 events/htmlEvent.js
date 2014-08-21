/*
 * HTML事件
 *     load事件
 *         当页面加载后触发window上的load事件
 */

//JavaScript指定事件处理程序方式
EventUtil.addHandler(window, "load", function(event) {
    alert("Loaded!");
});

