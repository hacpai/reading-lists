# JavaScript 1.5

## 常量

使用方式类似于`var`, `const`声明可以定义一个值在初始化之后就不能改变的变量。

```
const MAX_SIZE = 25;
```
常量值不变

```
const FLAG = true;
var FLAG = false;    //错误
```
任何改变其值的尝试都会被忽略。

```
const FLAG = true;
FLAG = false;
alert(FLAG);    //true
```

## 取值函数和设置函数

JavaScript 1.5为对象属性引入了取值函数和设置函数，并提供了2种不同的方法分配他们。第一种方法是通过对象字面量标记，即在属性名之前使用get和set关键词，然后提供执行的函数。对于get，函数只须返回一个值，set函数必须接受一个唯一的参数，即要进行设置的值。如下例：

```
var person = {
    _name: null,

    get name() {
        return this._name;
    },

    set name(value) {
        if (typeof value == "string") {
            this._name = value;
        }
    }
};

person.name = "Nicholas";
alert(person.name);    //"Nicholas"
```
注意取值函数和设置函数并不包含function关键词。在这个例子种，name属性上同时分配子取值函数和设置函数，后者只有当新值是一个字符串的时候才给name设置新值。

也可以不通过对象字面量标记来设置取值函数和设置函数。还有两个特殊的方法：`_defineGetter_()`和`_defineSetter_()`, 这些方法都接受两个参数：属性名和要执行的函数。

```
//在现存的对象上定义
var person = (_name:null);
person._defineSetter_("name", function() {
    return this._name;
});
person._defineSetter_("name", function(value) {
    if (typeof value == "string") {
        this._name = value;
    }
});

//在构造函数中定义
function Person() {
    this._name = null;

    this._defineGetter_("name", function() {
        return this._name;
    });

    this._defineSetter_("name", function(value) {
        if (typeof value == "string") {
            this._name = value;
        }
    });
}
```

