/*
 * XHR对象
 *     IE7之前使用,需要检测版本
 *     IE7之后 ，使用XMLHttpRequest构造函数
 */

//适用于IE7之前的版本
function createXHR() {
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
}

