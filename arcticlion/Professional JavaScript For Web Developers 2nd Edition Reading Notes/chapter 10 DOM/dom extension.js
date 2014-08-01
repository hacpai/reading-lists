/*
 * 检测两节点是否后代关系
 * 首先能力检测contains()
 * 并且不是WebKit则执行代码
 * 是WebKit且至少是Safari3+也执行
 * 再检测compareDocumentPosition()
 * 最后向上遍历DOM结构
 */
function contains(refNode, otherNode) {
    if (typeof refNode.contains == "function" && (!client.engine.webkit || client.engine.webkit >= 522)) {
        return refNode.contains(otherNode);
    } else if (typeof refNode.compareDocumentPosition == "function") {
        return !!(refNode.comparaDocumentPosition(otherNode) & 16);
    } else {
        var node = otherNode.parentNode;
        do {
            if (node === refNode) {
                return true;
            } else {
                node = node.parentNode;
            } while (node != null);
            return false;
        }
    }
}

/* 
 * innerText
 * 只生成当前节点的一个文本节点
 * 并移除先前存在的所有子节点
 */
function getInnerText(element) {
    return (typeof element.textContent == "string") ? element.textContent: element.innerText;
}

function setInnerText(element, text) {
    if (typeof element.textContent == "string") {
        element.textContent = text;
    } else {
        element.innerText = text;
    }
}

setInnerText(div, "Hello world!");
alert(getInnerText(div));    //"Hello world!"

/* 
 * innerHTML
 * 类似innerText
 * 插入<script>不被执行
 * 解决方案是：前置一个作用域内元素
 * Safari和Chrome还需添加到<head>后
 */
//针对Opera、Firefox、IE
div.innerHTML = "_<style type=\"text/css\">body {background-color: red; }</style>";
div.removeChild(div.firstChild);

//针对Safari和Chrome
document.getElementsByName("head")[0].appendChild(div.firstChild);
