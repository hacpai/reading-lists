/* 
 * IE bug检测
 * 实例属性与标记[DontEnum]原型属性同名
 * for-in循环不出现该实例属性
 */
var hasDontEnumQuirk = function() {

    var o = { toString: function() {} };
    for (var prop in o) {
        if (prop == "toString") {
            return false;
        }
    }

    return true;
}();

/* 
 * safari bug检测
 * Safari3.0以前版本枚举被隐藏属性
 */
var hasEnumShadowsQuirk = function(){

    var o = {toString: function() {}};
    var count = 0;
    for (var prop in o) {
        if (prop == "toString") {
            count++;
        }
    }
        return count > 1;
}(); 
