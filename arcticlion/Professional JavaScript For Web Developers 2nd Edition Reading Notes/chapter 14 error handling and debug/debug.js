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

