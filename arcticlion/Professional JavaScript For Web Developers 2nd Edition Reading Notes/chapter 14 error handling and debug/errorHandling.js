/*
 * 错误处理
 *     try-catch
 *         try{
 *             //可能会导致错误的代码
 *         } catch(error) {
 *             //在错误发生时怎么处理
 *         }
 *         finally子句
 *             finally一定执行
 *         错误类型
 *             Error:浏览器抛出和开发人员自定义错误
 *             EvalError:eval使用方式与定义不相符
 *             RangeError:数值不在相应的范围时触发
 *             ReferenceError:访问不存在的变量时触发
 *             SyntaxError:错误语法传入eval()
 *             TypeError:变量保存意外类型或访问不存在方法
 *             URIError:URL格式不正确时
 *             利用不同的错误类型,可以获悉更多异常信息，有助于对错误做出恰当处理
 */

try {
    window.someNonexistentFunction();    //调用不存在的函数
} catch (error) {
    alert("An error happened!");
    alert(error.message);
}

//返回0
function testFinally() {
    try {
        return 2;
    } catch (error) {
        return 1;
    } finally {
        return 0;
    }
}

var item1 = new Array(-20);    //抛出RangeError
var item2 = new Array(Number.MAX_VALUE);    //抛出RangeError

var obj = x;     //在x并未声明的情况下抛出ReferenceError

eval("a ++ n");    //抛出SyntaxError

var o = new 10;    //抛出TyptError
alert("name" in true);    //抛出TypeError
Function.prototype.toString(.call("name");    //抛出TypeError

//知道各种错误类型
try {
    someFunction();
} catch (error) {
    if (error instanceof TyptError) {
        //处理类型错误
    } else if (error instanceof ReferenceError) {
        //处理引用错误
    } else {
        //处理其他类型的错误
    }
}

