# 选择器API

JavaScript库的最流行的一个功能是检索符合通过CSS选择器指定的模式的一些DOM元素。jQuery为了替代getElementById()和getElementsByTagName()来检索元素的引用。

选择器API标准化浏览器中对CSS查询的内置支持。现在任何实现这个特性的JavaScript库必须先写一个初级的CSS分析器，然后使用现有的DOM方法在文档中查找并确定匹配的节点。

选择器API的核心是两个方法: querySelector()和querySelectorAll().在合规范的浏览器中，Document类型和Element类型中都有这两个方法。

## querySelector()方法

querySelector()接受一个CSS查询并返回匹配该模式的第一个子孙元素，如果没有匹配元素则返回null。

```
//获取body元素
var body = document.querySelector("body");

//获取ID为myDiv的元素
var myDiv = document.querySelector("#myDiv");

//获取第一个包含类selected的元素
var selected = document.querySelector(".selected");

//获取第一个包含类button的图像元素
var img = document.body.querySelector("img.button");
```
当querySelector()方法应用Document类型上时，它会尝试从文档元素开始匹配模式。如果应用于Element类型，查询则只会尝试从该元素的子孙节点中寻找匹配。

querySelector()还接受可选的第二个阐述，它是一个命名空间解析器，就是一个接受一个命名空间前缀并返回其相关URI的函数。类似于

```
var nsresolver = function(prefix) {
    switch(prefix) {
        case "wrox": return "http://www.wrox.com/";
        //此处其他代码
    }
};
```
命名空间解析器对于在嵌入了其他语言诸如SVG或MathML的XHTML文档中执行查询非常有用，XML文档亦如此。CSS查询中的命名空间是使用一个管道来指定的。

```
var svgImage = document.querySelector("svg|svg", function(prefix) {
    switch(prefix) {
        case: "svg":
            return "http://www.w3.org/2000/svg";
            //此处其他代码
    }
});
```
在文档中查找定义为`<svg:svg>`返回了第一个SVG图像。当在查询中遇到了svg命名空间前缀时，则调用命名空间解析器函数来确定URI。

## querySelectorAll()方法

querySelectorAll()接受和querySelector()一样的两个参数，即CSS查询和可选的命名空间解析器，但是返回的是所有匹配的节点而非单个，一个叫做StaticNodeList的新类型的实例。

StaticNodeList有NodeList素有的属性和方法，是元素集合的一个快照,而非总是要重新执行的针对文档的动态查询，消除了大部分使用NodeList对象带来的性能问题。

querySelector()和querySelectorAll()一样存在于Document和Element类型上。如下是一些例子。

```
//获取<div>中的所有图像（和getElementByTagName("img")一样）
var images = document.getElementById("myDiv").querySelectorAll("img");

//获取所有包含"selected"类的元素
var selected = document.querySelectorAll(".selected");

//获取所有<p>的<strong>元素
var strongs = document.querySelectorAll("p strong");
```
返回的StaticNodeList对象可以以NodeList一样的方式迭代，使用item()或者方括号标记来检索单个元素。如下例子：

```
for (var i = 0, len = strongs.length; i < len; i++) {
    var strong = strongs[i];    //或strongs.item(i)
    strong.className = "important";
}
```
在querySelectorAll()中使用一个命名空间解析器：

```
var svgImages = document.querySelectorAll("svg|svg", function(prefix) {
    switch (prefix) {
        case: "svg":
            return "http://www.w3.org/2000/svg";
        //此处其他代码
    }
});
```



