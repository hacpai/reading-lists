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
 * normalize()合并文本节点
 */

var element = document.createElement("div");
element.className = "message";

var textNode = document.createTextNode("Hello World!");
element.appendChild(textNode);

var anotherTextNode = document.createTextNode("Yippee!");
element.appendChild(anotherTextNode);
alert(element.nodeValue)    //"Hello World!Yippee!"

document.body.appendChild(element);

alert(element.childNodes.length);    //2

element.normalize();
alert(element.childNodes.length);    //1
alert(element.firstChild.nodeValue);    //"Hello World!Yeppee!"

/* 
 * 分割文本节点
 * splitText()返回参数位置到剩下的文本
 */
var newNode = element.firstChild.split(5);
alert(element.firstChild.nodeValue);    //"Hello"
alert(newNode.nodeValue);    //" World!"
alert(element.childNodes.length);    //2

/* 
 * 文档片段的应用
 * 为<ul>添加3个列表项
 * getElementByID():通过ID得到元素
 * createDocumentFragment()创建文档片段
 */
var fragment = document.createDocumentFragment();
var ul = document.getElementById("myList");
var li = null;

for (var i = 0; i < 3; i++) {
    li = document.createElement("li");
    li.appendChild(document.createTextNode("Item " + (i+1)));
    fragment.appendChild(li);
}

ul.appendChild(fragment);

/* 
 * 创建特性节点
 * setAttributeNode():将新创建的特性添加到元素
 * getAttribute():只返回特性的值
 */
var element = document.getElementById("myDiv);
var attr = document.createAttribute("align");
attr.value = "left";
element.setAttribute(attr);

alert(element.attributes["align"].value);    //"left"
alert(element.getAttributeNode("align").value);    //"left"
alert(element.getAttribute("align"));    //"left"
