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

