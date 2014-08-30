/*
 * 调试技术
 *     将消息记录到控制台
 *         error(message):将错误消息记录到控制台
 *         info(message):将信息性消息记录到控制台
 *         log(message):将一般消息记录到控制台
 *         warn(message):将警告消息记录到控制台
 */

function sum(num1, num2) {
    console.log("Entering sum(), arguments are " + num1 + "," + num2);

    console.log("Before calculation");
    var result = num1 + num2;
    console.log("After calculation");
    console.log("Exiting sum()");
    return result;
}

//Opera用opera.postError()访问
function sum(num1, num2) {
    opera.postError("Entering sum(), arguments are " + num1 + "," + num2);
    
    opera.postError("Before calculation");
    var result = num1 + num2;
    opera.postError("After calculation");

    opera.postError("Exiting sum()");
    return result;
}

//JavaScript把消息写到Java控制台
java.lang.System.out.printIn("Your message");

function sum(num1, num2) {
    java.lang.System.out.printIn("Entering sum(), arguments are " + num1 + "," + num2);
    java.lang.System.out.printIn("Before calculation");
    var result = num1 + num2;
    java.lang.System.out.printIn("After calculation");
    java.lang.System.out.printIn("Exiting sum()");
    return result;
}

//统一的接口
function log(message) {
    if (typeof console == "object") {
        console.log(message);
    } else if (typeof opera == "object") {
        opera.postError(message);
    } else if (typeof java == "object" && typeof java.lang == "object") {
        java.lang.System.out.printIn(message);
    }
}

