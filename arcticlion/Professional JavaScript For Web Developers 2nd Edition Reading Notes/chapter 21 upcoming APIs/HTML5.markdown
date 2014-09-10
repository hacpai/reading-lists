# HTML5

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

