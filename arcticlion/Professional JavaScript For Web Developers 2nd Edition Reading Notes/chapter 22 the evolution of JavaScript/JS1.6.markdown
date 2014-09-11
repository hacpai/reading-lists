# JavaScript 1.6

JavaScript1.6更改主要涉及数组和字符串处理。

## 数组扩展

Array对象引入了一些新方法，称之为数组扩展。这些方法可以分为两组：项的定位方法和迭代方法。项的定位方法包括indexOf()和lastIndexOf(). 这两个方法均接受两个参数：要查找的项目以及可选的从何处开始查找的索引。

```
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

alert(numbers.indexOf(4));    //3
alert(numbers.lastIndexOf(4))    //5

alert(numbers.indexOf(4, 4));    //5
alert(numbers.lastIndexOf(4, 4));    //3

var person = { name:"Nicholas"};
var people = [{name:"Nicholas"}];
var morePeople = [person];

alert(people.indexOf(person));    //-1
alert(morePeople.indexOf(person));    //0
```
还有五个数组的迭代方法。这些方法都接受两个参数：一个在各项目上运行的函数和一个可选的在哪里运行函数的作用域对象（影响到this的值）。该函数接受三个参数：数组项目，数组项目在数组中的位置和数组对象自身。

- every()——在数组的每个元素上运行给定函数，如果给丁函数对每个项都返回true，则返回true。

```
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var everyResult = numbers.every(function(item, index, array) {
    return (item > 2);
})

alert(everyResult);    //false
```
- some()——在数组的每个元素上运行给定函数，如果给定函数在任意一个元素上返回true，则返回true。

```
var someResult = numbers.some(function(item, index, array) {
    return (item > 2);
});

alert(someResult);    //true
```
- filter()——在数组的每个元素上运行给定函数，并返回包含令给定函数返回true的那些元素。

```

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var filterResult = numbers.filter(funciton(item, index, array) {
    return (item > 2);
});

alert(filterResult);    //[3, 4, 5, 4, 3]
```
- map()——在数组的每个元素上运行给定函数并返回每次给定函数的返回值组成的数组。

```

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var mapResult = numbers.map(function(item, index, array) {
    return item * 2;
});

alert(mapResult);    //[2, 4, 6, 8, 10, 8, 6, 4, 2]
```
- foreach()——在数组的每个元素上运行给定函数。该方法没有返回值。

```
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

numbers.forEach(function(item, index, array) {
    //进行处理
});
```

## 数组泛型和字符串泛型

泛型方法要求第一个参数是需要操作的对象，前面的代码可以重写如下：

```
var args = Array.slice(arguments);
```
甚至可以对arguments对象进行排序而不必创建数组

```
Array.sort(arguments);
```
或者添加一个新的参数

```
Array.push(arguments, "red");
```

