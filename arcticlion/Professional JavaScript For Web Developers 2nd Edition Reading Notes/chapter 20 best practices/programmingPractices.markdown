#编程实践

书写可维护的JavaScript并不仅仅是关于如何格式化代码，它还关系到代码做什么问题。

## 尊重对象所有权

你不能修改不属于你的对象。JavaScript的动态性质使得几乎任何东西在任何时间都可以修改。如果你不负责维护某个对象，它的对象或者它的方法，那么你就不能对它们进行修改。更具体所：

- 不要为实例或原型添加属性
- 不要为实例或原型添加方法
- 不要重定义已存在的方法

依然可以通过以下方式为对象创建新的功能：

- 创建包含所需功能的新对象，并用它与相关对象进行交互。
- 创建自定义类型，继承需要进行修改的类型。然后可以为自定义类型添加额外功能。

## 避免全局量

尽可能避免全局变量和函数，这也关系到创建一个脚本执行的一致的和可维护的环境。最多创建一个全局变量，让其他对象和函数存在其中。请看以下例子：

```
//两个全局变量——避免
var name = "Nicholas";
function sayName() {
    alert(name);
}
```
这段代码包含了两个全局量：变量name和函数sayName()。其实可以创建一个包含两者的对象。

```
//一个全局量——推荐
var MyApplocation = {
    name: "Nicholas",
    sayName: function() {
        alert(this.name);
    }
};
```
这段重写的代码引入了一个单一的全局变量MyApplication，name和sayName()都附加到其上。

这样做消除了一些存在于前一段代码中的一些问题。

首先，变量name覆盖window.name属性，可能会与其他功能产生冲突；

其次，它有助于消除功能作用域的混淆。调用MyApplocation.sayName()在逻辑上暗示代码的任何问题都可以通过检查定义的MyApplocation()代码来确定。

单一的全局量的延伸便是命名空间的概念。命名空间包括创建一个用于放置功能的对象。

YUI库有若干追加功能的命名空间。比如：
- YAHOO.util.Dom——处理DOM的方法
- YAHOO.util.Event——与事件交互的方法
- YAHOO.lang——用于底层语言特性的方法

对于YUI，单一的全局对象YAHOO作为一个容器，其中定义了其他对象，用这种方式将功能组合在一起的对象，叫做命名空间。

## 避免与null进行比较

开发人员需要自己进行类型检查。

不充分的类型检查导致错误.

```
function sortArray(values) {
    if (values != null) {    //避免！
        values.sort(comparator);
    }
}
```

values阐述应该是一个数组，应该检查它是不是一个数组而不是检查是否非null。函数按照下面的方式修改会更加合适。

```
function sortArray(values) {
    if (values instanceof Array) {    //推荐
        values.sort(comparator);
    }
}
```

如果看到了与null比较的代码，尝试使用以下技术替换：

- 如果值应为一个引用类型，使用instanceof操作符检查其构造函数
- 如果值应为一个基本类型，使用typeof检查其类型
- 如果是希望对象包含某个特定的方法名，则使用typeof操作符确保指定名字的方法存在于对象上。

> 代码中的null比较越少，就越容易确定代码的母的，并消除不必要的错误。

## 使用常量

尽管JavaScript没有常量的正式概念，但它还是很有用的。这种将数据从应用逻辑分离出来的思想，可以在不冒引入错误的风险的同时，就改变数据。请看以下例子：

```
function validate(value) {
    if (!value) {
        alert("Invalid value!");
        location.href = "/error/invalid.php";
    }
}
```

这个函数中有两端数据：要显示给用户的信息以及URL。

显示在用户界面上的字符串和URL应该抽取出来，以便于在修改这些数据时就不需要找到函数并修改其中的代码了。

可以通过将数据抽取出来变成单独定义的常量的方式，将应用逻辑与数据修改隔离开来。

```
var Constants = {
    INVALID_VALUE_MSG: "Invalid value!",
    INVALID_VALUE_URL: "/errors/invalid.php"
};

function validate(value) {
    if (!value) {
        alert(Constants.INVALID_VALUE_MSG);
        location.href = Constants.INVALID_VALUE_URL;
    }
}
```
关键在于将数据和使用它的逻辑进行分离。要注意的值的类型如下所示：
- 重复值——任何在多处用到的值都应该抽取为一个常量。这也包含CSS类名。
- 用户界面字符串——任何用于显示给用户的字符串，都应该被抽取出来以方便管理.
- URLs——在Web应用中，资源位置很容易变更，所以推荐用一个公共地方存放所有的URL
- 任意可能会改变的值——每当你在用到字面量值的时候，都要问一下自己这个值在未来是不是会发生变化。如果答案是”是“，那么这个值就应该被提取出来作为一个常量。

