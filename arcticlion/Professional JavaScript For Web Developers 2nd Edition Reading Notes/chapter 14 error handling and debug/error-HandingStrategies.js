/*
 * 错误处理策略
 *     错误处理核心是首先要知道代码会发生什么错误
 *     常见的错误类型
 *         类型转换错误
 *         数据类型错误
 *         通信错误
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

