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

首先将document对象存在本地的doc变量中，然后在余下的代码中替换原来的document。与原来的版本相比，现在的函数只有一次全局查找，肯定更快。

