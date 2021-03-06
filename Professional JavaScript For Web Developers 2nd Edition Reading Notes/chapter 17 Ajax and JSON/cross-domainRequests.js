/*
 * 跨域请求
 *     IE8引入了XDR(XDomainRequest)
 *         只能访问Access-Control-Allow-Origin头部字段设置为*的资源
 *         只能设置请求头部信息中的Content-Type字段
 *         responseText:保存响应的数据
 *         open():由于都是异步执行，省去第三个参数
 *         timeout and ontimeout事件处理
 *         为支持POST，提供contentType表示发送数据的格式
 *     跨域XHR(Firefox)
 *         服务器设置Access-Control-Allow-Origin指定哪个域可以访问该资源
 *             Access-Control-Allow-Origin: http://www.wrox.com
 *             Access-Control-Allow-Origin: *
 *         open():传入绝对的URL
 */

var xdr = new XDomainRequest();
xdr.onload = function () {
    alert(xdr.responseText);
};
xhr.onerror = function() {
    alert("An error occurred.");
};
//运行一秒后超时，并随即调用ontimeout事件处理程序
xdr.timeout = 1000;
xdr.ontimeout = function() {
    alert("Request took too long.");
};
xdr.open("get", "http://www.somewhere-else.com/page/");
xdr.send(null);
xdr.abort();    //终止请求

xdr.open("post", "http://www.somewhere-else.com/page/");
xdr.contentType = "application/x-www.from-urlencoded";
xdr.send("name1=value1 & name2 = value2");

var xhr = createXHR();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            alert(xhr.responseText);
        } else {
            alert("Request was unsuccessful: " + xhr.status);
        }
    }
};
xhr.open("get", "http://www.somewhere-else.com/page/", true);
xhr.send(null);

