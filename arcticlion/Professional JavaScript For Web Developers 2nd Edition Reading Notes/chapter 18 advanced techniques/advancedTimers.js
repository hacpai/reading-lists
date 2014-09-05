/*
 * 高级定时器
 *     指定的时间间隔表示何时将定时器的代码添加到队列 
 *     浏览器再根据进程空闲依次执行队列内的代码
 *     故一般执行时间大于设置的时间
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

