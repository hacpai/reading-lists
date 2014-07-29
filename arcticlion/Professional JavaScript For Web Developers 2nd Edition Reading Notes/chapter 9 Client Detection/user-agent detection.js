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
    
    /*
     * 浏览器
     * safari和chrome同一WebKit，但JavaScript引擎不同
     */
    var brower = {
        ie: 0,
        firefox: 0,
        konq: 0,
        opera: 0,
        chrome: 0,
        safari: 0,

        ver: null
    }

    //将用户代理字符串保存在变量ua中
    var ua = navigator.userAgent;

    //在此检测呈现引擎
    /*
     * 检测呈现引擎Opera
     * Opera5+有window.opera对象
     * 用以保存与浏览器相关的识别信息
     * window.opera.version()返回浏览器版本的字符串
     */
    if (window.opera) {
        engine.ver = window.opera.version();
        engine.opera = parseFloat(engine.ver);
    }
    /*
     * 检测呈现引擎 WebKit
     * userAgent中"AppleWebKit"独一无二
     * 通过正则测试是否包含"AppleWebKit"
     * 使用捕获组取得版本号
     * "\S"表示非空格特殊字符
     * 由于版本号与与下一部分分隔符是空格，故用"\S"
     * test()返回布尔值
     * RegExp["$1"]存储第一个捕获组
     */
    else if (/AppleWebKit\/(\S+)/.test(ua) {
        engine.ver = RegExp["$1"];
        engine.webkit = parseFloat(engine.ver);
    }
    /*
     * 检测呈现引擎KHTML
     * 因为WebKit's user-Agent中包含"KHTML"
     * 排除WebKit就可以通过正则测试是否包含"KHTML"判断
     * Konqueror3.1-不包含KHTML版本
     * 故用Konqueror版本替代
     * [^;]表示不带分号所有字符
     * 由于Konqueror中版本号与下一步分风格符是分号，故用"[^;]"
     */
    else if (/KHTML\/($S+)/.test(ua) | (/Konqueror\/([^;]+/) {
        engine.ver = RegExp["$1"];
        engine.khtml = parseFloat(engine.ver);
    /*
     * 检测呈现引擎Gecko
     * 因为WebKit和 KHTML’s user-Agent中都包含"Gecko"
     * 排除了WebKit和KHTML就可以通过包含"Gecko"判断
     * Gecko版本号在"rv:"与一个闭括号之间
     * 还要正则匹配"Gecko/"后跟8个数字
     * 正则表达式中":"不转义
     * 空格不转义
     * "\d{8}"表示后跟8个数字
     */
    else if (/rv:([^)]+) Gecko\/\d{8}/.test(ua)) {
        engine.ver = RegExp["$1"];
        engine.gecko = parseFloat(engine.ver);
    }
    /* 
     * 检测呈现引擎IE
     * IE版本号在"MSIE"后";"前
     */
    else if (/MSIE ([^;]+)/.test(ua)) {
        engine.ver = RegExp["$1"];
        engine.ie = parseFloat(engine.ver);
    }
    //返回这些对象
    return {
        engine: engine,
        brower: brower
    };
}();
