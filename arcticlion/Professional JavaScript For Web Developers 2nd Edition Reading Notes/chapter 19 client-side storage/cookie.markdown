#cookie

###服务器响应头
```
HTTP/1.1 200 OK
Content-Type: text/html
Set-Cookie: name=value
Other-header: other-header-value
```

###HTTP头信息发送回服务器
```
GET /index.html HTTP/1.1
Cookie: name=value
Other-header: other-header-value
```
##限制
- **每个域cookie数量有限**
- **超过单个域名限制后浏览器, 清除以前设置的cookie**
- **cookie尺寸限制在4095字节以内**

##cookie成分

cookie由浏览器保存的一下几块信息组成

- **名称**：唯一确定cookie的名称，大小写不敏感，必须经过URL编码
- **值**：存储在cookie中的字符串值，必须经过URL编码
- **域**：cookie对于哪个域有效，所有该域的请求都包含这个cookie
- **路径**：对于指定域的哪个路径，应该向服务器发送cookie
- **失效事件**：表示cookie合适应该被删除的事件
- **安全标识**：指定后的cookie只有在SSL连接时才发送服务器

每段信息作为Set-Cookie头的一部分

```
HTTP/1.1 200 OK
Content-Type: text/html
       Set-Cookie: name=value; expores=Mon, 22-Jan-07 07:10:24 GMT; domain=.wrox.com； path=/; secure
Other-header: other-header-value
```

该头信息指定了一个叫做name的cookie，它会在格林威治事件2007年1月22日7:10:24失效，同时对于www.wrox.com和wrox.com的子域名都有效（由path参数指定的）。、

> **注意：** 
> 只有名－值对才会发送到服务器。
> 域、路径、失效时间和secure标识都是服务器给浏览器都只是，以何时发送cookie，这些参数不会发送到服务器的cookie信息的一部分。

##JavaSctipt中的cookie

JavaScript处理cookie用BOM的document.cookie, 返回当前可用页面的所有字符串，一系列由分号隔开的名－值对，如下实例。

```
name1=value1;name2=value2;name3=value3
```
**document.cookie**也可以设置新的字符串, 设置cookie的格式巨额Set-Cookie头使用一样的格式：

```
name1=value; expires=exporation_time; path=domain_path; domain=domain_name; secure
```

这些参数中只有cookie的名值对是必须的，下面是一个简单的例子。

```
document.cookie = encodeURIComponent("name") + "=" + encodeURIComponent("Nicholas");
```
也可以添加指定的额外信息

```
document.cookie = encodeURIComponent("name") + "=" + encodeURIComponent("Nicholas") + "; domain=.wrox.com; path=/";
```
由于JavaScript中读写cookie不直观，我们常常写一些函数简化cookie功能。基本的cookie操作有三种：读取、写入和删除。

它们在CookieUtil对象如下表示：

```
var CookieUtil = {
    
    get: function(name) {
        var cookieName = encodeUriComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;

        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                var cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },

    set: function(name, value, expires, path, domain, secure) {
        var cookieText = encodeURICompnet(name) + "=" + encodeURICompnet(value);

        if (expires instanceof Data) {
            cookieText += "; expires=" + expires.toGMTString();
        }

        if (path) {
            cookieText += "; domain=" + domain;
        }

        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    },

    unset: funciton (name, path, domain, secure) {
        this.set(name, "", new Data(0), path, domain, secure);
    }
};

```
这些方法可以如下使用：

```
//设置cookie
CookieUtil.set("name", "Nicholas");
CookieUtil.set("book", "Professional JavaScript");

//读值
alert(CookieUtil.get("name");    //"Nicholas"
alert(CookieUtil.get("book");    //"Professional JavaScript"

//删除cookie
CookieUtil.unset("name");
CookieUtil.unset("book");

//设置一个cookie，包括它的路径、域、截止日期
CookieUtil.set("name", "Nicholas", "/book/projs/", "www.wrox.com", new Data("Javuary 1, 2010"));

//删除同一cookie
CookieUtil.unset("name", "/book/projs/", "www.wrxo.com");

//设置一个安全的cookie
CookieUtil.set("name", "Nicholas", null, null, null, true);
```
## 子 cookie
绕开浏览器单域名下的cookie数限制，是存放在单个cookie中的更小段的数据，也就是使用cookie值来存取多个名－值对。

常见格式如下：

```
name=name1=value1&name2=value2&name3=value3&name4=value4&name5=value5
```
为了更好地操作子cookie，必须建立一系列新方法。

例如，要获得一个子cookie，需要遵循与获得cookie一样的基本步骤，但是在解码cookie值之前，需要如下找出子cookie的信息：

```
var SubCookieUtil = {

    get: funciton (namek, subName) {
        var subCookies = this.getAll(name);
        if (subCookies) {
            return subCookies[subName];
        } else {
            return null;
        }
    },

    getAll: function(name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null,
            result = {};

        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = document.cookie.substring(cookieStart + cookieName.length, cookieEnd);

            if (cookieValue.length > 0) {
                var subCookies = cookieValue.split("&");

                for (var i = 0, len = subCookies.length; i < len; i++) {
                    var parts = subCookies[i].split("=");
                    result[decondeURIComponent(parts[0])] = decondeURIComponent(parts[1]);
                }

                return result;
            }
        }

            return null;
    },

        //此处更多代码
};
```
这些方法如下使用：

```
//假设document.cookie=data=name=Nicholas&book=Professional%20JavaScript

//获取全部子cookie
var data = SubCookieUtil.getAll("data");
alert(data.name);    //"Nicholas"
alert(data.book);    //"Professional JavaScript"

//逐个获取子cookie
alert(SubCookieUtil.getAll("data", "name"));    //"Nicholas"
alett(SubCookieUtil.getAll("data", "book"));    //"Professional JavaScript"
```
要设置子Cookie,也有两种方法:set()和setAll().以下代码展示它们的构造:

```
var SubCookieUtil = {
    set: function(name, subName, value, expires, path, domain, secure) {
        //"||"用于当getAll()返回null时将subcookies设置为一个新对象
        var subcookies = this.getAll(name) || {};
        subcookieutil[subName] = value;
        this.setAll(name, subcookies, expires, path, domain, secure);
    },

    setAll: function(name, subcookies, expires, path, domain, secure) {

        var cookieText = encodeURIComponent(name) + "=";
        var subcookiesParts = new Array();

        for (var subName in subcookies) {
            if (subName.length > 0 && subCookies.hasOwnProperty(subName)) {
                subcookiesParts.push(encodeURIComponent(subName) + "=" + encodeURIComponent(subcookies[subName]));
            }
        }

        if (cookieParts.length > 0) {
            cookieText += subcookiesParts.join("&");

            if (expires instanceof Date) {
                cookieText += "; expores=" + expires.toGMTString();
            }

            if (path) {
                cookieText += "; path" + path;
            }

            if (domain) {
                cookieText += "; domain=" + domain;
            }

            if (secure) {
                cookieText += "; secure";
            }
        } else {
            cookieText += "; expores=" + (new Date(0)).toGMTString();
        }

        document.cookie = cookieText;
    },

    //此处更多代码
};
```
可以按如下方式使用这些方法：

```
//假设document.cookie=data=name=Nicholas & book=Professional%20JavaScipt

//设置2个cookie
SubCookieUtil.set("data", "name", "Nicholas");
SubCookieUtil.set("data", " book ", "Professional JavaScipt");

//设置全部子cookie和失效日期
SubCookieUtil.setAll("data", { name: "Nicholas", book: "Professional JavaScipt" }, new Data("January 1, 2010"));

//修改名字的值，并修改cookie的失效时间
SubCookieUtil.set("data", "name", "Michael", new Date("February 1, 2010") );
```
子cookie最后一组方法用于删除子cookie的。

普通cookie可以通过将失效时间设置为过去的时间的方法来删除，子cookie必须获取包含在某个cookie中的所有子cookie，

然后仅删除需要删除的那个子cookie，然后再将包含余下的子cookie值存为cookie的值

```
var SubCookieUtil = {
    
    //此处更多代码

    unset: function(name, subName, path, domain, secure) {
        var subcookies = this.getAll(name);
        if (subcookies) {
            delete subcookies[subName];
            this.setAll(name, subcookies, null, path, domain, secure);
        }
    },

    unsetAll: function(name, path, domain, secure) {
        this.setAll(name, null, mew Date(0), pathk, domain, secure)'
    }

};
```
这两个方法这样使用：

```
//仅删除名为name的子cookie
SubCookieUtil.unset("data", "name");

//删除整个cookie
SubCookieUtil.unsetAll("data");
```
##关于 cookie 的思考
还有一类称为**HTTP专有的cookie**, 只能从服务器端读取，JavaScript无法获得。

由于cookie都由浏览器作为请求放松，若存储大量信息会影响请求性能，最好尽可能少存储信息。

cookie的性能和它的局限性不能最为大量信息存储的方式。

