//继承
//寄生组合式继承
//——原型链+借用构造函数+寄生式继承

/*
**寄生式继承
**继承超类的原型
*/
function inherPrototype(subType, superType) {
    var prototype = object(superType.prototype);    //创建超类原型的副本
    prototype.constructor = subType;                   //为创建副本添加constructor属性
    subType.prototype = prototype;                     //将新创建的副本赋值给子类型的原型
}

/*
**定义超类实例应特有的属性
*/
function SuperType (name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

/*
**原型链
**定义超类方法和共享属性
*/
SuperType.prototype.sayName = function() {
    alert(this.name);
}

/*
**借用构造函数
**定义子类实例特有的属性
*/
function SubType (name, age) {
    SuperType.call(this, name);
    this.age = age;
}

//寄生式继承
inheritPrototype(SubType, SuperType);

subType.prototype.sayAge = function() {
    alert(this.age);
};