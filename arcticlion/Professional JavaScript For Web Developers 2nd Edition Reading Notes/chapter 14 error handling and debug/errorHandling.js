/*
 * 错误处理
 *     try-catch
 *         try{
 *             //可能会导致错误的代码
 *         } catch(error) {
 *             //在错误发生时怎么处理
 *         }
           finally子句
               finally一定执行
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


