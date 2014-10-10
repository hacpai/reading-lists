程序就是函数加上变量定义
=======================

通常，一个程序不仅包含一个，而是包含多个定义。例如，上一章的`area-of-ring`程序就包含了两个定义，一个为`area-of-ring`, 另一个为`area-of-disk`, 两者都被称为函数定义.使用数学术语，可以说一个程序包含若干个函数看。其中第一个函数，即 ｀area-of-ring`, 是我们实际上想使用的，因此被称为主函数，而第二个函数, `area-of-disk`，被称为辅助函数。

使用辅助函数不仅使程序设计过程易于管理并且使最后得到的程序易于阅读。试比较一下`area-of-ring`程序的两个不同版本。

```
(define (area-of-ring outer inner)      (define (area-of-ring outer inner)
  (- (area-of-disk outer)                   (- (* 3.14 (* outer outer))
     (area-of-disk inner)))                     (* 3.14 (* inner inner)))
```

左边的定义包含了辅助函数。它将一个原先较大的问题分解为若干较小而容易解决的子问题，定义揭示了区域的面积等于整个盘的面积减去洞的面积。与之相反，右边的定义则需要读者通过计算推导出子表达式的功能。

就算编写一个简单的程序，也应该考虑将其分解为若干较小的子程序，然后再需要的时候再组合在一起。

本章的内容安排如下，第1小节使用一个商业界的例子对两种程序开发风格进行比较，说明将一个程序分解为若干函数定义可以使我们更有信心确保整个程序的正确性；第2小节引入变量定义概念，它是程序开发过程中另一个重要的因素；最后一小节是一些练习。

### 函数复合

考虑下面一个问题：

假定一个影院的拥有者（业主）可以自由制定电影票的价格。显然票价越高，看电影的人就越少。在最后的一次试验中，他测定了票价和观众数之间的关系。当票价为5美元时，有120人观看了电影，当影票的价格调低了0.1美元，观众增加了15位。不幸的是，观众的增加也增加了电影院的成本。每反映一场电影需要支付180美元给供应商，每位观众还要有4美分的开销。现在，想知道电影放映的利润和票价之间的确切关系，并由此确定一个利润最高的票价。

可以看出几个因素之间相互依赖。我们先分析一下依赖关系：

1. 利润是收入和成本之差
2. 收入由票房唯一确定，它是票价乘以观众数
3. 成本由固定成本（180美元）与依赖于观众数的变动成本两部分组成。
4. 观众数和票价之间的关系

接着对上述依赖关系给出函数表示。

下面是以合约，函数头部和用途说明开始的函数`profit`的描述：

```
;; profit : number -> number
;; 对于给定ticket-price, 利润是收入和成本之差
(define (profit ticket-price) ...)
```

利润之所以依赖于票价是因为收入和成本都依赖于票价。下面是其他三个函数的说明：

```
;; revenue : number -> number
;; 对于给定 ticket-price, 计算收入
(define (revenue ticket-price) ...)
;; cost : number -> number
;; 对于给定 ticket-price, 计算支出
(define (cost ticket-price) ...)
;; attendees : number -> number
;; 对于给定 ticket-price， 计算观众数
(define (attendees ticket-price) ...)
```

其中每个函数的用途说明都是问题表述中某一部分的粗略转译。

写下函数的一些基本材料并计算了若干实例后，接着就可以将函数中的"..."替换为Scheme表达式。

```
;; 如何设计程序
(define (profit ticket-price)
  (- (revenue ticket-price)
        (cost ticket-price)))
(define (revenue ticket-price)
(* (attendanees ticket-price) ticket-price))
  (define (cost ticket-price)
   (+ 180
       (* 0.4 (attendanees ticket-price))))
   (define (attendanees ticket-price)
     (+ 120
        (* (/ 15 .10) (- 5.00 ticket-price))))
```

因此，基于上述经验，总结出第一条也是最重要的程序设计原则如下：

| 辅助函数原则                                                                             |
| ------------                                                                             |
| 对在表述中所提到的或在进行实例计算中所发现的每种依赖关系都使用一个辅助函数进行明确表达。 |

### 变量定义

如果一个数值在程序中多次出现，应该使用变量定义给它一个名字。变量定义将一个名字与一个值相关联。例子之一是3.14，通常用π来代表，相关的变量定义语句为：

```
(define PI 3.14)
```

使用名字表示一个常量的好处是可以方便地将一个数值替换为另一个不同的数值。假设已有一个包含*PI*的定义程序，现在想使用一个更精确的π的近似值，则可将定义改为

```
(define PI 3.1415926)
```

| 变量定义原则                               |
| ------------                               |
| 给频繁使用的常量定义一个名字并在程序中使用 |

### 复合函数练习

根据6种主要英制长度单位和公制长度单位的换算表：

| English   | metri    |
| -------   | -----    |
| 1 inch    | 2.54 cm  |
| 1 foot    | 12in     |
| 1 yard    | 3 ft     |
| 1 rod     | 5(1/2)yd |
| 1 furlong | 40 rd|
| 1 mile    | 8 fl     |

请设计函数 inches->cm, feet->inches, yards->feet, rods->yards, furlongs- >rods, 和 miles->furlongs.

请进一步设计函数 feet->cm, yards->cm, rods->inches, 和 miles->feet

```
;; 合约：inches:  number -> number
;; 用途：将单位inch转换为单位cm
;; 例子：(inches 1)的计算结果为2.54
;; 定义：[函数头部的精化]
(define (inches cm)
  (* 2.54 cm))
;; 测试：
(inches 1)
;; 预期的值
2.54
```
