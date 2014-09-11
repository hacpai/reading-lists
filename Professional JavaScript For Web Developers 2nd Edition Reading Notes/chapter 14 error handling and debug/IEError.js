/*
 * 常见的IE错误
 *     操作终止
 *     无效字符
 *         Firefox抛出illegal charcter错误
 *         Safari报告发生语法错误
 *         Opera报告发生ReferenceError
 *         IE抛出invalid charcter错误
 *     未找到成员
 *     未知运行错误
 *         innerHTML or outerHTML指定HTML时发生Unknow runtime error
 *     语法错误
 *         少了分号
 *         花括号前后不对应
 *         外部的JavaScript文件
 *             <script>src指向HTML文件
 *             报告语法错误的位置
 *                 通常脚本第一行的第一个字符处
 *                 Opera和Safari给出导致问题的外部文件信息
 *                 Firefox忽略非JavaScript的解析错误
 *     系统无法找到指定资源
 *         URL超过2083字符限制
 */

//下面示例导致操作终止错误
<html>
<head>
    <title>Operation Aborted Example</title>
</head>
<body>
    <p>The following code should cause an Operation Aborted error in IE versions prior to 8.</p>
    <div>
        <script type="text/javascript">
            document.body.innerHTML(document.createElement("div"), document.body.firstChild);
        </script>
    </div>
</body>
</html>

//单机事件处理程序执行完后，event对象被销毁，闭包中event就不存在了
document.onclick = function() {
    var event = window.event;
    setTimeout(function() {
        event.returnValue = false;    //未找到成员错误
    }, 1000);
};

//<span>不能包含<div>之类的块级元素
span.innerHTML = "<div>Hi</div>";    //块级元素插入不恰当位置

function createLongUrl(url) {
    var s = "?";
    for (var i = 0, len = 2500; i < len; i++) {
        s += "a";
    }

    return url + s;
}

var x = new XMLHttpRequest();
x.open("get", createLongUrl("http://www.somedomain.com"), true);
x.send(null);

