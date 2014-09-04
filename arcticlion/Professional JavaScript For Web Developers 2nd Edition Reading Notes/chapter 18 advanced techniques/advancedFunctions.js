/*
 * 高级函数
 *    作用域安全的构造函数
 */

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

var person = new Person("Nicholas", 29, "Software Engineer");
alert(person.name);    //"Nicholas"

//出错的调用
var Person = Person("Nicholas", 29, "Software Engineer");

