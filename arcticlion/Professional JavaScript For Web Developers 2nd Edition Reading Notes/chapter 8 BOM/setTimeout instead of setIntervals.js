var num = 0;
var max = 10;

function incrementNumber() {
    num ++;

    //如果执行次数达到了max设定的值，则取消后续尚未执行的调用
    if (num < max) {
        setTimeout (incrementNumber, 500);
    } else {
        alert("Done");
    }
}

setTimeout(incrementNumber, 500);
