如何实现减法
============

继电器连接到一起也可以实现减法。加法和减法在某些方面可以相互补充，但机制又不同。加法是进位机制，而进发是借位机制——一种与加法存在本质区别的麻烦机制。故可以大体上用加法实现减法，但细节上又有些不同。

我么打算用一个小技巧让减法不涉及借位。

### 实现减法的算法

为了便于表达，将进行减法的两个数分别用于被减数（minuend)和减数（subtrahend）表示。从被减数中减去减数，得到的结果叫做差（difference）。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.14.35.png)

为了避免借位，首先从999减去减数。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.14.47.png)

这叫对9求补数。这样的好处是无论减数是多少，计算对9的补数都不需要借位。

计算出减数对9的补数后，将补数与原来的被减数相加。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.15.00.png)

最后再将结果加1，并减去1000.

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.15.09.png)

到此就得到差，而且没有用到错位。

我们用两个减法和两个加法来替代一个减法，而这个过程中避免了繁琐的错位。

#### 减数大于被减数的情况

要解决这个问题而不使用借位的话， 就要采用与之前稍微不同的方法。首先要像前面一样，用999减去减数，计算出对9的补数：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.15.36.png)

把该数对9的补数与被减数相加：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.15.42.png)

由于之前已经加了999，这里再减去999：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.15.50.png)

到这里，意识到这个问题的结果是个负数，因此我们需要将减数与被减数交换。这里没有用到错误，结果也与我们期望相同：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.15.55.png)

同样的技巧可以用于二进制数中，让我们来看看如何操作。

问题变为：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.16.23.png)

第一步，用11111111减去减数：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.16.44.png)

我们发现在对1求补数的时候，只需将原来的二进制数中的1变为0，将0变为1即可。因此对1求补数有时也称为相反数（negation）或反码（inverse）。这里你可能会想到第11章的反向器，它的作用就是将0变为1，将1变为0.

第二步，将减数对1的补数与被减数相加。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.16.52.png)

第三步，将上式所得到的结果加1：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.16.57.png)

第四步，减去1000000000:

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.17.22.png)

结果就等于十进制的77.

我们把这两个数颠倒位置后再做一遍。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.17.27.png)

第一步，用11111111减去简述好，得到对1的补数：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.17.32.png)

第二步，将减数对1的补数与被减数相加：



现在我们用第二步得到的结果对1求补数：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.17.37.png)

这个结果是77，而真正的档案应该是-77.

### 加/减法器

到这里，我们已经有了足够的条件来改造上一章所搭建的加法器，并让它像实现加法一样来实现减法运算。为了不让问题太复杂，这个新的加/减法器只执行在减数小于被减数的减法操作，即结果为正数的操作。

该加法器的核心是由逻辑门集成的8位加法器。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.17.52.png)

8位加/减法器所用的新面板较从前做了些许的改动。它增设了一个开关，用以选择做加法还是减法。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.18.07.png)

如上图所示，这个开关向下断开时表示选择加法运算，反之向上接通则表示选择减法运算。此外，右侧的8个灯泡用于表示计算结果。这里，第9个灯泡表示“上溢/下溢”。如果在加法运算中结果大于255（上溢，overflow）或在减法中结果是负数（下溢，underflow）这个灯泡就会发光。

加法器中新增的主要部分就是一个用来求8位二进制数对1补数的电路。二进制数对1求补数相当于对其每位取反，因此可以用8个反向器实现这个功能。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.18.15.png)

问题是，该电路只对输入求反，而我们要的是一台既能做加法又能做减法的机器，因此就要求该电路但且仅当进行减法运算时才实现反转。电路可以改造为如下图所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.18.19.png)

标记为“取反”的信号将被输入到每一个异或门中。回想一下异或门的工作方式如下表所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.18.40.png)

可以看出，在异或门中，“取反”信号是0，则8个异或门输出与输入相同。如果取反信号为1，则输出信号反置。

将8个异或门合并起来画成一个器件，称为求补器（One's Complement).

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.18.49.png)

将一个求补器，一个8位二进制加法器和一个异或门做如下连接。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.19.02.png)


> 注意，这里三个信号都标识为“SUB”，这就是加/减法转换开关。求补器位置的“SUB”置0表示加法运算，置1表示减法运算。此外，在做减法时，通过设定CI（进位输入）为1来使得结果加1.而在加法中，求补器不起作用，且输入CI为0.

> 加法器的SUB信号和CO（进位输出）输出作为异或门的输入来控制表示上溢/下溢的灯泡。如果SUB信号为0（表示进行加法运算），则当加法器CO输出为1时灯亮，意思是加法计算结果大于255.

> 当进行减法运算的时候，如果被减数大于减数，则CO端正常输出为1。由于是减法运算，SUB信号为1，通过异或门，上溢/下溢输出为0，这表示在减法的最后一步中减去100000000.

### 负数在二进制中的表示

负数在二进制中如何表示呢？

可以同十进制一样应用传统的负数符号。例如，-1001101.但是应用二进制数的目的恰恰就在于只希望用0和1来表示所有的东西，当然也包括负号。

当然，可以简单地用一个二进制位来表示负号。当这一位为1时表示负数，为0时表示正数。尽管这样可行，但远远不够。

还有另外一种解决负数的表示问题，而且它还可以很轻松地让负数和正数相加。这种方法的缺点是必须提前算一下可能遇到的所有数字的位数。

通常情况下，因为我们无法预测数的范围，故我们表示数时，以0为中点，正数沿着一个方向延伸，负数沿着另一个方向延伸：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.19.22.png)

但是如果我们并不需要无限大或无限小的数，而且在开始的时候我们可以预知所使用的数字的范围，那情况就有所不同。

假设我们要表示的数字范围是从-500~499,总共1000个数字。我们只能用3位十进制数，且可不用负号表示这1000个数。因为我们所需要的数的最大值为499，我们不需要用到从500到999之间的正数。因此从500到999的三位数可以用来表示负数，具体情况如下：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.19.36.png)


用这种表示法，我们可以它们写成：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.19.43.png)

> 注意，这就形成了一个循环排序。最大正数（499）的延续（500）表示最小负数，数字999加上1，通常得到1000.由于我们处理的是三位数，这个结果实际上就是000.

这种标记方法称为10的补数（ten's complement).为了将三位负数转化为10的补数，我们用999减去它再加1.也就是，对10求补数就是对9的补数再加1.

利用10的补数，我们将不会再用到减法。所有的步骤都用加法来进行。

第一步，我们对减数求10的补数

第二步，将被减数加上减数对10的补数

得到的结果就是差。

这样的机制在二进制中被称为2的补数。以8位二进制数为例。范围为00000000～11111111，对应十进制0～255.但是如果像表示负数的话，则以1开头的每个8位数都表示一个负数，如下表所示。

| 二进制数 | 十进制数|
|----------|---------|
| 10000000 |   -128  |
| 10000001 |   -127  |
| 10000010 |   -126  |
|    ...   |    ...  |
| 11111101 |    -3   |
| 11111110 |    -2   |
| 11111111 |    -1   |
| 00000000 |     0   |
| 00000001 |     1   |
| 00000002 |     2   |
|    ...   |    ...  |
| 01111101 |    125  |
| 01111110 |    126  |
| 01111111 |    127  |

现在所表示的数的范围是-128~+127。最高有效位（最左位）作为符号位（sign bit）符号位中，1表示负数，0表示正数。

为了计算2的补数，则首先要计算1的补数，然后再加1.这就是将每位取反后再加1.

利用这个系统，进行二进制的减法运算就方便许多。例如，将与-127和124等价的两个二进制数相加。利用上面的表格，可以简单地写为：

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2013%20But%20What%20About%20Subtraction/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-09-25%20%E4%B8%8A%E5%8D%882.20.12.png)

结果等于十进制的-3.

> 由于我们处理的数值为8位，超过8位加法是无效的。一般来说，如果两个操作数的符号相同，而结果的符号与操作数的符号不相同，这样的加法就是无效的。

现在，二进制数可以有两种不同的使用方法。二进制数可以是有符号的，也可以是无符号的。无符号的8位二进制所表示的范围是0～255.有符号的8位二进制表示的范围是-129~127.无论是有符号还是无符号的，数值本身是无法现实的。例如，如果有一个人问：“有一个8位二进制数，值为10110110.它相当于十进制的多少？”你必须先问：“它是有符号数还是无符号数？它可能是-74或者182.”


