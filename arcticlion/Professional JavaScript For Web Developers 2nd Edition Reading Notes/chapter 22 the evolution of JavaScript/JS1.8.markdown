# JavaScript 1.8

和JavaScript1.7一样必须，通过将`<script>`元素的type特性设置为"application/javascript;version=1.8"的方式明确指定使用JavaScript1.8。

## 表达式闭包

JavaScript1.8引入了一种叫做表达式闭包的定义函数的简短方式。表达式闭包简化了直接根据一个或多个参数返回值的函数的创建过程。

```
function(num) {
    return num + 5;
}
```
这个函数可以使用表达式闭包重写：

```
function (num) num + 5;
```
表达式闭包去掉了花括号和return语句，节省了空间，让函数能够写成遗憾。你也可以使用表达式闭包创建命名函数。

```
function addFive (num) num + 5;
alert(addFive(5));    //10
```

## 生成器表达式

JavaScript1.8另一个扩展是引入了生成器表达式，无须定义使用yield的函数即可创建一个生成器。生成器表达式和数组理解看起来差不多，都是根据一系列值描述另一些列值。语法如下：

```
generator = (value for (variable in values ) condition);
```
在JavaScript1.7可以用以下代码创建生成器：

```
function myNumber() {
    for (var i = 0; i < 10; i++) {
        yield i * 2;
    }
}

var generator = myNumber();
```
而使用生成器表达式，可以最小化完成同样目的的代码量：

```
var generator = (i * 2 for (i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
```
另外可以和数组理解一样添加条件，如下:

```
//只有每个偶数
var generator = (i * 2 for (i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) if (i % 2 == 0));
```

## 数组归并

JavaScript1.8 还为数组引入了两个新方法：reduce()和reduceRight()。两个方法都迭代数组种的所有元素，并构造一个最终返回的值。reduce()方法从第一个元素开始，遍历到最后一个元素，而reduceRight()则从最后一个元素开始，遍历到第一个。两个方法都接受一个参数，即每次迭代进行调用的一个函数。这个函数接受四个参数：上一个值，当前值，当前元素的下标和数组对象。

```
var values = [1, 2, 3, 4, 5];
var sum = values.reduce(function(prev, cur, index, array) {
    return prev + cur;
});
alert(sum);    //15
```
第一次调用回调函数的时候，prev为1，cur为2。第二次，prev为3（1＋2的结果），cur为3（数组中的第三个元素）。

reduceRight()方法工作方式类似。
```
var values = [1, 2, 3, 4, 5];
var sum = values.reduceRight(function(prev, cur, index, array) {
    return prev + cur;
});

