/*
 * **递归
 * **应使用arguments.callee调用自身
 * **不使用函数名
 * **因为函数名可能会发生变化
 * */
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num -1);
    }
}

var anotherFactorial = factorial;
factorial = null;
alert(anotherFactorial(4));    //24
