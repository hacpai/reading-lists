/*
 * 范围
 * DOM范围实现简单选择
 * selectNode()或selectNodeContents()
 * 接受一个参数: DOM节点
 * <html>
 *     <body>
 *         <p id="p1"><b>Hello</b> world!</p>
 *     </body>
 * </html>
 * selectNode()选择包括子节点的整个节点
 * selectNodeContents()只选择子节点
 * ++++++++++++++range1+++++++++++++
 * +                               +
 * <p id="p1"><b>Hello</b> world!</p>
 *            |                 |
 *            +++++++range2++++++
 */
var range1 = document.createRange();
var range2 = document.createRange();
var p1 = document.getElementById("p1");
range1.selectNode(p1);
range2.selectNodeContents(p1);

/*
 * DOM范围实现幅炸选择
 * setStart()和setEnd()
 * 接受2个参数：参照节点和偏移量值
 * 确定节点在其父节点的childNodes集合中的索引
 */
var p1Index = -1;
for (var i = 0, len = p1.parentNode.childNodes.length; i < len; i++) {
    if (p1.parentNode.childNodes[i] == p1) {
        p1Index = i;
        break;
    }
}

range1.setStart(p1.parentNode, p1Index);
range1.setEnd(p1.parent, p1Index + 1);
range2.setStart(p1, 0);
range2.setEnd(p1, p1.length);

/*
 * 取得示例代码"Hello"的"llo" 到"world!"的"o"
 * 因为"Hello"是<p>的孙子节点
 * p1.firstChild取的<b>
 * p1.firstChild.firstChild取得"Hello"的文本节点
 * deleteContents()从文档那中删除范围内容
 */
var p1 = document.getElementById("p1");
var helloNode = p1.firstChild.firstChild;
var worldNode = p1.lastChild;

var range = document.createRange();
range.setStart(helloNode, 2);
range.setEnd(worldNode, 3);

range.deleteContents();    //<p id="p1"><b>He</b>rld!</p>
