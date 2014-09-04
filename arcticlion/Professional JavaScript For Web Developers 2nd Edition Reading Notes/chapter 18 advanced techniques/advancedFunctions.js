/*
 * 高级函数
 *    作用域安全的构造函数
 *    惰性载入函数
 *        表示函数执行的分支执行仅发生1次
 *        第一次调用时，函数会覆盖您外一个按合适方式执行的函数
 *        优点
 *            只有当实际调用时才进行，保证恰当功能又不影响执行时间
 *            避免了多重if条件
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

//惰性载入createXHR
function createXHR() {
    if (typeof XMLHttpRequest != "undefined") {
        createXHR = function() {
            return new XMLHttpRequest();
        };
    } else if (typeof ActiveXObject != "undefined") {
        createXHR = function() {
            if (typeof arguments.callee.ActiveXString != "string") {
                var versions = ["MSXML2.XHLHttp.6.0", "MSXML2.XMLHttp.3.0",
                               "MSXML2.XMLHttp"];
                for (var i = 0, len = versions.length; i < len; i++) {
                    try {
                        var xhr = new ActiveXObject(versions[i]);
                        arguments.callee.ActiveXString = versions[i];
                        break;
                    } catch(ex) {
                        //跳过
                    }
                }
            }

            return new ActiveXObject(argumens.callee.ActiveXString);
        };
    } else {
        createXHR = function() {
            throw new Error("No XHR object acailable.");
        };
    }
    return createXHR();
}

