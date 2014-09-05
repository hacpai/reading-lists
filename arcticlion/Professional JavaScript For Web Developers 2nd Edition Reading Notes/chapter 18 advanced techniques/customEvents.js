/*
 * 自定义事件
 *     事件是JavaScript与浏览器交互的主要途径
 *     主体和观察者
 *         举例
 *             DOM发布事件
 *             事件处理代码通过订阅这些事件观察DOM
 *             主体不知道观察者的任何事件
 *             观察者知道主体并能注册事件的回调函数
 */

//自定义事件概念是创建一个管理事件的对象，让其他对象监听那些事件
    //EventTarget类型有一个单独的属性handlers用于储存事件处理程序
    //addHandler，用于注册给丁类型的事件处理程序
    //fire，用于触发一个事件
    //removeHandler，用于注销某个事件类型的事件处理程序
function EventTarget() {
    this.handlers = {};
}

EventTarget.prototype = {
    constructor: EventTarget,
    addHandler: function(type, handler) {
        if (typeof this.handlers[type] == "undefined") {
            this.handlers[type] = [];
        }

        this.handlers[type].push(handler);
    },

    fire: function(event) {
        if (!event.target) {
            event.target = this;
        }
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[event.type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                handlers[i](event);
            }
        }
    },

    removeHandler: function(type, handler) {
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                if (handlers[i] === handler) {
                    break;
                }
            }

            handlers.splice(i, 1);
        }
    }
};

function handleMessage(event) {
    alert("Message received: " + event.message);
}

//创建一个新对象
var target = new EventTarget();

//添加一个事件处理程序
target.addHandler("message", handleMessage);

//触发事件
target.fire({ type: "message", message: "Hello world!" });

//删除事件处理程序
target.removeHandler("message", handleMessage);

//再次，应没有事件处理程序
target.fire( { type: "message", message: "Hello world!" } );

function Person(name, age) {
    EventTarget.call(this);
    this.name = name;
    this.age = age;
}

//寄生组合继承方法继承EventTarget
//一旦调用say()，便触发事件
inheritPrototype(Person, EventTarget);

Person.prototype.say = function(message) {
    this.fire({type: "message", message: message});
};

function handleMessage(event) {
    alert(event.target.name + "says: " + event.message);
}

//创建新Person
var person = new Person("Nicholas", 29);

//添加一个事件处理程序
person.addHandler("message", handleMessage);

//在该对象上调用1个方法，它触发消息事件
person.say("Hi there.");

