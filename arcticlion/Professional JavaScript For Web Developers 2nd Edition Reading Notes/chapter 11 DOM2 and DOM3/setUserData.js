/*
 * setUserData()
 * 接受3个参数：要设置的键、实际的数据和处理函数
 * 处理函数5个参数：
 *     表示操作类型的数值：1表示复制，2表示导入，3表示删除，4表示重命名
 *     数据键
 *     数据值
 *     源节点
 *         删除节点时，源节点为null
 *     目标节点
 *         复制节点时，目标节点是null
 */
var div = document.createElement("div");
div.setUserData("name", "Nicholas", function(operation, key, value, src, dest) {
    if (operation == 1) {
        dest.setUserData(key, value);
    }
});

var newDiv = div.cloneNode(true);    //深复制，包括节点和子节点
alert(newDiv.getUserData("name"));    //"Nicholas"
