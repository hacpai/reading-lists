/*  错误处理策略
 *     错误处理核心是首先要知道代码会发生什么错误
 *     常见的错误类型
 *         类型转换错误
 *         数据类型错误
 *         通信错误
 *             redir=后面的所有字符调用encodeURIComponent()
 *     致命错误和非致命错误
 *     把错误记录到服务器
 *         建立一种JavaScript错误记录系统
 *             首先在服务器创建一个页面
 *             从查询字符串取得数据
 *             再将数据写入错误日记中
 *             logError():接受2个参数
 *                 表示严重的数值或字符串
 *                 错误消息
 */

//建议使用全等和不全等操作符,避免类型转换
alert(5 == "5");      //true
alert(5 === "5");     //false
alert(1 == true);     //true
alert(1 === ture);    //false

//控制流语句是容易发生类型转换错误的一个地方
function concat(str1, str2, str3) {
    var result = str1 + str2;
    if (typeof str3 == "string") {    //绝对不要这样if (str3) {!!!
        result += str3
    }
    return result;
}

//不安全的函数,任何非字符串值都会导致错误
function getQueryString(url) {
    if (typeof url == "String") {    //通过检查类型确保安全
        var pos = url.indexOf("?");
        if (pos > -1) {
            return url.substring(pos + 1);
        }
    }
    return "";
}

//安全，非数组值都会忽略
function reverseSort(values) {
    if (values instanceof Array) {    
        values.sort();
        values.reverse();
        
    }
}

function addQueryStringArg(url, namek, value) {
    if (url.indexOf("?") == -1) {
        url += "?";
    } else {
        url += "&";
    }

    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}

var url = "http://www.somedomain.com";
var newUrl = addQueryStringArg(url, "redir", "http://www.someotherdomain.com?a=b & c=d");
alert(newUrl);

for (var i = 0, len = mods.length; i < len; i++) {
    try {
        mods[i].init();   
    } catch (ex) {
        //在这里处理错误
        logError("nonfatal", "Module init failed: " + ex.message);
    }
}

//使用Image对象发送请求非常灵活
function logError(sev, msg) {
    var img = new Image();
    img.src = "log.php?sev=" + encodeURIComponent(sev) + "&msg=" + encodeURIComponent(msg);
}

