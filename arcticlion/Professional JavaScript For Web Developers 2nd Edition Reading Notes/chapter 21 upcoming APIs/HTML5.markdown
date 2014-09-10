#HTML5

## 字符集属性

HTML5也描述HTMLDocument类型的一些新的属性和新方法。这些新增加的内容中，有一些属性是用于处理文档的字符集。charset属性表示文档所实际使用的字符集。默认情况下，该值为"UTF-16",可以直接设置charset属性。

```
alert(document.charset);    //"UTF-16"
document.charset = "UTF-8";
```
defaultCharset属性表示文档所对应的默认字符集。

```
if (document.charset != document.defaultCharset) {
    alert("Custom character set being used.");
}
```
这些属性允许更深入地了解和控制文档所使用的字符编码。

## 类相关的增加

自HTML4的时代以来，web开发中的一个重大的变化是class属性使用的大量增长，它用于表示元素样式和语义信息。

这导致了很多与CSS类之间的JavaScript交互，包括动态更改类和根据给定类或类的集合查询文档中的元素。为了适应开发人员和他们对class属性的全新认识，HTML5引入了一些修改使得CSS类的使用更加容易。

### getElementsByClassName()方法

getElementsByClassName()方法接受单个参数，是一个包含一个或多个类名的字符串，并返回一个NodeList，它包含所有应用了所有指定类的元素。

```
//取得类中包含"username"和"current"的所有元素，不过两声明的顺序并没有关系
var allCurrentUsernames = document.getElementsByClassName("username current");

//获得在myDiv的子树中包含"selected"类的所有元素
var selected = document.getElementById("myDiv").getElementsByClassName("selected");
```

### classList属性

与类名处理中，会用到className属性添加、删除和替换类名。

```
<div class="bd user disabled" > ... </div>
```
该`<div>`分配了3个类。要删除其中一个类，需要将class属性分割为单独的类，然后删除不需要的类，最后创建一个新的字符串包含剩余的类。如下：

```
//删除user类

//首先，获取类名的列表
var className = dov.className.split(/\s+/);

//找到要删除的类名
var pos = -1;
for (var i = 0, len = className.length; i < len; i++) {
    if (className[i] == "user") {
        pos = i;
        break;
    }
}

//删除类名
className.splice(i, 1);

//设置类名
div.className = className.join("");
```
HTML5引入更加简便和安全的方式操作类名，即给所有元素新增classList属性。
- add(value)
- has(value)——检测给定值是否存在于列表中。
- remove(value)
- toggle(value)）如果值存在列表中，则删除它；如果值不在，则添加。

之前的例子中的全部代码可以直接用下面一行代码替换：

```
div.classList.remove("user");
```
使用这段代码可以确保其他的类名在修改时也不会被影响。其他方法也极大地减少了基本操作的复杂度。如下：

```
//删除disable类
div.classList.remove("disabled");

//添加current类
div.classList.add("current");

//开/关user类
div.classList.taggle("user");

//看看现在元素有什么
if (div.classList.has("bd") && !div.classList.has("disabled")) {
    //执行操作
}

//迭代所有的类名
for (var i = 0, len = div.classList.length; i < len; i++) {
    doSomeing(div.classList[i]);
}
```

## 自定义数据特性

HTML5允许给元素指定以`data-`为前缀的非标准特性，以便能提供元素的不需要进行渲染或者没有语义的值。这些特性可以按意愿添加和命名。

```
<div id="myDiv" data-appId="1234" data-myname="Nicholas" ></div>
```
当定义了一个自定义数据特性之后，就可以通过元素的dataset属性对它进行访问。dataset属性包含一个DOMString Map的实例，它是一个名字-值的映射。直到2008年6月份，DOMStringMap接口还尚未定义，但至少包含三个方法：一个用于设置名－值对，一个用于获取给定名称对应的值，还有一个用于判断名称时否已经存在于数据集中。以下例子仅仅用于示意：

```
//本例中的方法仅用于示意

var div = document.getElementById("myDiv");

//获取值
var appId = div.dataset.appId;
var myName = div.dataset.get("myname");

//设置值
div.dataset.appId = 23456;
div.dataset.set("myname", "Michael");

//"myName"的值是否存在
if (div.dataset.has("myname")) {
    alert("Hello, " + div.dataset.myname);
}
```
当需要给某个元素绑定一些非可见数据用于其他类型的处理时，自定义数据特性就非常哟用。

## 跨文档消息传递

跨文档消息传递的执行是使用任意window对象（包括那些代表iframe的）的postMessage()方法。其他所有文档总是可以访问postMessage()，甚至包括来自不同域名下的文档。这个方法接受两个参数：要发送给文档的数据，数据的目标域名。

当调用了某个window对象的postMessage()时，document的的message事件则会被出发。为该消息事件创建的event对象包含以下属性：
- data——作为第一个参数传递给postMessage()的数据
- origin——发送该消息的窗口的协议、域名和端口号
- source——发送该消息的窗口对象

跨文档消息传递一般和iframe一起使用，如下：

```
<iframe src="http://www.wrox.com/somepage.php" id="wroxPage"></iframe>
```
要从包含该iframe的页面给该文档发送消息，可以使用以下JavaScript：

```
//获取iframe的窗口对象的引用
var wroxWin = document.getElementById("wroxPage").contentWindow;

//发送消息
wroxWin.postMessage("Hello, Worx!". "http://www.worx.com");

//或者，发送不包含域名限制的消息
wroxWin.postMessage("Hello, Worx!", "*");
```

在发出消息之后，该iframe包含的document的message事件则会出发。可以使用以下代码接受消息：

```
//在http://www.wrox.com/somepage.php中
EventUtil.addHandler(document, "message", function(event) {

    //确保来源和预期的一致
    if (event.origin.indexOf("p2p.wrox.com") > -1) {

        //显示数据
        alert(event.data);

        //回发一个消息
        event.source.postMessage("Got it, thanks!", "http://p2p.wrox.com");
    }
});
```
这段代码中，message事件是这样处理的：先检查接受的消息的来源以确保其来自可信的来源，如果可信，则显示消息并给发送原消息的window发送一个新的消息。

## 媒体元素

HTML4在浏览器层面引入了两个和媒体相关的元素，用来实现无需任何擦肩的跨浏览器的音频和视频嵌入：`<audio>`和`<video>`.这些用法如下：

```
<!--嵌入一个视频-->
<video src="conference.mpg" id="myVideo">Video player not available. </video>

<!--嵌入一个音频文件-->
<audio src="song.mp3" id="myAudio">Audio player not available. </audio>
```
这两个元素至少需要出现表示要载入的媒体文件的src特性。还可以指定width和height特性来表示所需的视频播放器的尺寸，还有poster特性，即当视频内容正在被加载时显示的一个图像URI。如果出现controls特性，则表示浏览器应该显示一个能让用户直接于媒体交互的UI。在起始和结束标签之间的任何内容，都是作为当媒体播放器不可用时显示的候选内容。

可以使用play()和pause()方法手动控制媒体文件的回放，这些属性、事件加上方法就可以很容易的创建一个自定义的媒体播放器。如下例：

```
<div class="mediaplayer">
    <div class="video">
        <video id="player" src="movie.mov" poster="mymovie.jpg"
                width="300" height="200">
           Video player not available.
        </video>
    </div>
    <div class="controls">
        <input type="button" value="play" id="video-btn"/>
        <span id="curtime">0</span>/<span id="duration">0</duration>
    </div>
</div>
```
再用点JavaScript就能给上面这段基本的HTML画龙点睛，成为一个见DNA的视频播放器

```
//获取元素的引用
var player = document.getElementById("player");
var btn = document.getElementById("video-btn");
var curtime = document.getElementById("curtime");
var duration = document.getElementById("duration");

//给按钮附加事件处理程序
EventUtil.addHandler(btn, "click", function(event) {
    if (player.paused) {
        player.play();
        btn.value = "Pause";
    } else {
        player.pause();
        btn.value = "play";
    }
});

//当载入完成之后初始化UI
EventUtil.addHandler(player, "load", function(event) {
    duration.innerHTML = player.duration;
});

//定时更新当前时间
setInterval(function() {
    curtime.innerHTML = player.currentTime;
}, 250);
```

这里的JavaScript代码(根据当前状态）给暂停或播放视频的按钮简单添加了时间处理程序。然后，为`<video>`的载入时间设置了一个事件处理程序，可以显示总长度，设置了重复定时器来更新当前显示的时间。

## `<canvas>`元素

`<canvas>`元素为在页面上绘制图案提供了一个画布。绘图画布开始总是空的，唯一设置其显示的方法是通过JavaScript。`<canvas>`元素要求至少设置width和height特性，以指定要创建的绘图区域的大小。任何起始和结束标签之间的内容是候选内容，当浏览器不支持该元素时，便会显示。例如。

```
<canvas id="drawing" width="200" height="200">A drawing of something.</canvas>
```
开始在画布上绘图之前，要先取得绘图的环境。绘图环境的引用可以使用getContext()方法获取，要传入一个"2d"参数。如下：

```
var drawing = document.getElementById("drawing");

//确保完全支持<canvas>
if（drawing.getContext) {
    
    var context = drawing.getContext("2d");

    //其他代码
}
```

### 绘制长方形

唯一的一个可以直接在2D绘图环境总绘制的图像时长方形。长方形有三个方法：fillRect(), strokeRect(), clearRect().三个方法都接受四个参数：长方形的x坐标，y坐标，宽和高。

fillRect()方法用于绘制一个内部填充了指定颜色的长方形。填充的色彩是使用fillStyle属性指定的，它一开始等于黑色（"#000000").可以将该属性设置为以六位十六进制数指定的任意色彩，或者使用CSSrgb()或者rgba()格式。如下例：

```
var drawing = document.getElementById("drawing");

//确保完全支持<canvas>if (drawing.getContext) {
    
    var context = drawing.getContext("2d");

    //绘制一个红色的长方形
    context.fillStyle = "#ff0000";
    context.fillRect(10, 10, 50, 50);

    //绘制一个半透明的蓝色长方形
    context.fillStyle = "rgba(0, 0, 255, 0.5)";
    context.fillRect(30, 30, 50, 50);
}
```
该代码首先将fillStyle设置为红色，然后在(10, 10)绘制了一个50像素高和宽的长方形。然后，又使用rgba()格式将fillStyle设为一个半透明的蓝色，并画了另一个长方形覆盖了第一个。结果可以看到红色和蓝色长方形中间接在一起。

strokeRect()方法使用由strokeStyle属性指定的颜色绘制一个长方形外框。和fillStyle属性一样，strokeStyle默认为"#000000", 并可以使用十六进制值，rgb()或者rgba（）设置。

```
var drawing = document.getElementById("drawing"):

//确保完全支持<canvas>
if (drawing.getContext) {

    var context = drawing.getContext("2d");

    //绘制一个红色的长方形边框
    context.strokeStyle = "#ff0000";
    context.strokeRect(10, 10, 50, 50);

    //绘制一个半透明的蓝色长方形边框
    context.strokeStyle = "rgba(0, 0, 255, 0.5)";
    context.strokeRect(30, 30, 50, 50);
}
```

这段代码也绘制了两个重叠的长方形，不过都只是边框而不是填充的长方形。

可以使用clearRect()方法清除画布的一块区域。该方法用于让一块绘图环境变透明。通过绘制图形然后清除指定区域，就可以创建有趣的效果，比如切掉另一个形状的一部分。如下例：

```
var drawing = document.getElementById("drawing");

//确保完全支持<canvas>
if (drawing.getContext) {
    
    var context = drawing.getContext("2d");

    //绘制一个红色长方形
    context.fillStyle = "#ff0000";
    context.fillRect(10, 10, 50, 50);

    //绘制一个半透明的蓝色长方形
    context.fillStyle = "rgba(0, 0, 255, 0.5)";
    context.fillRect(30, 30, 50, 50);

    //创建一个覆盖前面长方形的长方形
    context.clearRect(40, 40, 10, 10);
}
```

### 绘制路径

2D绘图环境支持一些在画布上绘制路径的方法，可以创建复杂的形状和线条。要开始创建路径，必须首先调用beginPath()表示新路径开始。调用以下方法创建路径。

- arc(x, y, radius, startAngle, endAngle, anticlockwise)——绘制中心点在(x, y)的弧，半径为radius，角度在startAngle和endAngle弧度之间。最后一个参数是一个布尔值，表示startAngle和endAngle是逆时针方向计算还是顺时针方向计算。
- arcTo(x1, y1, x2, y2, radius)——绘制从一个点到(x2, y2)的弧，经过(x1, y1), 半径为radius。
- bezierCurveTo(c1x, c1y, c2x, c2y, x, y)——使用控制点(c1x, c1y)和(c2x, c2y)从最后一点到点(x, y)绘制一条曲线。
- lineTo(x, y)——从最后一点到(x, y)而不绘制线条。
- moveTo(x, y)——将绘图光标移动到点(x, y)而不绘制线条。
- quadraticCurveTo(cx, cy, x, y)——使用控制点(cx, cy)从最后一点绘制一条而驰曲线到点(x, y).
- rect(x, y, width, height)——在点(x, y)绘制一个长width和宽height的矩形。与strokeRect()和fillRect()不一样的是，这个函数创建一个路径而不是单独的形状。

绘制一条线回到路径起始点，可以调用closePath()。如果路径已经闭合，还可以调用fill()方法用fillStyle填充它。另外一个选项是调用stroke()方法对路径描边。最后一个选项是调用clip()，根据路径创建一个裁剪区域。

请看下面绘制一个钟（不带数字）的例子：

```
var drawing = document.getElementById("drawing");

//完全支持<canvas>
if (drawing.getContext) {
    var context = drawing.getContext("2d");

    //路径开始
    context.beginPath();

    //绘制外圆
    context.arc(100, 100, 99, 0, 2 * Math.PI, false);

    //绘制内圆
    context.moveTo(194, 100);
    context.arc(100, 100, 94, 0, 2 * Math.PI, false);

    //绘制时针
    context.moveTo(100, 100);
    context.lineTo(100, 15);

    //绘制分针
    context.moveTo(100, 100);
    context.lintTo(35, 100);

    //路径描边
    context.stroke();
}
```
还有一个方法叫做isPointInPath(), 接受一个x坐标和一个y坐标作为参数。该方法在路径关闭之前任意时间点调用，判断某个点是否存在于路径上。

### 绘制文本

有两个绘制文本的方法：fillText()和strokeText(), 两者都接受4个参数：要绘制的字符串、x坐标、y坐标和可选的最大像素宽度。两者都根据以下3个属性进行绘制。
- font
- textAlign——表示文本应如何对齐
- textBaseline——表示文本的基线位置。

例如，以下代码在上一节制作的钟的顶部呈现了一个“12”

```
context.font = "bold 10px Arial";
context.textAlign = "center";
context.textBaseline = "middle";
context.fillText("12", 100, 80);
```

### 变换

对绘图环境进行变换，可以让绘图操作应用一个不同的变换矩阵并产生一个不同的结果。

变换矩阵可以使用以下方法扩展。

- rotate(angle)——图像绕原点旋转一定弧度
- scale(scaleX, scaleY)——缩放图像，在x轴放大scaleX，y轴放大scaleY。scaleX和scaleY的默认值都是1.0
- translate(x, y)——将原点移动到点(x, y).该操作之后，坐标(0, 0)将位于点(x, y).
- transform(m1_1, m1_2, m2_1, m2_2, dx, dy)——将变换矩阵乘上以下矩阵：

m1_1 | m2_2 | dx 
:--- | :--: | --:
m2_1 | m2_2 | dy
0    |   0    | 1

- setTransform(m1_1, m1_2, m2_1, m2_2, dx, dy)——重置变换矩阵到默认状态，RNA后调用transform().

如果能将原点变换到钟的中心，那么绘制钟的指针就更加容易了。

```
var drawing = document.getElementById("drawing");

//完全支持<canvas>
if (drawing.getContext) {
    var context = drawing.getContext("2d");

    //路径开始
    context.beginPath();

    //绘制外圆
    context.arc(100, 100, 99, 0, 2 * Math.PI, false);

    //绘制内圆
    context.moveTo(194, 100);
    context.arc(100, 100, 94, 0, 2 * Math.PI, false);

    //转换到中心
    context.translate(100, 100);

    //绘制时针
    context.moveTo(0, 0);
    context.lineTo(0, -85);

    //绘制分针
    context.moveTo(0, 0);
    context.lineTo(-65, 0);

    //路径描边
    context.stroke();
}
```
更进一步，可以如下使用rotate()方法旋转钟的指针：

```
var drawing = document.getElementById("drawing");

//完全支持<canvas>
if (drawing.getContext) {
    var context = drawing.getContext("2d");

    //路径开始
    context.beginPath();

    //绘制外圆
    context.arc(100, 100, 99, 0, 2 * Math.PI, false);

    //绘制内圆
    context.moveTo(194, 100);
    context.arc(100, 100, 94, 0, 2 * Math.PI, false);

    //转换到中心
    context.translate(100, 100);

    //旋转指针
    context.rotate(1);

    //绘制时针
    context.moveTo(0, 0);
    context.lineTo(0, -85);

    //绘制分针
    context.moveTo(0, 0);
    context.lineTo(-65, 0);

    //路径描边
    context.stroke();
}
```

save()方法，调用这个方法之后，当前所有的设置都会推倒一个栈保存，然后可以继续对环境进行其他更改。当你想回到之前的设置，可以调用restore(),它会从设置栈上弹出设置并恢复它。

```
context.fillStyle = "#ff0000";
context.save();

context.fillStyle = "#00fff00";
context.translate(100, 100);
context.save();

context.fillStyle = "#0000ff";
context.fillRect(0, 0, 100, 200);    //在(100, 100)处绘制一个蓝色的矩形

context.restore();
context.fillRect(10, 10, 100, 200);    //在(110, 110)处绘制一个绿色的矩形

context.restore();
context.fillRect(0, 0, 100, 200);    //在(0, 0)处绘制一个红色的矩形
```

这段代码中，fillStyle设成红色，然后调用save().接下来，fillStyle变成了绿色，然后坐标又移动到了(100, 100). 然后再次调用save()来保存这个设置。

然后fillStyle属性又被设置成了蓝色并绘制了一个矩形。因为坐标移动，实际上最终矩形画在(100, 100)处的。当调用了restore()之后，fillStyle又设回了绿色，所以接下来画的矩形是绿色的。矩形实际是画在(110, 110)处，因为坐标转换仍然有效。再次嗲用了restore()之后，取消了坐标转换并且fillStyle设回了红色。最后的矩形画在(0, 0)处的。

> 注意save()只保存应用于绘图环境上的设置的变换，不包括绘图环境的内容。

### 使用图片

如果有一个现成的图片要画在画布上，可以调用drawImage()方法。根据所需结果，可以用三套参数调用这个方法。最简单的是传入一个HTML`<img>`，以及目标x坐标和y坐标，可以在指定位置绘制图像。如下：

```
var image = document.images[0];
context.drawImage(image, 10, 10);
```
这段代码取得文档中的第一个图像，并显示在环境中的位置(10, 10)处。还可以通过增加两个参数改变绘制图像的方式：目标的宽和高。它能缩放图像而不会影响变换矩阵。例如：

```
context.drawImage(image, 50, 10, 20, 30);
```
还可以只选择图像的一部分显示在环境中。这要给drawImage()提供九个参数：要绘制的图像，源图像的x坐标、源图像的y坐标、源图像的宽、源图像的高、目标图像的x坐标、目标图像的y坐标、目标图像的宽、目标图像的高。

```
context.drawImage(image, 0, 10, 50, 50, 0, 100, 40, 60);
```
除了可以传入一个HTML的`<img>`之外，还可以传入另一个`<canvas>`元素，将一个画布的内容画到另一个上。

