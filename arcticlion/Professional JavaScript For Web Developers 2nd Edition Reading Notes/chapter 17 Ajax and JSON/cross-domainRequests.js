/*
 * 跨域请求
 *     IE8引入了XDR(XDomainRequest)
 *         只能访问Access-Control-Allow-Origin头部字段设置为*的资源
 *         只能设置请求头部信息中的Content-Type字段
 *         responseText:保存响应的数据
 */

var xdr = new XDomainRequest();
xdr.onload = function () {
    alert(xdr.responseText);
};
xdr.open("get", "http://www.somewhere-else.com/page/");
xdr.send(null);

