
//闭包：一个函数内部创建其他函数
function createFunction( ) {
    var result = new Array( );

    for (var i = 0; i < 10; i ++) {
        result[ i ] = function (num) {
            return function( ) {
                return num;
            };
        } ( i );
    }

    return result;
}

var funcs = createFunction( );

//分别输出0、1、2······9
for (var i = 0; i < funcs.length; i ++) {
    document.write(funcs[ i ] ( i ) ( ) + "
");    //注意这个调用方式，按定义顺序调用
}