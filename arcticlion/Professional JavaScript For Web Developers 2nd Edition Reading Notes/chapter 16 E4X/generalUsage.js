/*
 * 一般用法
 *     点号——特性或标签名访问不同的层次和结构
 *     访问特性
 *         @符号区分
 *     其他节点类型
 *         nodeKind():得到XML对象表示的类型
 *     查询
 *         取得元素或特性值的简单操作是最基本的查询
 *     构建和操作XML
 *         将XML数据转换成XML对象的方式有很多种
 *             将XML字符串传递到XML构造函数
 *             使用XML字面量
 *                 字面量中嵌入JavaScript变量用“｛｝”
 *     解析和序列化
 *         settings对象
     *         ignoreComments
     *         ignoreProcessingInstructions
     *         ignoreWhitespace
     *         prettyIndent:设置缩进空格，默认2
     *         prettyPrinting
 */

var employee = <employee position="Software Engineer">
                <name>Nicholas C. Zakas</name>
               </employee>;
alert(employee.name);    //"Nicholas C. Zakas"

var employees = <employees>
        <?Dont forget the donuts?>
        <employee position="Software Engineer">
            <name>Nicholas C. Zakas</name>
        </employee>
        <!--just added-->
        <employee position="Salesperson">
            <name>Jim Smith</name>
        </employee>
    </employees>;

alert(employees.employee[0].name);    //Nicholas C. Zakas"
alert(employees.employee[1].name);    //"Jim Smith"

//"*"的作用
var allChildren = employees.*;    //返回所有子元素
alert(employees.*[0].name);    //"Nicholas C. Zakas"

//child():将属性命和索引值传递给这个函数，也会得到相同的值
var firstChild = employees.child(0);    //与employees.*[0]相同
var employeeList = employees.child("employee");    //与employees.employee相同
var allChildren = employees.child("*");    //与employee.*相同

//children()返回所有子元素
var allChildren = employees.children();    //与employee.*相同

//elements()与child()类似，区别在只返回表示元素的XML对象
var employeeList = employees.elements("employee");    //与employees.employee相同
var allChildren = employees.elements("*");    //与employees.*相同

//删除子元素
delete employees.employee[0];
alert(employees.employee.length());    //1

alert(employees.employee[0].@position);    //"Software Engineer"
alert(employees.employee[0].child(@position));    //"Software Engineer"
alert(employees.employee[0].attribute("position"));    //"Software Engineer"

//下面两种方式都会取得所有特性
var atts1 = employees.employee[0].@*;
var atts2 = employees.employee[0].attributes();

employees.employee[0].@position = "Author";    //修改position特性
//也可这样添加新的特性
employees.employee[0].@experience = "8 years";    //添加"experience"特性
employees.employee[0].@manager = "Jim Smith";    //添加manager特性

delete employees.employee[0].@position;    //删除position特性

//设置属性支持注释和处理指令解析到XML结构
XML.ignoreComments = false;
XML.ignoreProcessingInstructions =false;

alert(employees.nodeKind());    //"element"
alert(employees.*[0].nodeKind());    //"processing-instruction"
alert(employees.employee[0].@position.nodeKind());    //"attribute"
alert(employees.employee[0].nodeKind());    //"element"
alert(employees.*[2].nodeKind());    //"comment"
alert(employees.employee[0].name.*[0].nodeKind());    //"text"

//hasSimpleContent()和hasComplexContent()确定XML只包含文本还是包含更复杂内容
alert(employees.employee[0].hasComplexContent());    //true
alert(employees.employee[0].hasSimpleContent());    //false
alert(employees.employee[0].name.hasComplexContent());    //false
alert(employees.employee[0].name.hasSimpleContent());    //true

//查找<employees/>中的<cat/>元素
var cats = employees.cat;
alert(cats.length());    //0

//两个点访问后代节点
var allNames = employees..name;    //取得<employees/>后代的所有<name/>节点
//descendants()类似..*
var allDescendants = employees.descendants();    //所有后代节点
var allNames = employees.descendants("name");    //后代中的所有<name/>元素
var allAttributes = employees..@*;    //取得所有后代元素中的所有特性
var allAttributes2 = employees.descendants("@*");    //同上
var allAttributes = employees..@position;    //取得所有position特性
var allAttributes2 = employees.descendants("@position");     //同上

//指定查询条件
//返回position特性值为"Salesperson"所有<employee/>元素
var salespeople = employees.employee.(@position == "Salesperson");

//修改XML结构中的某一部分
//重写了@position属性的第一项
employees.employee.(@position == "Salesperson")[0].@position = "Senior Salespersopn";

//parent()返回公共夫元素
//这里的employee2保存employees同样的值
//处理来源未知的XML对象时经常用到
var employee2 = employees.employee.parent();

//用这个语法省去构建XML结构时拼接字符串的麻烦
var tagName = "color";
var color = "red";
var xml = <{tagName}>{color}</{tagName}>;
alert(xml.toXMLString());    //"<color>red</color>

//JavaScript构建完整的XML结构
var employees = <employees/>;
employees.employee.name = "Nicholas C. Zakas";
employees.employee.@position = "Software Engineer";

//DOM方法构建XML结构
//insertChildBeforehild(refNode, child)
//prependChild(child):child作为子节点添加到XMLList开始位置
//setChildren(children):用children替换当前所有的子元素
employees.appendChild(<employee position="Vice President">
                      <name>Benjamin Anderson</name>
                    </employee>);

employees.prependChild(<employee position="User Interface Designer">
                       <name>Michael Johnson</name>
                    </employee>);

employees.insertChildBefore(employees.child(2), <employee position="Human Resources Manager">
                            <name>Margaret Jones</name>
                        </employee>);

employees.setChildren(<employee position="President">
                        <name>Richard Mcmichael</name>
                    </employee> +
                    <employee position="Vice President">
                        <name>Rebecca Smith</name>
                    </employee>);

alert(employees.toXMLString());

var setting = new setting();
alert(setting.ignoreWhitespace);    //true
alert(setting.ignoreComments);    //true
XML.prettyIndent = 8;
XML.ignoreComments = false;
XML.setSettings(setting);    //重置前面的设置
XML.setSettings(XML.defaultSettings());    //重置默认设置

