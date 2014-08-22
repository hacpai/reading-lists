/*
 * HTML事件
 *     load事件
 *         当页面加载后触发window上的load事件
 *         两种定义onload事件处理程序方式
 *         建议使用JavaScript方式
 *         图像也有两种可触发load事件
 *         创建<img>为其指定事件处理程序，以便图像加载完毕后给出提示
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

<img src="smile.gif" onload="alert('Image loaded.')" />

//向DOM添加新元素必须确定页面已经加载完成
EventUtil.addHandler(window, "load", function() {
    var image = document.createElement("img");
    EventUtil.addHandler(image, "load", function(event) {
        event = EventUtil.getEvent(event);
        //这里事件的目标是<img>，因此通过src访问需要的图片
        alert(EventUtil.getTarget(event).src); 
    });
    要在指定src之前先指定事件
    document.body.appendChild(image);
    image.src = "smile.gif";
});

//DOM0级预先加载图片
EventUtil.addHandler(window, "load", function() {
    var image = new Image();
    EventUtil.addHadnler(image, "load", function(event) {
        alert("Image loaded!");
    });
    image.src = "smile.gif";
});

