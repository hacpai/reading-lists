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

##globalStorage对象

使用globalStorage对象首先要指定哪些域可以访问数据。

可以通过使用方括号标记属性来实现。

```
//保存数据
globalStorage["wrox.com"].name = "Nicholas";

//获取数据
var name = globalStorage["wrox.com"].name;
```

这里访问的是针对域名wrox.com存储区域。
> globalStorage对象自身并非Storage的实例，而globalStorage["wrox.com"]规格才是。

```
//保存数据
globalStorage["www.wrox.com"].name = "Nicholas";
globalStorage["www.wrox.com"].book = "Profesional JavaScript";
globalStorage["www.wrox.com"].removeItem("name");

//获取数据
var name = globalStorage["www.wrox.com"].name;
var book = globalStorage["www.wrox.com"].getItem("book");
```

对于实现不确定的域名，使用location.host作为属性名比较安全。

```
globalStorage[location.host].name = "Nicholas";
var book = globalStorage[location.host].getItem("book");
```

存储在globalStorage属性中的数据会保留在磁盘上，直到通过removeItem()或者delete删除，或者用户清除浏览器缓存。这让globalStorage在客户端存储文档或者持久化用户设定上十分理想。

## localStorage对象

不同于globalStorage, localStorage上规则已经事先设置好了。访问同一个对象，页面必须来自同一个域名，使用同一种协议，同一个端口。相当于globalStorage[location.host]

由于localStorage是Storage的实例，可以按与sessionStorage一样的方式使用它。

```
//使用方法来存储数据
localStorage.setItem("name", "Nicholas");

//使用属性来存取数据
localStorage.book = "Professional JavaScript";

//使用方法来读取数据
var name = localStorage.getItem("name");

//使用属性来读取数据
var book = localStorage.book;
```

为了兼容只支持globalStorrage的浏览器，使用以下函数

```
function getLocalStorage() {
    if (typeof localStorage == "object") {
        return localStorage;
    } else if (typeof globalStorrage == "object") {
        return globalStorrage[location.host];
    } else {
        throw new Error("Local storage not available.");
    }
}
```

然后进行初始化调用就可以确定数据存储的正确位置：

```
var storage = getLocalStorage();
```

##StorageItem类型

在Storage对象中所存储的每个项目都是StorageItem的实例。

无论合适存入新值，都会创建StorageItem对象。

该对象有两个属性：**value**,被存储的数据的值；**secure**，表示该值是否必须通过HTTPS访问的布尔值。

当通过getItem()或者点系好访问一个值的时候，实际上返回的是StorageItem实例。

```
localStorage.name = "Nicholas";
localStorage.name.secure = false;
```

##storage事件

对Storage对象进行任何修改，都会在文档上出发storage事件。

可以使用下列代码侦听storage事件：

```
EventUtil.addHandler(documentk, "storage", function(event) {
    alert("Storage changed for " + event.domain);
});
```

> 所有对sessionStorage、globalStorage和localStorage的更改都会触发storage事件，当不进行区分。

##限制

DOM的限制和浏览器紧密相关。一般来说，客户端数据的尺寸限制是按照每个域名设置的，所有每个域名都有一个固定的空间存储数据。


