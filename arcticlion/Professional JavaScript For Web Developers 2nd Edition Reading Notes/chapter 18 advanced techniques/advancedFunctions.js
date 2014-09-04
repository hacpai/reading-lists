/*
 * 高级函数
 *    作用域安全的构造函数
 */

function Person(name, age, job) {
    if (this instanceof Person) {
        this.name = name;
        this.age = age;
        this.job = job;
    } else {
        return new Person(name, age, job);
    }
}

var person1 = Person("Nicholas", 29, "Software Engineer");
alert(window.name);    //""
alert(person1.name);    //"Nicholas"

var Person2 = new Person("Nicholas", 29, "Software Engineer");
alert(Person2.name);    //"Nicholas"

