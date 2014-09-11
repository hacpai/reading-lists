/* 
 * 客户端检测首选能力检测
 * 能力检测基本模式
 */
if (object.propertyInQuestion) {
    //使用object.proertyInQuestion
}

/*
 * 检测通过ID返回元素的能力
 * 由document.getElementById或document.all实现
 * 依次检测，存在就使用
 * 不存在则抛出错误
 */
function getElement(id) {
    if (document.getElementById) {
        return document.getElementById(id);
    } else if (document.all) {
        return document.all(id);
    } else {
        throw new Error("No way to retrieve element!");
    }
}

/* 
 * 一次性检测所需特性
 * 储藏布尔值供后续使用
 * 这里用到双逻辑非操作符号
 * 原因http://oceanzhu.com/archives/81
 */
 //确定浏览器是否支持Netscape风格的插件
var hasNSPlugins = !!(navigator.plugins && navigator.plugins.length);

 //确定浏览器是否具有DOM1规定的能力
var hasDOM1 = !!(document.getElementById && document.createElement && document.getElementByTagName);

