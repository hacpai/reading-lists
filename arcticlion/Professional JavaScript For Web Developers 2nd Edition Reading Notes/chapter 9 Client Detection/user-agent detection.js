//编写思路：检测最低限度
if (isVer >= 6) {
    //代码
}

/* 
 * 为了不在全局作用域中添加多余变量
 * 模块增强的方式封装检测脚本
 */
var client = function() {
    
    /*
     * 呈现引擎
     * 支持这样编写的代码
     * if (client.engine.ie) {
     *         //针对IE的代码
     *     } else if (client.engine.gecko > 1.5) {
     *         if (clent.engine.ver == "1.8.1") {
     *             //针对这个版本执行操作
     *         }
     */
    var engine = {
        ie: 0,
        gecko: 0,
        webkit: 0,
        khtml: 0,
        opera: 0,

        //具体版本号
        ver: null
    };

    //在此检测呈现引擎
    
    //返回这些对象
    return {
        engine: engine
    };
}();
