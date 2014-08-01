/*
 * 创建对象
 * 组合使用构造函数模式和原型模式
 * 最广泛，认同程度最高的一种创建自定义类型的方法
 * 构造函数模式
 * 定义实例应特有属性
 */
function Person (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["David", "Malan"];
}

/*
 * 原型模式
 * 定义方法和共享的属性
 */
Person.prototype = {
    constructor: Person,
    sayName: functon() {
        alert (this.name);
    }
}

var person1 = new Person("Finch", 32, "Software Enginner");
var person2 = new Person("Harold", 32, "Doctor");

person1.friend.push("Van");
alert(person1.friends);    //"David, Malan, Van“
alert(person2.friends);    //"David, Malan"
alert(person1.sayName);    //"Finch”
alert(person1.sayName == person2.sayName);    //true