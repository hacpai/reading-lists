/*
 * cssText重写整个style特性
 * getPropertyValue()取得CSS属性值
 * removeProperty()移除一个属性
 * getPropertyCSSValue返回2个值
 *     cssText与getPropertyValue值相同
 *     cssValueType返回数值常量
 *         0表示继承的值
 *         1表示基本的值
 *         2表示值列表
 *         3表示自定义的值
 */
myDiv.style.cssText = "width: 25px; height: 100px; backgroud-color: green";
alert(myDiv.style.cssText);

for (var i = 0, len = myDiv.style.length; i < len; i++) {
    var prop = myDiv.style[i];    //或者myDiv.style.item[i]
    var propertyValue = myDiv.style.getPropertyValue(prop);
    alert(prop + ": " + propertyValue);
    var propertyCSSValue = myDiv.style.getPropertyCSSValue(prop);
    alert(prop + ": " + propertyCSSValue.cssText + "(" + propertyCSSValue.cssValueType + ")");
}

myDiv.style.removeProperty("backgroud-color");

