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
