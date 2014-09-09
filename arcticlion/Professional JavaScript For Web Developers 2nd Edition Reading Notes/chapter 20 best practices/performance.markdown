# 性能

## 注意作用域

因为需要遍历作用域，访问全局变量总是比访问局部变量慢。只要能减少花费在作用域的时间，就能增加脚本的整体性能。

###避免全局查找

请看以下函数

```
function updateUI() {
    var imgs = document.getElementsByTagName("img");
    for (var i = 0, len = imgs.length; i < len; i ++) {
        imgs[i].title = document.title + " image " + i;
    }
    var msg = document.getElementById("msg");
    msg.innerHTML = "Update complete.";
}
```

该函数包含了三个对于全局document对象的引用。如果在页面上有多个图片，那么for循环仲的document引用就被执行多次甚至上百次，每次都要进行作用域链查找。通过创建一个指向document对象的局部变量，就可以通过限制一次全局来改进这个函数的性能：
```
function updateUI() {
    var doc = document;
    var imgs = doc.getElementByTagName("img");
    for (var i = 0, len = imgs.length; i < len; i++) {
        imgs[i].title = doc.title + " image " + i;
    }

    var msg = doc.getElementById("msg");
    msg.innerHTML = "Update complete.";
}
```

首先将document对象存在本地的doc变量中，然后在余下的代码中替换原来的document。与原来的版本相比，现在的函数只有一次全局查找，肯定更快。

### 避免with语句

在性能上非常重要的地方必须避免使用with语句。和函数类似，with语句会创建自己的作用域，因此会增加其中执行代码的作用域链的长度。

```
function updateBody() {
    with(doucment.body) {
        alert(tagName);
        innerHTML = "Hello world!";
    }
}
```
在大多数情况下，可以用局部变量完成相同的事情而不引入新的作用域。

```
function updatebody() {
    var body = document.body;
    alert(body.tagName);
    body.innerHTML = "Hello world!";
}
```

## 选择正确方法

和其他编程语言一样，心呢个问题的一部分是和用于解决问题的算法或者方法有关。

### 避免不必要的属性查找

获取常量值是非常高效的，算法复杂度是O(1).

```
var value = 5;
var sum = 10 + value;
alert(sum);
```
该代码进行了四次常量值的查找：数字5，变量value，数字10和变量sum。这段代码的整体复杂度被认为是O(1).

在JavaScript中访问数组元素也是一个O(1)操作，和简单的变量查找效率一样。

```
var values = [5, 10];
var sum = values[0] + values[1];
alert(sum);
```
使用数组比访问对象上的属性更有效率，后者是一个O(n)操作。对象上的任何一个操作因为需要在原型链中对拥有该名称的属性进行一次搜索，所以要比访问变量或者数组花费的时间长。

```
var values = { first: 5, second: 10 };
var sum = values.first + values.second;
alert(sum);
```
注意获取单个值的多重属性查找。例如以下代码。

```
var query = window.location.href.substring(window.location.href.indexOf("?"));
```
这段代码，有6次属性查找，数一数代码中的点的数量就可以确定属性查找的次数了。

这段代码两次用到了window.location.href，故可以重写为：

```
var url = window.location.href;
var query = url.substring(url.indexof("?"));
```
这次只有4次属性查找，相对于原版节省了33%。

> 一般来讲，自傲能减少算法的复杂度就要尽可能减少。尽可能多地使用局部变量将属性查找替代为值查找。进一步讲，如果即可以用数字化的数组位置进行访问，也可以使用命名属性（诸如NodeList对象），那么使用数字位置。

### 优化循环
其他语言对于循环优化有大量研究也可以应用于JavaScript。一个循环的基本优化步骤如下所示。

1. 减值迭代——从最大值开始，在循环中不断减值的迭代器更加高效。
2. 简化终止条件——由于每次循环都会计算终止条件，所以确保其被最大限度地优化。
3. 简化循环体——尽量将密集计算移出循环体。
4. 使用do-while——可以避免最初终止条件的计算。

用一个例子描述这种改动。以下是一个基本的for循环。

```
for (var i = 0; i < values.length; i++) {
    process(values[i]);
}
```
假设值的处理顺序无关紧要，那么循环可以改称i减值。如下：

```
for (var i = values.length - 1; i >= 0; i--) {
    process(values[i]);
}
```
循环改称do-while

```
var i = values.length - 1;
do {
    process(values[i--]);
} while (i >= 0);
```

### 展开循环

当循环次数确定时，消除循环并使用多次函数调用往往更快。请看下面的例子。

```
//消除循环
process(values[0]);
process(values[1]);
process(values[2]);
```
如果循环中的迭代次数不能事先确定，那可以老吕使用一种叫做Duff装置的技术。Duff装置的基本概念是通过计算迭代的次数是否为8的倍数将一个循环展开为一系列语句。请看以下代码。

```
var iterations = Math.floor(values.length / 8);
var startAt = values.length % 8;
var i = 0;

do {
    switch(startAt) {
        case 0: process(values[i++]);
        case 7: process(values[i++]);
        case 6: process(values[i++]);
        case 5: process(values[i++]);
        case 4: process(values[i++]);
        case 3: process(values[i++]);
        case 2: process(values[i++]);
        case 1: process(values[i++]);
    }
    startAt = 0;
} while (--iterations > 0)
```
Diff装置的实现是通过将values数组中元素的个数除以8来计算出循环需要进行多少次迭代的。然后使用取整的下限函数确保结构是整数。将不能整除的数量保存在startAt变量中。用switch第一次处理额外调用。在接下来的循环中，startAt被重置为0，这样之后的每次循环8次调用。展开循环可以提升大数据集的处理速度。

还有一种更快的Duff装置技术，将do-while循环分成2个单独的循环。以下是例子。

```
var iterations = Math.floor(values.length / 8);
var leftover = values.length % 8;
var i = 0;

if (leftover > 0) {
    do {
        process(values[i++]);
    } while (--leftover > 0);
}
do {
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
} while (--iterations > 0);
```
在这个实现中，剩余的计算部分不会在实际循环中处理，而是在一个初始化循环中进行除以8的操作。当处理掉额外的元素，继续执行每次调用8次process()的主循环。这个方法比上一个版本快上40%

## 最小化语句数

找出可以组合在一起的语句，以减少脚本整体的执行时间。这里有多个可以参考的模式。

### 多个变量声明

```
var count = 5;
var color = "blue";
var values = [1, 2, 3];
var now = new Date();
```
可以使用单个语句声明。前面的代码可以如下重写。

```
//一个语句
var count = 5,
    color = "blue",
    values = [1, 2, 3];
    now = new Date();
```

### 插入迭代值
当使用迭代值（也是就不同的位置进行增加或减少的值）的时候，尽可能合并语句。请看以下代码。

```
var name = values[i];
i ++;
```
这两句可以通过迭代值插入第一个语句组合成一个语句，如下所示。

```
var name = values[i++];
```
### 使用数组和对象字面量
 
创建数组和对象的两种方法：使用构造函数或者使用字面量

```
//用4个语句创建和初始化数组——浪费
var values = new Array();
values[0] = 123;
values[1] = 456;
values[2] = 789;

//用4个语句创建和初始化对象——浪费
var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.sayName = function() {
    alert(this.name);
};
```
很容易地转换成使用字面量的形式，如下：

```
//只用一条语句创建和初始化数组
var values = [123, 456, 789];

//只用一条语句创建和初始化对象
var person = {
    name: "Nicholas",
    age: 29,
    sayName: funciton() {
        alert(this.name);
    }
};
```
重写后的代码只用了两条语句，减少了75%的语句量。


