/*
 * 其他变化
 *     for-each-in:迭代便利每一个属性并返回属性值
 */

var employees = <employees>
                    <employee position="Software Enginner">
                        <name>Nicholas C. ZakasK</name>
                    </employee>
                    <employee position="Saleperson">
                        <name>Jim Smith</name>
                    </employee>
                </employees>;

//将<employees/>每个子节点依次赋值给child变量
for each (var child in employees) {
    alert(child.toXMLString());
}

//返回特性节点
//对一个由特性节点组成的XMLList对象进行操作
for each (var attribute in employees.@*) {
    alert(attribute);
}

//也可用于常规的数组和对象
var colors = ["red", "green", "blue"];
for each(var color in colors) {
    alert(color);
}

