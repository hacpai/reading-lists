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
 *         善用try-catch
 *             最适合处理无法控制知道会发生的错误
 *     抛出错误
 *         throw:代码立即停止执行,仅当try-catch捕获到抛出错误时继续
 *         抛出错误时机
 *             
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


//抛出通用错误,自定义错误消息
throw new Error("Something bad happened");
throw new SyntaxError("I don't like your syntax.");
throw new TypeError("What type of variable do you take me for?");
throw new RangeError("Sorry, you juse don't have the range.");
throw new EvalError("That doesn't evaluate.");
throw new URIError("Uri, is that you?");
throw new ReferenceError("You didn't cite your references properly.");

//自定义Error错误类型
function CustomError(message) {
    this.name = "CustomError";
    this.message = message;
}
CustomError.prototype = new Error();

throw new CustomError("My message");


//下面函数会在参数不是数组情况下失败
function process(values) {
    if (!(values instanceof Array)) {
        throw new Error("process(): Argument must be an array.");
    }
    values.sort();

    for (var i = 0, len = values.length; i < len; i ++) {
        if (values[i] > 100) {
            return values[i];
        }
    }
    return -1;
}

