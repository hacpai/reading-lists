//This is HTML
<html>
    <head>
        <title>Sample Page</title>
    </head>
    <body>
        <p>Hello World!</p>    
    </body>
</html>
//这是上面Html代码的层次节点
+------------------+
|Document          |
+-----+------------+
      |    +-----------------+
      +++++|Element html     |
           +----+------------+
                |    +---------------+
                |++++|Element head   |
                |    +--+------------+
                |       |    +----------------+
                |       +++++|Element title   |
                |            +----+-----------+
                |                 |       +-----------------+
                |                 ++++++++|Text Sample Page |
                |                         +-----------------+
                |    +---------------+
                +++++|Element body   |
                     +--+------------+
                        |    +----------------+
                        +++++|Element P       |
                             +-----+----------+
                                   |      +-----------------+
                                   +++++++|Text Hello World!|
                                          +-----------------+
                                          
/* 
 * 确定节点类型
 * 适用于所有浏览器
 * 取得并保存元素标签名
 */
if (someNode.nodeType == 1) {
    alert("Node is an element.";)
    value = someNode.nodeName;
}

/* 
 * NodeList转换为数组
 * 首先尝试最简方式
 * 若IE则捕获错误，手动枚举所有成员
 * call()第一个参数作用域，第二个传入函数的参数
 * slice()第一个参数开始提取的位置
 */
function converToArray(nodes) {
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes, 0);
    } catch (ex) {
        array = new Array();
        for (var i = 0; i < array.length; i++) {
            array.push(nodes[i]);
        }
    }
    return array;
}

/* 
 * 文档写入document.write()
 * 若在文档后调用
 * 那么，输出内容重新加载页面
 * </script>拼接成"<scr"+"ipt>"
 * 避免被当作外部的关闭标签
 */
<html>
<head>
    <title>document.write() Example</title>
</head>
<body>
    <p>No extra characters here:</p>
    <script type="text/javascript">
        document.write("<script type=\"text/javascript\" src=\"file.js\">" + "</scr" + "ipt>");
    </script>
<body>
</html>

/*
 * 遍历元素特性
 * DOM结构化为HTML字符串时需要
 * 首先数组保存名值对
 * 循环初始化时计算特性长度
 * 防止判断时多次计算
 * specified值为true意味着HTML中设置了特性
 * 最后空格为分隔符拼接
 */
function outputAttributes(element) {
    var pairs = new Array();
    for (var i = 0, len = element.attributes.length; i < len; i++) {
        var attrName = element.attributes[i].nodeName;
        var attrValue = element.attributes[i].nodeValue;
        if (element.attributes[i].specified) {
            pairs.push(attrName + "=\"" + attrValue + "\"");
        }
    }
    return pairs.join(" ");
}

/* 
 * 创建文本节点
 * 每个元素只有一个文本子节点
 * 若2个文本节点相邻会连起来显示
 */

var element = document.createElement("div");
element.className = "message";

var textNode = document.createTextNode("Hello World!");
element.appendChild(textNode);

var anotherTextNode = document.createTextNode("Yippee!");
element.appendChild(anotherTextNode);

document.body.appendChild(element);

