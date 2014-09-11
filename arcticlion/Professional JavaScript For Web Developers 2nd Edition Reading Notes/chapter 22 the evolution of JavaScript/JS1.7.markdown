# JavaScript 1.7

将`<script>`元素的type属性设置为"application/javascript;version=1.7"

## 块级和其他作用域

JavaScript1.7引入let关键词而带来了块级作用域的概念。

let定义的变量一旦执行点移出定义它的块就失效了。例如，我们常拥戴以下结构：

```
for (var i = 0; i < 10; i++) {
    //执行操作
}

alert(i);   //10
```
变量i在循环结束之后仍然可以访问。这里用了let而不是var，那么i在循环结束之后就不存在了。

```
for (let i = 0; i < 10; i++) {
    //执行操作
}

alert(i);    //错误！i未定义
```
还有其他使用let的方法。可以创建一个let语句特别定义在下一个代码块中使用的变量。

```
var num = 5;

let (num = 10, multiplier = 2) {
    alert(num * multiplier);    //20
}

alert(num);    //5
```
这段代码中，let语句定义了一个num变量为10且multiplier变量为2的区域。num的定义覆写了之前使用var进行声明的值，所以在let语句中两者相乘的结果是20；而在let语句之外，num的值仍然是5。由于每个let语句创建了它自己的作用域，内部的变量值不会影响到外部的变量值。

还可以使用类似的语法创建一个let表达式，其中变量值只针对单个表达式。如下例：

```
var result = let (num = 10, multiplier = 2) num * multiplier;
alert(result);    //20
```
这里，用了一个let表达式来使用两个变量计算一个值，然后该值被存储于result变量中。在这之后，变量num和multiplier不再存在。

## 生成器

生成器是一个可以依次产生一系列值的对象。在JavaScript1.7中，你可以通过定义一个函数使用yield操作符返回指定值来创建一个生成器。当调用使用了yield的函数，则创建并返回一个Generator实例。然后可以调用next()方法，检索生成器的第一个值。则中间会执行原来的函数一直到yield为止，并返回指定的值。其中yield的工作方式和return类似。如果再次调用了next(), 代码会继续从yield的下一个语句开始执行，然后继续运行到再次遇到yield为止，这时又返回一个新值。

```
function myNumbers() {
    for (var i = 0; i < 10; i++) {
        yield i * 2;
    }
}

var generator = myNumbers();

try{
    while(true) {
        document.write(generator.next() + "<br/>");
    }
} catch(ex) {
    //有目的留空
} finally {
    generator.close();
}
```
当调用myNumbers()函数时，返回一个生成器。myNumbers()函数本身简单，只包含一个for循环，每次循环都产生一个值。每次调用next()都会进行一次for循环，并返回下一个值。第一个值是0, 第二个为2， 第三个为4， 如此继续。当myNumbers()完成了，却没有用到yield(最后一次循环结束之后），调用next（）会抛出一个StopIteration错误。所以要输出生成器所有的数字，while循环是包裹在try-catch语句中，以防止错误，而让嗲吗继续执行。

如果不需要某个生成器，最后调用close()方法。

当需要产生一系列值，并且每个后续的值都在某种程度上和前一个值相关，那么生成器就很有用了。

## 迭代起

迭代器提供了不使用循环而达到同样目的的能力。

要为某个对象创建迭代器，使用Iterator构造函数并传入要迭代内部值的对象。使用next()方法来检索序列中的下一个值。默认情况下，这个方法会返回一个数组，第一个元素是值的下标（对于数组）或属性名称（对于对象），第二个元素是对应的值。

```
var person = {
    name: "Nicholas",
    age: 29
};
var iterator = new Iterator(person);

try {
    while(true) {
        let value = iterator.next();
        document.write(value.join(":") + "<br />");
    }
} catch(ex) {
    //有目的留空
}
```
这段代码为person对象创建一个迭代器。第一次调用next()的时候，返回数组["name", "Nicholas"],第二次调用返回["age", 29].这段代码输出如下：

```
name: Nicholas
age: 29
```

为数组创建的迭代器

```
var colors = ["red", "green", "blue"];
var iterator = new Iterator(colors);

try {
    while (true) {
        let value = iterator.next();
        document.write(value.join(":") + "< br / >");
    }
} catch(ex) {

}
```
这段代码输出如下：

```
0:red
1:green
2:blue
```
可以通过给Iterator构造函数传递第二个参数，强制next()只返回属性名或者下标。如下：

```
var iterator = new Iterator(colors, true);
```
传递了第二个参数之后，每次调用next()将只返回值的索引而非包含索引和值的数组。

## 数组领悟

数组领悟是一种用满足特定条件的一些值初始化数组的方法。JavaScript中饿数组理解的基本形式如下：

```
array = [value for each (variable in values) condition ];
```
value是包含在最终数组中的实际值。这个值基于values数组中的所有值。foreach构成了迭代values中每个值的循环，并将值存在variable里。

```
//原始数组
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//复制所有元素到数组
var duplicate = [i for each ( i in numbers)];

//只取出偶数
var evens = [i for each (i in numbers) if (i % 2 == 0)];

//每个值乘以2
var doubled = [i * 2 for each (i in numbers)];

//每个奇数乘以3
var tripledOdds = [i * 3 for each (i in numbers) if (i % 2 > 0)];
```

数组领悟的values布冯也可以是一个生成器或一个迭代器

## 解构赋值

```
var nextValue = ["color", "red"];
var name = nextValue[0];
var value = nextvalue[1];
```
解构赋值可以只用一个语句就将两个数组元素赋给变量。

```
var [name, value] = ["color", "red"];
alert(name);    //"color"
alert(value);    //"red"
```
如果不需要所有值，可以只为所需的值提供变量。

```
var [, value] = ["color", "red"];
alert(value);    //"red"
```
还可以创新的方式使用解构赋值，诸如交换两个变量的值。

```
var value1 = 5;
var value2 = 10;

var temp = value1;
value1 = value2;
value2 = temp;
```
使用解构赋值就可以消除临时变量

```
var value1 = 5;
var value2 = 10;

[value2, value1] = [value1, value2];
```
解构赋值也可以用于对象，也可以选择需要获取的值。

