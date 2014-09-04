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

//构造函数继承不用原型鲢问题
function Polygon(sides) {
    if (this instanceof Polygon) {
        this.sides = sides;
        this.getArea = function() {
            return 0;
        };
    } else {
        return new Polygon(sides);
    }
}

//由于Polygon是作用域安全，this对象不是Polygon实例，创建了新的Polygon对象
function Rectangle(width, height) {
    Polygon.call(this, 2);
    this.width = width;
    this.height = height;
    this.getArea = function() {
        return this.width * this.height;
    };
}

//通过使用原型链解决这个问题
Rectangle.prototype = new Polygon();

var rect = new Rectangle(5, 10);
alert(rect.sides);    //2

