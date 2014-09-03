/*
 * 跨域请求
 *     IE8引入了XDR(XDomainRequest)
 *         只能访问Access-Control-Allow-Origin头部字段设置为*的资源
 *         只能设置请求头部信息中的Content-Type字段
 *         responseText:保存响应的数据
 *         open():由于都是异步执行，省去第三个参数
 *         timeout and ontimeout事件处理
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

