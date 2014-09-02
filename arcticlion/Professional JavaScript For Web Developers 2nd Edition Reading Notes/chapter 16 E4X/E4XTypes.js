/*
 * E4X类型
 *     XML：XML结构中任何一个独立的部分
 *         表现XML结构中任何独立的部分
 *             元素
 *             特性
 *             注释
 *             处理指令
 *             文本节点
 *         最强大的是直接将XML字面量赋值给变量
 *     XNLList：XML对象的集合
 *         XML对象的有序集合
 *         通常是在解析较大的XML结构的过程中捎带着被创建的
 *     Namespace：命名空间的前缀与空间URI之间的映射
 *     QName：内部名称和命名空间URI组成的一个限定名
 */

//创建空XML对象
var x = new XML();

//传入到XML()字符串会被解析为分层的XML对象
var x = new XML("<employee position=\"Software Engineer\"><name>Nicholas " + "Zakas</name></employee>");

//也可传入DOM文档或节点
var x = new XML(xmldom);

//XML字面量指定数据给变量
var employee = <employee position="Software Engineer">
                    <name>Nicholas C. Zakas</name>
               </employee>;

//toXMLString()与toString()之间的比较
var data = <name>Nicholas C. Zakas</name>
alert(data.toString());    //"Nicholas C. Zakas"
alert(data.toXMLString());     //"<name>Nicholas C. Zakas</name>"

//创建XMLList对象
var list = new XMLList();
//也可传入待解析的XML字符串
var list = new XMLList("<item/><item/>");   //两个XML对象，两个</item>元素
var list = <item/> + <item/>;
var list = <><item/><item/></>;

var employees = <employees>
    <employee position="Software Engineer">
        <name>Nicholas C. Zakas</name>
    </employee>
    <employee position="Salesperson">
        <name>Jim Smith</name>
    </employee>
</employees>;

//以上代码定义employees变量包含一个XML对象，表示<employees/>元素
    //这个元素包含两个<employee/>元素，因为创建相应的XMLList对象
var firstEmployee = employees.employee[0];
var secondEmployee = employees.employee[1];

alert(employees.employee.length());    //2

//一个XML对象和只包含一个XML对象的XMLList是没有太大区别
alert(employees.length());    //1
alert(employees[0] === employees);    //true

