# 松散耦合

## 解耦HTML/JavaScirpt

在Web上，HTML和JavaScript各自代表了解决方案中的不同层次：HTML是数据，JavaScript是行为。由于它们天生交互，常常过于紧密地耦合在一起。

- 直接写在HTML中的JavaScript，使用包含內联代码的<script>元素或是使用HTML属性来分配事件处理程序。

    <!-- 使用了<script>的紧密耦合的HTML/JavaScript -->
    <script type="text/javascript">
        document.write("Hello world!");
    </script>

    <!-- 使用时间处理程序属性值的紧密耦合的HTML/JavaScript -->
    <input type="button" value="Click Me" onclick="doSomething()" />

- JavaScript包含了HTML。这通常出现在innerHTML插入一段HTML文本到页面上这种情况时。

```
function insertMessage(msg) {
    var container = document.getElementById("container");
    container.innerHTML = "<div class="\"msg\"><p class=\"post\">" + msg + "</p>" + "<p><em>Latest message above.</em></p></div>"; 
}
```

HTML呈现应该尽可能与JavaScript保持分离。当JavaScript用于插入数据时，尽量不要直接插入标记语言。一般可以在页面中直接包含并隐藏标记语言，然后等到整个页面渲染好之后，就可以用JavaScript显示该标记，而非生成它。

另一种方法是进行Ajax请求并获取更多要显示的HTML。这话方法可以让同样的渲染层（PHP、JSP、Ruby等等）来输出标记，而不是直接嵌在JavaScript中。



