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
 * extractContents()返回移除的范围内容
 * insertNode()在选择的范围开始处插入
 * sorroundContents()环绕范围插入内容
 * collapse()折叠范围
 * 接受一个参数：ture：折叠到范围起点;false：折叠到范围重点
 * collapsed检测是否折叠
 * 检测某个范围是否处于折叠状态，可以帮我们确定范围中的2个节点是否紧密相邻
 * compareBoundaryPoints()确定这些范围是否有公共边界
 * 接受2个参数：表示比较方式的常量值和第一个范围的起点
 * 比较方式常量值如下：
 * Range.START_TO_START(0)
 * Range.START_TO_END(1)
 * Range.END_TO_END(2)
 * Range.END_TO_START(3)
 * 返回值如下:
 * 第一个范围中的点位于第二个范围中的点之前，返回-1
 * 相等 0
 * 之后 1
 * cloneRange()复制DOM范围
 * detach()清理DOM范围
 */
var p1 = document.getElementById("p1");
var helloNode = p1.firstChild.firstChild;
var worldNode = p1.lastChild;

var range = document.createRange();
range.setStart(helloNode, 2);
range.setEnd(worldNode, 3);

range.deleteContents();    //<p id="p1"><b>He</b>rld!</p>

var fragment = range.extractContents();
p1.appendChild(fragment);    //<p id="p1"><b>He</b>rld!</p><b>llo</b> wo 

var span = document.createElement("span");
span.style.color = "red";
span.appendChild(document.createTextNode("Inserted text"));
range.insertNode(span);    //<p id="p1"><b>He<span style="color: red">Inserted text</span>llo</b> world!</p>

range.surroundContents(span);    //<p id="p1"><b>He</b><span style="color: red">Inserted text</span><b>llo</b> world!</p>
                                 //类似给选区加了一个红色背景（不同insertNode()之处：这里<b>元素拆分成两个<b>)

range.collapse(true);    //折叠到起点
alert(range.collapsed);  //true

//<p id="p1">Paragraph 1</p><p id="p2">Paragraph 2</p>
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var range = document.createRange();
range.setStartAfter(p1);
range.setStartBefore(p2);
alert(range.collapsed);    //true.范围是折叠的，<p1>和<p2>相邻

var range1 = document.createRange();
var range2 = document.createRange();
var p1 = document.getElementById("p1");

range1.selectNodeContents(p1);
range2.selextNodeContents(p2);
range2.setEndefore(p1.lastChild);

alert(range1.compareBoundaryPoints(Range.START_TO_START, range2));    //0
alert(range1.compareBoundaryPoints(Range.END_TO_END, range2));    //1

var newRange = range.cloneRange();

range.detach();    //从文档中分离
range = null;      //接除引用

