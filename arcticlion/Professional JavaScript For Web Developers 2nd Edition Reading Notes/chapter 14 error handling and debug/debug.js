/*
 * 调试技术
 *     将消息记录到控制台
 *         error(message):将错误消息记录到控制台
 *         info(message):将信息性消息记录到控制台
 *         log(message):将一般消息记录到控制台
 *         warn(message):将警告消息记录到控制台
 *     将消息记录到当前页面
 *         再页面开辟一小块区域，用以显示消息
 *         这个区域是一个元素，总是出现在页面中用于调试目的
 *     抛出错误
 *         assert():2个参数,求值结果为true的条件,条件为false时抛出的错误
 */

function sum(num1, num2) {
    log("Entering sum(), arguments are " + num1 + "," + num2);

    log("Before calculation");
    var result = num1 + num2;
    log("After calculation");
    log("Exiting sum()");
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

function log(message) {
    var console = document.getElementById("debuginfo");
    if (console === null) {
        console = document.createElement("div");
        console.id = "debuginfo";
        console.style.background = "#dedede";
        console.style.border = "1px solid silver";
        console.style.padding = "5px";
        console.style.width = "400px";
        console.style.position = "0px";
        console.style.right = "0px";
        console.style.top = "0px";
        document.body.appendChild(console);
    }
    console.innerHTML += " <p> " + message + " </p> ";
}

function divide(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        throw new Error("divide(): Both arguments must be number.");
    }
    return num1 / num2;
}

function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

function divide(num1, num2) {
    assert(typeof num1 == "number" && typeof num2 == "number", "divide(): Both arguments must be number.");
    return num1 / num2;
}

