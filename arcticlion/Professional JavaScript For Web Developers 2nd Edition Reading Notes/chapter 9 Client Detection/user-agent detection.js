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
     * 由于大多数浏览器与呈现引擎相关
     * 所以检测浏览器代码与检测引擎代码是混合的
     * 同时可以编写下面逻辑：
     * if (client.engine.webkit) { //if it's WebKit
     *     if (client.browser.chrome) {
     *         //执行针对Chrome的代码
     *     } else if (client.browser.safari) {
     *         //执行针对Safari的代码
     *     } 
     * }} else if (client.engine.gecko) {
     *      if (client.browser.firefox) {
     *          //执行针对Firefox的代码
     *      } else {
     *          //执行针对其他Gecko浏览器的代码
     *      }
     * }
     */
    var browser = {
        ie: 0,
        firefox: 0,
        konq: 0,
        opera: 0,
        chrome: 0,
        safari: 0,

        ver: null
    };

    /*
     * 平台
     * 浏览器对操作系统信息量有限
     * 故属性保存布尔值
     */
    var system = {
        win: false,
        mac: false,
        x11: false,

        //移动设备
        iphone: false,
        ipod: false,
        nokiaN: false,
        winMobile: false,
        macMobile: false
    };
    //将用户代理字符串保存在变量ua中
    var ua = navigator.userAgent;

    //在此检测呈现引擎
    /*
     * 检测呈现引擎Opera
     * Opera5+有window.opera对象
     * 用以保存与浏览器相关的识别信息
     * window.opera.version()返回呈现引擎版本的字符串
     * window.opera.version()返回浏览器版本的字符串
     */
    if (window.opera) {
        engine.ver = browser.ver = window.opera.version();
        engine.opera = browser.opera = parseFloat(engine.ver);
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
    } else {
        /*
         * 提取Chrome版本号："Chrome/"后面的数值
         * 提取Safari版本号："Version/"后面的数值
         * Safari3-版本号：WebKit版本号近似映射Safari版本号
         */
        if (/Chrome\/(\S+)/.test(ua) {
            browser.ver = RegExp["$1"];
            browser.chrome = parseFloat(browser.ver);
        } else if (/Version\/(\S+)/.test(ua) {
            browser.ver = RegExp["$1"];
            browser.safari = parseFloat(browser.ver);
        } else {
            //近似确定版本号
            var safariVersion = 1;
            if (engine.webkit < 100) {
                safariVersion = 1;
            } else if (engine.webkit < 312) {
                safariVersion = 1.2;
            } else if (engine.webkit <412) {
                safariVersion = 1.3;
            } else {
                safariVersion = 2;
            }

            browser.safari = browser.ver = safariVersion;
        }
    /*
     * 检测呈现引擎KHTML
     * 因为WebKit's user-Agent中包含"KHTML"
     * 排除WebKit就可以通过正则测试是否包含"KHTML"判断
     * Konqueror3.1-不包含KHTML版本
     * 故用Konqueror版本替代
     * [^;]表示不带分号所有字符
     * 由于Konqueror中版本号与下一步分风格符是分号，故用"[^;]"
     * Konqueror的browser.konq=engine.khtml
     * Konqueror的browser.ver=engine.ver
     */
    else if (/KHTML\/($S+)/.test(ua) | (/Konqueror\/([^;]+/) {
        engine.ver = browser.ver =  RegExp["$1"];
        engine.khtml = browser.konq =  parseFloat(engine.ver);
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
        
        //确定是不是Firefox
        if (/Firefox\/(\S+)/.test(ua)) {
            browser.ver = RegExp["$1"];
            browser.firefox = parseFloat(browser.ver);
        }
    }
    /* 
     * 检测呈现引擎IE
     * IE版本号在"MSIE"后";"前
     * browser对象中的值等于engine对象中的值
     */
    else if (/MSIE ([^;]+)/.test(ua)) {
        engine.ver = browser.ver = RegExp["$1"];
        engine.ie = browser.ie = parseFloat(engine.ver);
    }
    
    //检测IE和Opera
    browser.ie = engine.ie;
    browser.opera = engine.opera;

    /* 
     * 平台检测
     * 通过navigator.platform检测
     * indexof()查找开始位置 
     * "Win32"和"Win64"查找"Win"的开始位置就可以了
     */
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

    /* 
     * 检测Windows操作系统
     * "[^do]{2}"表示2个非空格字符
     * "Win(?:dows )?"表示匹配"Windows "or"Win"
     * "\d+\"匹配一个数值
     * "s?"表示是否有空格
     */
    if (system.win) {
        if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
            if (RegExp["$1"] == "NT") {
                switch(RegExp["$2"]) {
                    case "5.0":
                        system.win = "2000";
                        break;
                    case "5.1":
                        system.win = "XP";
                        break;
                    case "6.0":
                        system.win = "Vista";
                        break;
                    default:
                        system.win = "NT";
                        break;
                }
            }else if (RegExp["$1"] == "9X") {
                system.win = "ME";
            } else {
                system.win = RegExp["$1"];
            }
        }
    }
    /* 
     * 移动设备
     * iPhone,iPod,nokiaN用indexOf字符串相应的属性值
     * Windows Mobile用上面的Windows操作系统检测
     */
    system.iphone = ua.indexOf("iPhone") > -1;
    system.ipad = ua.indexOf("iPod") > -1;
    system.nokiaN = ua.indexOf("NokiaN") > -1;
    system.macMobile = (system.iphone || system.ipod);
    system.winMobile = (system.win == "CE");

    return { 
        engine: engine,
        browser: browser,
        system: system
    };
}();
