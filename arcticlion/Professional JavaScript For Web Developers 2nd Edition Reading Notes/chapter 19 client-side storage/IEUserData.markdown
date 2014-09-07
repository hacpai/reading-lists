#IE用户数据

微软通过自定义行为引入了持久化用户数据的概率。

用户数据允许每个文档最多128KB数据，每个域名最多1MB数据。要使用持久化数据，需要在元素的CSS指定userData行为：

```
<div style="behavior:url(#default#userData)" id="dataStore"></div>
```
一旦元素试用userData行为，那么就可以使用setAttribute()在上面保存数据了。

为了将数据提交到浏览器缓存中，还必须调用`save()`方法告诉要保存到的数据仓库的名字，数据仓库名字完全任意，仅用于区分不同的数据集。

```
var dataStore = document.getElementById("dataStore");
dataStore.setAttribute("name", "Nicholas");
dataStore.setAttribute("book", "Professional JavaScript");
dataStore.save("BookInfo");
```

下一次页面载入之后，可以使用load()方法，指定同样的数据仓库名称来获取数据。

```
dataStore.load("BookInfo");
alert(dataStore.getAttribute("name"));    //"Nicholas"
alert(dataStore.getAttribute("book"));    //"Professional JavaScript"
```
可以通过removeAttribute()方法明确指定要删除某个元素的数据，然后再调用save()提交。

```
dataStore.removeAttribute("name");
dataStore.removeAttribute("book");
dataStore.save("BookInfo");
```

与对cookie的限制类似。要访问某个数据仓库，脚本运行的页面必须来自统一域名，并使用与存储的脚本同样的协议。

用户数据默认不过期，需要通过removeAtrribute()进行删除以释放空间。

