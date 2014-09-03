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

xhr.open("get", "example.php", false);
xhr.send(null);

if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    alert(xhr.statusText);
} else {
    alert("Request was unsuccessful: " + xhr.status);
}

