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
 *         Namespace对象表现命名空间
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

//命名空间的创建
var ns = new Namespace();
var ns = new Namespace("http://www.wrox.com/");    //没有前缀的命名空间
var wrox = new Namespace("wrox", "http://www.wrox.com/");    //wrox命名空间

alert(ns.uri);    //"http://www.wrox.com/"
alert(ns.prefix);    //undefined
alert(wrox.uri);    //"http://www.wrox.com/"
alert(wrox.prefix);    //"wrox"

//XML字面量包含命名空间时自动创建Namespace对象
var xml = <wrox:root xmlns:wrox="http://www.wrox.com/">
            <wrox:message>Hello World!</wrox:message>
          </wrox:root>;
//namespace取得对命名空间的引用
var wrox = xml.Namespace("wrox");

alert(wrox.uri);
alert(wrox.prefix);

//创建QName对象
var message = new QName("message");    //表示"message"

var wrox = new Namespace("wrox", "http://www.wrox.com/");
var wroxMessage = new QName(wrox, "message");    //表示"wrox:message"

alert(wroxMessage.uri);    //"http://www.wrox.com/"
alert(wroxMessage.localName);    //"message"
//解析XML结构时，自动创建QName对象
var xml = < wrox:root xmlns:wrox="http://www.wrox.com/">
            <wrox:message>Hello World!</wrox:message>
          </wrox:root>;
//name()取得XML对象关联的QName对象
var wroxRoot = xml.name();
alert(wroxRoot.uri);    //"http://www.wrox.com/"
alert(wroxRoot.localName);    //"root"

//setName()传入新的QName对象
xml.setName(new QName("newroot");
xml.setLocalName("newtagname");

