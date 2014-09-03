/*
 * XHR对象
 *     IE7之前使用,需要检测版本
 *     IE7之后 ，使用XMLHttpRequest构造函数
 *     XHR用法
 *         open():3个参数
 *             发送的请求类型("get", "post")
 *             请求的URL
 *                 URL相对执行代码的当前页面
 *                 不会真正发送请求只是启动一个请求以备发送
 *             表示是否异步发送请求的布尔值
 *         send():发送特定的请求
 *             接受请求主体发送的数据为参数
 *         responseText:作为响应主体被返回的文本
 *         responseXML:若响应的内容类型是"text/xml"或"application/xml"，这个属性将保持着响应数据的XML DOM文档
 *         status:响应的HTTP状态
 *             状态码200:成功的标识
 *             状态码304:请求资源未被修改，可直接使用缓存版本
 *         statusText;HTTP状态的说明
 *         异步请求
 *             检测XHR的readyState
 *                 4:表示完成
 *             readyStatechange事件
 *                 DOM0级方法添加，为兼容所有浏览器
 *                 作用域问题,使用实际的XHR对象实例变量更可靠
 *             abort():取消异步请求
 *     HTTP头部信息
 *         setRequestHeader():2个参数
 *             头部字段名
 *             头部字段值 
 *             open()后send()前调用
 *             getAllResponseHeaders():取得包含所有头部信息的长字符串
 *             getResponseHeader():传入头部字段名称，取得相应的响应头部名称
 *     GET请求
 *         常用于向服务器查询某些信息
 *         open()URL末尾的查询字符串需要经过正确编码
 *             名和值对之间用&分隔
 *     POST请求
 *         常用于向服务器发送应该被保存的数据
 *         将数据作为请求的主体提交
 *         XHR模拟表单提交
 *             Content-Type = application/x-www-form-urlencoded
 *     超时设定（IE）
 *         timeout设置事件
 *         ontimeout事件处理程序：超时时调用
 *     加载事件（Firefox）
 *         引入load事件替代readystatechange事件
 *         响应接受完毕后出发load事件，因此没必要检查readyState属性
 *         只要浏览器接受到服务器的响应，不管状态如何都会出发load事件
 *         这意味着你必须要检查status属性
 *     进度事件，每次触发progress事件，新状态信息更新HTML元素内容
 *         position:表示已接受的字节数
 *         totalSize:表示根据Content-Length响应头部确定的预期字节数
 *     安全
 *         有作用的措施
     *         要求以SSL链接访问可以通过XHR请求的资源
     *         每一次请求附带验证码
 *         对防范CSRF攻击不起作用
 *             要求发送POST而不是GET请求——很容易改变
 *             检查来源URL确定是否可信——来源记录可造假
 *             基于cookie信息进行验证——同样容易伪造
 *
 */

//适用于IE7之前的版本
function createXHR() {
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "string") {
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                        "MSXML2.XMLHttp"];

            for (var i = 0, len = versions.length; i < len; i++) {
                try {
                    var xhr = new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    return xhr;
                } catch (ex) {
                //跳过
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available.");
    }

}

var xhr = createXHR();

xhr.onreadystatechange = function() {
    try {
        if (xhr,readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                alert(xhr.statusText);
            } else {
                alert("Request was unsuccessful: " + xhr.status);
            }
        }
    } catch (ex) {
        //假设由ontimeout事件处理程序处理
    }
};
//创建进度指示器
xhr.onprocess = function(event) {
    var divStatus = document.getElementById("status");
    divStatus.innerHTML = "Received" + event.position + "of" + event.totalSize + " bytes";
};
xhr.open("get", "example.php", true);
xhr.setRequestHeader("MyHeader", "MyValue");
xhr.timeout = 1000;
xhr.ontime = function() {
    alert("Request did not return in a second.");
};
xhr.send(null);

xhr.abort();

var myHeader = xhr.getResponseHeader("MyHeader");
var allHeaders = xhr.getAllResponseHeaders();

xhr.open("get", "example.php?name1=value1& name2=value2", true);

function addURLParam(url, name, value) {
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}

var url = "example.php";

//添加参数
url = addURLParam(url, "name", "Nicholas");
url = addURLParam(url, "book", "Professional JavaScript");

//初始化请求
xhr.open("get", url, false);

xhr.open("post", "example.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var form = document.getElementById("user-info");
//将ID为"user=info"的表单中的数据序列化之后发送给服务器
xhr.send(serialize(form));

xhr.onload = function(event) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        alert(xhr.responseText);
    } else {
        alert("Request was unsuccessful: " + xhr.status);
    }
};


