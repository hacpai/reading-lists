十的替代品
==========

10是非常重要的数字。因为大多数人的手指和脚趾都是10，因为手指非常便于计数，于是人类适应了10为基数的数字系统。

10可以代表这么多只鸭子。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.06.05.png)

之所有指这么多只鸭子在于这些鸭子的数目与我们的手指数目相同。

### 八进制

如果人类的手指数目不是10根，那么，10就会有另外的含义。

数字10可以代表这么多只鸭子：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.05.58.png)

或者这么多只：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.05.51.png)

甚至可以是这么多只鸭子：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.05.44.png)

如果人类像卡通人物一样每只手有4个手指，那么将建立一个八进制的数字系统。

10则代表卡通人物手指的数量。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.05.35.png)

如果继续用脚趾数下去的话，就是这样：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.05.28.png)

以8为基础而建立的数字系统，我们就不再需要这个符号。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.05.20.png)

而且这样一个符号也不再需要。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.05.15.png)

八进制中有好几个好整数，如100（EIGHT)、200（EIGHT）和400（EIGHT）。类似于十进制的100（TEN）。在十进制中100（TEN）表示10（TEN）乘以10（TEN）。在八进制中100（EIGHT）表示10（EIGHT）乘以10（EIGHT）或者8（TEN）乘以8（TEN），即64（TEN）。

注意这些好整数100（EIGHT）、200（EIGHT）、400（EIGHT）在十进制中分别与64（TEN）、128（TEN）、400（TEN）相等，他们全是2的整数次幂。

下表是2的整数次幂的十进制及其对应的八进制的表示形式。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.04.54.png)

观察最右列，非常有规律。

在结构上，八进制数字系统每个位代表的值是该位数字乘以8的结果。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.04.47.png)

3725就被拆分成

```
3725(EIGHT) = 3 x 8^3 +
              7 x 8^2 +
              2 x 8^1 +
              5 x 8^0
```
运算法则也与十进制相同。

### 四进制

通过下图可以看出四进制的每一位都是跟4的某个整数次幂相对应。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.04.22.png)

四进制31232可以写成如下形式：

```
3123(FOUR) = 3 x 4^3 + 
             1 x 4^2 +
             2 x 4^1 +
             3 x 4^0
```

### 二进制

以2为基数的数字系统，只有2个数，则两个数分别是0和1.

任何一个以1开头而后面全是0的二进制数一定都是2的整数次幂。幂指数就等于这个二进制数中0的个数。

下表说明以上这条规则。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.04.10.png)

为了简明、更便捷地将二进制转换为十进制，用下面的模版转换更加方便。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.03.34.png)

将二进制数填入上面一行的表格，每个格子一位。将每位表格上的数字与下面的乘数相乘，得到的结果记录在下一行饿的格子中，再将下一行表格中的数字相加，得到追踪结果。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.03.25.png)


将十进制转换为二进制就没有那么直接了。下面是一个能够将0～255范围内的十进制转换为二进制数的模版。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.03.18.png)

这个转换比看起来麻烦一些。首先先将整个十进制数填入到上面最左端的表格，然后用第一个除数去除这个数，所得到的商填入正下方的表格，余数填入右边的格子，再用第一个余数继续上述步骤。按照模版的顺序继续进行下去。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.03.12.png)

二进制的优势在于他的加法非常简单，乘法比加法更加简单明了。

注意二进制数字一列中自上而下是怎样的规律交替的。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.02.59.png)

- 最右边的一列一直在0和1之间交替。
- 右数第二列是在每两个0和两个1之间相互交替。
- 下一列是在每四个0和每四个1之间相互交替。
- 再下一列是在每八个0和每八个1之间相互交替。

> 一个有趣的现象是只要重复则16个数字并且在每个数字前面加一个1就很容易写出后面16个数字。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2008%20Alternatives%20to%20Ten/屏幕快照%202014-09-18%20下午4.02.41.png)

> 只要一个二进制数位的值由1变到0，紧挨着的高位数字也会发生变化，不是由0到1就是由1到0.

### 二进制系统在算术与电子计数之间架起了桥梁

电线可以代表二进制数字。如果有电流流过这根电线就代表二进制数字1，如果没有，则代表二进制数字0.

开关可以表示二进制数字。如果开关接通（或闭合）就代表二进制数字1，如果开关断开（或断开），则代表二进制数0.

灯泡可以代表二进制数字。如果灯泡点亮，就代表二进制数字1，如果没点亮，则代表二进制数字0.

二进制数与计算机之间有着紧密的联系。

1948年美国数学家John Wilder Turkey用选用"bit"这个词来代表二进制数（binary digit）。
