# 基本概念

## 表示符

标示符就是指变量、函数、属性的名字，或者函数的参数。

- 第一个字符必须是一个字母、下划线或美元符号
- 第一个字符不能是数字

## 变量

ECMAScript的变量是松散类型的，松散类型就是可以用来保存任何类型的数据。每个变量仅仅是一个用于保存值的占位符而已。

定义变量时要用`var`操作符，创建该作用域的局部变量

## 数据类型

ECMAScript中有5种简单数据类型（也称为基本数据类型): Undefined, Null, Boolean, Number和String。还有一种复杂数据类型 —— Object，Object本质上是由一组无序的名值对组成的。

### typeof操作符

typeof操作符检测给定变量的数据类型

- "undefined"
- "boolean"
- "string"
- "number"
- "object"
- "function"

### Undefined类型

Undefined类型只有一个值，即特殊的undefined，未初始化的变量值就是undefined。

### Null类型

Null类型只有一个值是null。null值表示一个空对象指针，typeof操作符检测null值会返回"object".

如果定义的变量准备在将来用于保存对象，最好将该变量初始化为null。

### Boolean类型

流控制语句对各种数据类型自动执行的相应转换规则

  数据类型   |转换为true的值 | 转换为false的值
------------ | ------------- | ------------
 Boolean     | true          | false
 String      | 任何非空字符串| ""(空字符串）
 Number      | 任何非零数字值(包括无穷大）| 0和NaN
 Object      | 任何对象      ｜ null
 Undefined   | n/a           ｜undefined

### Number类型

ECMAScript没有为整数和浮点数分别定义不同的数据类型。Number可用于表示多有数。

### String类型

#### 字符字面量

#### 字符串

### Object类型

ECMAScript中的对象是一组数据和功能的集合，所有对象的基础类型。

## 操作符

ECMA-262描述了一组用于操作数据值的操作符，包括算术操作符（如加号和减号）、位操作符、关系操作符和相等操作符以及赋值操作符。

在应用对象时，相应的操作符通常都会调用对象的valueOf()和toString()方法,以便取得可以操作的值。

## 语句

流控制语句，比如if语句、for语句和switch语句

## 函数

ECMAScript中的函数使用function关键字声明，后跟一组参数以及函数体。

ECMAScript中的函数在定义时不必指定是否返回值。

### 理解参数

ECMAScript函数不介意传递进来多少参数，也不在乎传进来参数是什么数据类型。

ECMAScript中的参数在内部是用一个数组来表示的，函数始终都是这个数组，不关心数组中包含哪些参数。

在函数体内可以通过arguments对象来访问这个参数数组。

### 没有重载

如果在ECMAScript中定义了两个名字相同的函数，则该名字只属于后定义的函数。



    
