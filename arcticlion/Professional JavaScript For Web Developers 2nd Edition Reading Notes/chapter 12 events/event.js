/*
 * 在触发DOM上某个事件时
 * 会自动产生event对象
 * 包含事件元素、类型、及特定事件相关信息
 * event,type表示事件类型
 * 事件处理程序内部this === event.currentTarget
 * event.target等于真正的目标值
 * 直接将事件处理程序指点给目标元素，三者相等
 * 事件处理程序在按钮的富姐电中this === currentTarget
 * 通过一个函数处理多个事件用event.type
 * 定义名为handler的函数处理3种事件
 * 单击按钮出现警告框
 * 将鼠标移到按钮上背景变红
 * 鼠标移出按钮范围恢复默认值
 * preventDefault()阻止特定事件的默认行为
 * stopPropagation()立即停止事件在DOM层中传播
 * 添加一个按钮事件调用stopropagation()避免触发注册在document.body上面的事件处理程序
 */
var btn = document.getElementById("myBtn");
btn.onclick = function(event) {
    alert(event.type);    //"click"
    alert(event.currentTarget === this);    //true
    alert(event.target === this);    //true
};
btn.addEventListener("click", function(event) {
    alert(event.type);    //"click"
}, false);
<input type="button" value="Click Me" onclick="alert(event.type)"/>

document.body.onclick = function(event) {
    alert(event.currentTarget === document.body);    //true
    alert(this === document.body);    //true
    alert(event.target === document.getElementById("myBtn");    //true,由于按钮上没有注册事件处理程序，click事件就冒泡到了document.body那里进行处理
};

var handler = fucnction(event) {
    switch(event.type) {
        case "click": 
            alert("CLicked");
            break;

        case "mouseover":
            event.target.style.backgroundColor = "red";
            break;

        case "mouseout":
            event.target.style.backgroundColor = "";
            break;
    }
};

btn.onclick = handler;
btn.onmouseover = handler;
btn.onmouseout = handler;

//取消链接的默认行为
var link = document.getElementById("myLink");
link.onclick = fucnction(event) {
    event.preventDefault();
};

//如果不掉用stopPropagation()就会出现两个警告框
btn.onclick = function(event) {
    alert("CLicked");
    event.stopPropagation();
}

document.body.onclick = function(event) {
    alert("Body clicked");
};

