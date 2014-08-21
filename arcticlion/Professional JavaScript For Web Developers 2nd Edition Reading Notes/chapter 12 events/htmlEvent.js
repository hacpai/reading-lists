/*
 * HTML事件
 *     load事件
 *         当页面加载后触发window上的load事件
 *         两种定义onload事件处理程序方式
 *         建议使用JavaScript方式
 */

//JavaScript指定事件处理程序方式
EventUtil.addHandler(window, "load", function(event) {
    alert("Loaded!");
});

//<body>添加一个onload特性
<html>
<head>
    <title>Load Event Example</title>
</head>
<body onload="alert('Loaded')">
</body>
</html>

