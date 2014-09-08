# 松散耦合

## 解耦HTML/JavaScirpt

在Web上，HTML和JavaScript各自代表了解决方案中的不同层次：HTML是数据，JavaScript是行为。由于它们天生交互，常常过于紧密地耦合在一起。

- 直接写在HTML中的JavaScript，使用包含內联代码的`<script>`元素或是使用HTML属性来分配事件处理程序。

```
<!-- 使用了<script>的紧密耦合的HTML/JavaScript -->
<script type="text/javascript">
    document.write("Hello world!");
</script>

<!-- 使用时间处理程序属性值的紧密耦合的HTML/JavaScript -->
<input type="button" value="Click Me" onclick="doSomething()" />
```

- JavaScript包含了HTML。这通常出现在innerHTML插入一段HTML文本到页面上这种情况时。

```
function insertMessage(msg) {
    var container = document.getElementById("container");
    container.innerHTML = "<div class="\"msg\"><p class=\"post\">" + msg + "</p>" + "<p><em>Latest message above.</em></p></div>"; 
}
```

HTML呈现应该尽可能与JavaScript保持分离。当JavaScript用于插入数据时，尽量不要直接插入标记语言。一般可以在页面中直接包含并隐藏标记语言，然后等到整个页面渲染好之后，就可以用JavaScript显示该标记，而非生成它。

另一种方法是进行Ajax请求并获取更多要显示的HTML。这话方法可以让同样的渲染层（PHP、JSP、Ruby等等）来输出标记，而不是直接嵌在JavaScript中。

## 解耦CSS/JavaScript

另一个Web层是CSS，它主要负责页面的显示。

最常见的紧密耦合的例子是使用JavaScript来更改某些样式。

```
//CSS对JavaScript的紧密耦合
element.style.color = "red";
element.style.backgroundColor = "blue";
```
> 这段代码JavaScript也在某种程度上负责页面的显示，并与CSS紧密耦合。

现在web应用也常常使用JavaScript来更改样式。虽然不能完全将CSS和JavaScript解耦，但是可以让耦合更松散。就是通过动态样式类而非特定样式来实现的，如下面例子。

```
//CSS对JavaScript的松散耦合
element.className = "edit";
```
> 通过只修改某个元素的CSS类，就可以让大部分样式信息严格保留在CSS中。JavaScript可以更改样式类，但并不会直接影响到元素的样式。只要应用了正确的类，那么任何显示问题否可以直接追溯到CSS而非JavaScript。

第二类紧密耦合仅在IE中出现（IE8不会出现），它可以在CSS中通过表达式嵌入JavaScript。

```
/* JavaScript 对 CSS 的紧密耦合 */
div {
    width: expression(document.body.offsetWidth - 10 + "px");
}
```
> 通常避免使用`expression`，因为它们不能跨浏览器兼容，还让CSS和JavaScript紧密耦合。

> **再次提醒**,好的层次划分非常重要。显示问题的唯一来源应该是CSS，行为问题的唯一来源应该是JavaScript。在这些层次之间保持松散耦合可以让你的整个应用更加易于维护。

