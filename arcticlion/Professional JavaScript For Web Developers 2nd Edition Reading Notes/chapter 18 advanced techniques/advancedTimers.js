/*
 * 高级定时器
 *     指定的时间间隔表示何时将定时器的代码添加到队列 
 *     浏览器再根据进程空闲依次执行队列内的代码
 *     故一般执行时间大于设置的时间
 *     重复的定时器
 *         浏览器仅当没有该定时器的代码实例时才将定时器代码添加到队列中导致2个问题
 *             某些间隔被跳过
 *             多个定时器的代码执行之间的间隔可能比预期的小
 *         避免setInterval()重复2个错误
 *             链式setTimeout调用
 *     Yielding Processes
 *         长时间运行循环会降低用户的交互体验
 *         对于无须同步完成和无须顺序完成的数据
 *             使用数组分块技术：小块小块地处理数组
 *         
 */

var btn = document.getElementById("my-btn");
btn.onclick = function() {
    setTimeout(function()) {
        document.getElementById("message").style.visibility = "visible";
    }, 250);

    //其他代码
};

//确定定时器多久次执行，仅在Firefox中
setTimeout(function(diff) {
    if (diff > 0) {
        //晚调用
    } else if (diff < 0) {
        //早调用
    } else {
        //调用及时
    }
}, 250);

//链式调用setTimeout()，每次函数执行都创建一个新的定时器
setTimeout(function() {
    //处理中
    setTimeout(arguments.callee, interval);
}, interval);

//这段定时器代码每次执行的时候将一个<div>向右移动，当左坐标在200像素的时候停止
setTimeout(function() {
    var div = document.getElementById("myDiv");
    var left = parseInt(div.style.left) + 5;
    div.style.left = left + "px";
    if (left < 200) {
        setTimeout(arguments.callee, 50);
    } 
}, 50);

//数组分块技术
    //array蕾丝“待办事宜”列表，包含要处理的项目
    //shift()获取队列中下一个要处理的项目
    //然后传递给函数
    //如果队列中还有其他项目
    //则设置另一个定时器通过arguments.callee调用同一个匿名函数
setTimeout(function(){
    //取出下一个条目并处理
    var item = array.shift();
    process(item);

    //若还有条目，再设置另一个定时器
    if (array.length > 0) {
        setTimeout(arguments.callee, 100);
    }
}, 100);

