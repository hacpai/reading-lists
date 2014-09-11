# 引用类型

对象在JavaScript中被称为引用类型的值，是某个特定引用类型的实例。

## Object类型

```
var person = new Object();
```
这行代码创建了Object引用类型的一个新实例。

Object是一个基础类型，其他所有类型都从Object继承了基本行为。

## Array类型

数组的每一项可以保存任何类型的数据，并且数据的大小可以动态调整。

### 转换方法

```
var colors = ["red", "blue", "green"];
alert(colors.toString());   //red,blue,green
alert(colors.valueOf());    //red,blue,green
alert(colors);              //red,blue,green

alert(colors.join("||"));   //red||blue||green
```

### 栈方法

```
var colors = new Array();
var conut = colors.push("red", "green");

alert(count);    //2

var item = colors.pop();
alert(item);    //"green"
alert(colors.length);    //1
```

### 队列方法

```
var colors = new Array();
var count = colors.push("red", "green");

var item = colors.shift();
alert(item);     //"red"

var count = colors.unshift("yellow");
alert(colors);   //yellow, green
```

### 重排序方法

```
var values = [1, 2, 3, 4, 5];
values.reverse();
alert(values);    //5, 4, 3, 2, 1
```

```
var values = [0, 1, 5, 10, 15];
values.sort();
alert(values);    //0, 1, 10, 15, 5
```

### 操作方法

```
var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);
alert(colors2);    //red, green, blue, yellow, black, brown

var colors3 = colors2.slice(1);
alert(colors3);    //green, blue, yellow, black, brown

var colors4 = colors2.slice(0, 2);
alert(colors4);    //red, blue

var removed = colors.splice(0, 1);    //从0位置开始删除一项
alert(colors);     //green, blue
alert(removed);    //red

removed = colors.splice(1, 0, "yellow", "orange");    //从1位置开始删除0项，插入“yellow”和“orange”
```

## Date类型

Date类型提供了有关日期和时间的信息，包括当前日期和时间以及相关的计算功能。

## RegExp类型

RegExp类型是ECMAScript支持正则表达式的一个接口。

如下语法：

```
var expression = / pattern / flags ;
```

`flags`有3个值：
- g —— global全局模式
- i —— case-insensitive不区分大小写模式
- m —— multiline多行模式

```
//匹配字符串中所有“at“实例
var pattern0 = /at/g;

//匹配第一个“bat”或“cat”，不区分大小写
var pattern1 = /[bc]at/i;

//匹配第一个"[bc]at",不区分大小写
var pattern2 = /\[bc\]at/i;

//匹配以"at"结尾的3个字符组合，不区分大小写
var pattern3 = /.at/gi;
```

