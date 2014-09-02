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

