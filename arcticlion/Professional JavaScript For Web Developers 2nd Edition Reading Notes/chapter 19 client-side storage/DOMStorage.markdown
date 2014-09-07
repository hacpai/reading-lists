# DOM 存储机制

DOM存储的两个主要目标：

- 提供一种再cookie之外的存储回话数据的途径
- 提供一种存储大量可以跨越回话存在的数据的机制

最初的DOM存储规格包含了两种对象的定义: sessionStorage和globalStorage, 后来HTML5引入localStoragte.

## 存储类型

Storage类型用来存储最大限的名－值对。

可以调用getItem(), removeItem()和setItem()或通过操作Storage对象间接调用，比如可以通过点语法或方括号语法访问属性读取值，设置也一样，或者通过delete操作符进行删除。

## sessionStorage对象

sessionStorage对象等同于cookie，也在浏览器关闭后消失。

存储在sessionStorage中的数据只能由最初给对象存储数据的页面访问到，对多页面应用有限制。

由于sessionStorage对象其实是Storage的一个实例，所以可以使用setItem()或直接设置新的属性来存储数据。

```
//使用方法存储数据
sessionStorage.setItem("name", "Nicholas");

//使用属性存储数据
sessionStorage.book = "Professional JavaScript";
```

IE8中可以强制进行磁盘写入，在设置新数据之前使用begin()方法，并且在所有设置完成之后调用commit()方法。

```
//IE8 only
sessionStorage.begin();
sessionStorage.name = "Nicholas";
sessionStorage.book = "Professional JavaScript";
sessionStorage.commit();
```
> begin()确保这段代码执行的时候不会发生其他磁盘写入操作。commit()立刻被写入磁盘。这对于大量数据是有效的。

sessionStorage中的数据时，可以使用getItem()或者通过直接访问属性名来获取数据。两种方式的例子如下:

```
//使用方法读取数据
var name = sessionStorage.getItem("name");

//使用属性读取数据
var book = sessionStorage.book;
```

还可以结合length属性和key()方法迭代sessionStorage中的值。

```
for (var i = 0, len = sessionStorage.length; i < len; i++) {
    //获得i位置的name
    var key = sessionStorage.key(i);
    var value = sessionStorage.getItem(key);
    alert(key + "=" + value);
}
```
还可以使用for-in循环迭代sessionStorage中的值

```
for (var key in sessionStorage) {
    var value = sessionStorage.getItem(key);
    alert(key + "=" + value);
}
```

要冲sessionStorage中删除数据，可以对对象属性使用delete操作符或者调用removeItem().

```
//使用delette删除一个值——在WebKit中无效
delete sessionStorage.name;

//使用方法删除一个值
sessionStorage.removeItem("book");
```

sessionStorage对象应该主要用于仅针对回话的小段数据的存储。如果需要跨会话存储数据，那么globalStorage或者localStorage更为合适。

