/*
 * 确定元素大小
 * getBoundingClientRect()返回一个矩形对象
 * 包含4个属性：left, top, right和bottom
 * 这些属性给出了元素在页面中相对于视口的位置
 * IE文档左上角坐标(2, 2)
 * Firefox和Opera左上角坐标(0, 0)
 * 函数利用自身属性确定是否要对坐标进行调整
 * 第一步检测属性是否有定义，如果没有就定义一个
 * 最终的offset会被设置为新元素坐标的负值
 * IE中设置-2,Firefox和Opera设置-0
 * 故创建一个位置在(0, 0)的临时元素
 * 然后调整其getBoundingClientRect()
 * 减去视口的scrollTop是为了防止调用这个函数窗口被滚动
 * 最后再传入的元素上调用这个方法并基于新的计算公式和创建一个对象
 */
function getBoundingClientRect(element) {
    if (typeof argument.callee.offset != "number") {
        var scrollTop = document.documentElement.scrollTop;
        var temp = document.createElement("div");
        temp.style.cssText = "position:absolute;left:0;top:0;";
        document.body.appendChild(temp);
        argument.callee.offset = -temp.getBoundlingClientRect().top - scrollTop;
        document.body.removeChild(temp);
        temp = null;
    }

    var rect = element.getBundingclientRect();
    var offset = argument.callee.offset;

    return {
        left: rect.left + offset,
        right: rect.right + offset,
        top: rect.top + offset,
        bottom: rect.bottom + offset
    };
}
