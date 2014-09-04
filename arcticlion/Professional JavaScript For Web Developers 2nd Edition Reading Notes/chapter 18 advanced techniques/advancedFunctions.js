/*
 * 高级函数
 *    作用域安全的构造函数
 *    惰性载入函数
 *        表示函数执行的分支执行仅发生1次
 *        第一次调用时，函数会覆盖您外一个按合适方式执行的函数
 *        优点
 *            只有当实际调用时才进行，保证恰当功能又不影响执行时间
 *            避免了多重if条件
 *    函数绑定
 *        创建一个函数，在特定环境中指定参数调用另一个函数
 *        常常和回调函数与事件处理程序一起使用
 *        以便于将函数作为变量传递的同时保留代码执行环境
 *        bind():接受一个函数和一个环境
 *            返回给定环境调用给定函数的函数
 *            参数全部传递过去
 *    函数柯里化
 *        用于已经设置好了一个或多个参数的函数
 *        基本方法和函数绑定一样：使用一个闭包返回一个函数
 *        区别是，柯里化函数被调用时，返回的函数还需要设置一些传入的参数
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

var handler = {
    message: "Event handler",
    handleClick: function(event) {
        alert(this.message);
    }
};

var btn = document.getElementById("my-btn");
//没有保存handler.handleclick()环境，this对象指向了DOM按钮(已用闭包修正)
EventUtil.addHandler(btn, "click", function(event) {
                    handler.handleClick(event);
});

//bind()创建一个闭包
//闭包使用apply90调用传入的函数
//arguments对象是内部函数而非bind()
function bind(fn, context) {
    return function() {
        return fn.apply(context, arguments);
    };
}

EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler));

//下面代码展示了柯里化的概念
function add(num1, num2){
    return num1 + num2;
}

function curriedAdd(num2) {
    return add(5, num2);
}

alert(add(2, 3));    //5
alert(curriedAdd(3));    //8

//创建柯里化通用方式
function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    };
}

var curriedAdd = curry(add ,5);
alert(curriedAdd(3));    //8

//函数柯里化作为函数绑定的一部分包含其中，构造出更为复杂的bund()
function bind(fn, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    return function() {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(context, finalArgs);
    };
}

EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler, "my-btn"));

