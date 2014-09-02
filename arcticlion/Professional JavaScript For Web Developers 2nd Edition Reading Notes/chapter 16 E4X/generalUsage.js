/*
 * 一般用法
 *     点号——特性或标签名访问不同的层次和结构
 */

var employee = <employee position="Software Engineer">
                <name>Nicholas C. Zakas</name>
               </employee>;
alert(employee.name);    //"Nicholas C. Zakas"

var employees = <employees>
        <employee position="Software Engineer">
            <name>Nicholas C. Zakas</name>
        </employee>
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

