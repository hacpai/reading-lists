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


                    
