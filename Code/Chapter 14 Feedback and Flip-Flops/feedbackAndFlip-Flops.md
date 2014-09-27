反馈与触发器
===========

### 振荡器

电子蜂鸣器和电铃能很清晰地阐释电能驱使物体运动的最简单也最具代表式的方式。

将继电器、电池、开关按如下形式连接。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-25%20下午1.37.47.png)

这里输入和输出构成了一个回路。开关闭合时，电路就连通了。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-25%20下午1.37.54.png)

连通的电路使得电磁铁把金属簧片拉了下来

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-25%20下午1.38.01.png)

当金属簧片的位置变化时，电路不再连通，电磁铁不再具有磁性，金属簧片又弹回原位。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-25%20下午1.38.08.png)

如此一来，电路又一次连通。

从整个过程来看：开关一旦闭合,金属簧片就会上下跳动——电路也会随之连通或断开——声音也会随之发出。如果金属簧片发出刺耳的声音，这套系统就会成为蜂鸣器。如果金属簧片前端是一把小锤子，旁边只要放上一个锣，就构成了一个电铃。

下面是另一种连接成蜂鸣器的描述，在示意图中包含了一个标准电压符号和一个接地符号。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-25%20下午1.38.17.png)

看到这幅图立马能想起第11章介绍过的反向器，因此电路可以简化为如下图所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-25%20下午1.38.21.png)

当电路中的开关一旦闭合，反向器就会连通与断开这两种状态之间反复交替。我们将电路中的开关省去，这样可以使反向器连续地工作，如下所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-25%20下午1.38.25.png)

这幅图似乎在表达着一种矛盾的逻辑，反向器的输出与其输入是相反的，但是在这里，输出同时又是输入！然而，我们要牢牢记住，反向器在本质上就是继电器，继电器将状态取反以得到另一个状态需要一点点时间。所以，即使输入和输出是相同的，输出也会很快地改变，成为输入的相反状态（当然，输出随即也会很快改变输入，如此反复）。

电路的输出是什么呢？其实就是要么提供电压，要么不提供电压，在两者之间切换。两种状态我们用二进制来表达——输出结果要么是0，要么是1.

我们把这个电路称为振荡器（oscillator），它和我们先前学到的所有东西存在本质上的区别。区别在于振荡器不需要人干涉，可以完全自发地工作。

在自动控制系统中，振荡器有着举足轻重的作用。

当采用0和1的交替序列来表示振荡器的输出时，我们一般使用下面这样的图来形象地描述输出。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午1.50.23.png)

为了充分地了解电路的输出，为其添加坐标，水平坐标代表时间，垂直坐标代表输出是0还是1.

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午1.50.28.png)

这幅图表示随着时间的推移，振荡器的输出在0和1之间按照固有的规律交替变化。正因为这点，振荡器又经常被称为时钟（clock），通过振荡器进行计数也是一种计时的方法。

振荡器从某个初始状态开始，经过一段时间又回到之前初始的状态的这一段间隔定义为振荡器的一个循环（cycle），或者称为一个周期，如下图所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午1.50.41.png)

一个循环所占用的时间就是该振荡器的周期（period）。假设我们使用的振荡器的周期恰好是0.05s, 任取一个时间点，将其设置为起始状态点，我们把它标注为零点，就可以在水平轴上标出相应的时间。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午1.50.52.png)


周期的倒数是振荡器的频率（frequency).在这个例子中振荡器的周期是0.05s，那么其频率就是1/0.05s，即振荡器每秒钟产生20次循环，而相应的输出每秒种也变化20次。

每秒钟的循环次数，顾名思义，非常容易理解。为了纪念发送和接受于无线电波的第一人——亨里希·鲁道夫·赫兹，后人使用“赫兹”这个词来表示这个概念。

这样，上述振荡器的频率就是20赫兹，记作20Hz。

目前为止，我们只是猜测振荡器的速度。在本章后面我们将用振荡器构建可以测量振荡器速度的元件。

### 反馈

在此之前，让我们先来看看采用特殊方式连接的一对或非门。或非门的特点是只有两个输入端没有电压时，输出端才产生电压。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午1.51.08.png)

下面是个包含两个或非门、两个开关和一个灯泡的电路。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午5.28.44.png)

值得注意的是这种特殊的弯曲的连接方式：左边或非门的输出是右边或非门的输入，而右边或非门的输出是左边或非门的输入。这种连接方式我们称之为**反馈**(feedback).系统的输出返回给输入这种形式和振荡器很相似。

初始状态下，左边的或非门两个输入端均为0，故电路输出电流。

现在闭合上面的开关，左边的或非门立刻输出为0，右边的或非门的两个输入端变为0，那么输出端随之变为1.这时灯泡将被点亮。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午5.29.26.png)

奇妙的是，这时一旦你断开上边的开关，灯泡依然闪闪发光。这是因为系统和输出为1，返回给左边的或非门的输入也为1。因为左边或非门一个输入为1，另一个输入开关无论怎么闭合或者断开，其输出依然是0，因而左边的或非门的输出不变，所以灯泡仍然亮着。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午5.29.35.png)

难道你不觉得奇怪吗？两个开关都断开——和第一幅场景描述的一模一样——但这里的灯泡去仍发光。无论上边的开关怎么调整其状态，灯泡总是亮着。这个开关对电路毫无影响，究其原因可以发现这是由于左边或非门的输出一直为0.

现在试着闭合下面的开关。我们会发现右边的或非门的输入中有一个立刻变为1，其输出相应地变为0，灯泡随之熄灭。左边或非门的输出此刻变为1.

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午5.29.42.png)

这时再去断开下面的开关就会发现，灯泡一直处在熄灭状态。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午5.29.47.png)

此时的电路状态与初始时是一样的。但是这次无论你怎么改变下面开关的状态，灯泡丝毫不受影响。

### 触发器

我们将这个电路的情况总结一下：

- 接通上面的开关，灯泡被点亮，断开此开关灯泡仍然亮着。
- 接通下面的开关，灯泡被熄灭，断开此开关灯泡仍然不亮。

电路的奇怪之处是：同样是在两个开关都断开的状态下，灯泡有亮着和不亮着两个状态。当两个开关都断开时，电路有两个稳定态，这类电路统称为触发器（Flip-Flop).

触发器电路可以保持信息，它可以“记住”某些信息。特别地，对于本章先前所讲述的触发器，它可以记住最近一次是哪个开关先闭合。如果灯泡是亮着的，可以推测最后一次连通的是上面的开关；而如果灯泡是不亮着，可以推测出最后一次联通的是下面的开关。

触发器和跷跷板有着很强的相似性。跷跷板也有两个稳定态，通过观察跷跷板，我们很容易推测出哪边最后一次被压下来。

能计数的电路必定需要触发器。

#### R-S触发器

先前讲述的最简单的一种R-S(Reset-Set,复位/置位)触发器。我们通常把两个或非门绘制成另一种形式，加上标识符就得到了下面这幅图。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午5.44.12.png)

我们通常用Q来表示用于点亮灯泡的输出的状态。另一种输出是对Q的取反。输入端S（Set）用来置位，R（Reset）用来复位。可以把“置位”理解为把Q设为1，而“复位”是把Q设为0.可以这样，便于记忆，闭合下面的开关，点亮上面的灯泡；闭合上面的开关，点亮下面的灯泡。

当状态S为1时（对应于先前触发器中上面的开关闭合的情况），此时Q变为1而1-Q变为0；当R状态为1时（对应于前面图中闭合下面的开关的情况），此时Q变为0而1-Q变为1.当S和R均为0时，输出保持Q原来的状态不变。我们把结论总结如下表所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.11.35.png)

这类表称为功能表（function table）、逻辑表（logic table）或真值表（truth table）。它表达了不同输入组合所对应的不同输出结果。因为R-S触发器仅有两个输入端，所以不同的输入组合共有4种，分别对应于表中的4行。

注意表中倒数第二行，这一行输入S和R均为0，而输出标识为Q和1-Q。这表示当S和R输入均为0时，Q和1-Q端的输出保持为S、R同时被设为0以前的输出值。

表中最后一行，表示R和S输入同时为1的情况一定要避免。因为R、S状态同时为1时，Q和1-Q均为零，这与Q和1-Q互反的假设关系矛盾。

R-S触发器可以简化为带有输入和输出标识的小框图，就像下面画的这样。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.11.43.png)

#### 电平触发的D型触发器

R-S触发器最突出的特点在于，它可以记住哪个输入端的最终状态为1.但是我们有时候需要一种记忆能力更加强大的电路，例如记住某个特定时间点上的信号是0还是1.

在构造具备这种功能的电路之前，让我们来思考一下它的具体行为。这个电路存在两个输入。我们称为数据端（Data）和保持位（Hold That Bit）。数据端取值为0或1；保持位把当前的状态“记下”。保持位为0时，数据端的输入对电路不影响。当保持位置1时，数据端的值就会在电路系统中被“记住”，随后保持位又置为0，这时电路已经“记住”了数据端的最后一次输入，而之后数据端的输入无论如何变化都对电路不影响。

我们把状态转化的过程以真值表的形式表示如下。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.12.01.png)

保持位为1时，输出Q与数据端输入相同；保持位为0时，输出Q和前一个状态保持一致。值得注意的是，保持位为0时，意味着输出将不再变化，也就是说不再被数据端所影响，我们可以进一步将真值表化简为如下所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.12.07.png)

X表示“其取值情况与结果无关”，只要保持位的值为0，那么数据位对电路的输出没有影响，电路的输出和其前一个状态相同。

根据真值表可以很清楚地发现，我们可以在R-S触发器电路中的输入端增加两个与门，下图说给出了该系统的实现电路。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.13.14.png)

回忆一下与门，输入端都为1的状态下，输出才为1.在上面这幅图中，输出端Q为0，1-Q为1.

观察上图，可以很容易地发现，上面与门的输出为复位端的输入，下面与门的输出为置位端的输入，电路系统的功能和普通的R-S触发器是一样的。就是保持位起到了对与门的输入进行筛选。

但是我们离目标还差一点。我们只想要两个输入，而不是三个，怎么解决这个问题呢？先回忆一下R-S触发器的功能表：两个输入端同时为1是非法的，要尽量避免；而两个输入端同时为0是无意义的，因为那种情况输出和前一个状态相同。我们只要保持位设置为0，就完全可以实现相同的功能。

由此可以总结出，真正有意义的输入可以是S为0，R为1或者R为0，S为1的情况。如果把数据端信号看作置位信号，把它取反后的值看作复位端信号，我们可以构建出相应的电路图如下所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.13.51.png)

这个电路称为电平触发的D型触发器,D（Data）表示数据端输入。所谓电平触发指当保持位输入为某一特定电平（本例为“1”）时，触发器才保存数据端的输入值。

### 锁存器

#### 1位锁存器

通常情况下，当这种电路出现在书中的时候，输入端是不会被标记为保持位，而是被标记为时钟（clock）。它有着类似时钟的属性，可以在0和1之间有规律地来回变化。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.13.59.png)

通常把数据端简写为D，时钟端简写为Clk，其功能表如下所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.14.09.png)

这个电路也就是所谓的电平触发的D型锁存器，它表示电路锁存住一位数据并保持它，以便将来使用。这个电路也可以称为1位锁存器。

#### 8位锁存器

对于3个数字的加法，我们可以用8位锁存器存储中间值并用于与最后一个数相加。我们将1位锁存器所有的时钟端互相连在一起，组成8位锁存器.如下所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.14.23.png)

这个锁存器可以一次保存8位数。上面的8个输入端一次标记位D0～D7，下面的8个输出端被标记为Q0～Q7.左边的输入是时钟（Clk），时钟信号通常为0.当时钟信号为1时，D端输入的9位值被送到Q端输出。当时钟信号为0时，这8位值将保持不变，直到时钟信号再次被置1.

下图简化一下8位锁存器。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.17.23.png)

### 改进加法器

#### 在加法器中添加锁存器

下图是8位加法器。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.18.00.png)

通常（先不考虑减法器），8个A输入端和8个B输入端连接到开关上，CI（进位输入）接地，而8个S（计算和）输出以及CO（进位输出）端连接到灯泡上。

经过改进，8位加法器的8个S输出端既与灯泡相连，又连接到8位锁存器的数据输入端。标记为“保存”（Save）的开关是锁存器的时钟输入，用来存放加法器的运算结果。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.18.47.png)

#### 2-1选择器

标识2-1选择器的方块是让你用一个开关来选择加法器的B端输入是取自第2排开关还是取自锁存器的Q端输出。当开关闭合时，就选择了用8位锁存器的输出作为B端输入。根据2-1选择器的功能列出真值表。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.21.17.png)

如果选择端（Select）输入是1，那么或门的输出和B端的输入就是一致的；如果选择端的输入是0，那么或门的输出则和A端输入一致。故2-1选择器使用8个如下所示电路。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.21.31.png)

改进后的加法器包含了8个这样的1位选择器。所有的选择端输入信号都是连在一起的。

#### 清零信号

改进后的加法器不能很好地处理进位输出（CO）信号。如果两个数相加使得进位输出信号为1，那么当下个数被加进来的时候，这个信号将被忽略掉。

对于加法器来说，一个更好的改进方法是去掉一整排8个开关。但是首先要对D触发器做一些修改，添加清零（Clear）的输入信号。它的功能是清零信号为1时，Q输出为0；故上端的或非门的输入要为1.因此在D型触发器加一个或门和一个清零的输入信号。如下图所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.21.57.png)

#### 适合多数相加的加法器

你也许还不明白为什么要设置这个信号，为什么不通过把数据端输入置0和时钟端输入置1来使触发器清零呢？则也许是因为我们并不能控制数据端的输入。我们可能有一组8个锁存器，它们连着8位加法器的输出端，如下图所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午6.22.16.png)


注意，标识为“相加”（Add）的开关现在控制着锁存器的时钟输入。

你会发现这个加法器比前面的那个好用，特别是当你需要进行多次加运算的时候。首先按下清零开关，这个操作会使锁存器的输出为0，并且熄灭了所有的灯泡，同时使8位加法器的第2行输入全为0. 然后，通过开关输入第一个加数，并且闭合“相加”开关，这个加数的置就反映在灯泡上。再输入第二个加数并再次闭合“相加”开关。由于开关输入的8位操作数加到前面的结果上，所得的和体现到灯泡上。反复如此操作，可以连续进行很多次加法运算。

前面提到过，我们设计的D触发器是电平触发的，只有当时钟的输入从0变为1（即高电平）才能将数据端的值保存再锁存器中。但是，当时钟端输入为1时，数据端的输入是可以改变的，这时数据端输入的任何改变都会反映在Q和1-Q的输出值中。

### 边沿触发

对某些应用而言，电平触发时钟输入已经足够用了；但是对另外一些应用来说，边沿触发（edge-triggered)时钟输入则更有效。对于边沿触发器而言，只有当时钟从0跳变到1时，才会引起输出的改变。它们的区别在于，电平出发其中，当时钟输入为0时，数据端输入的任何改变都不会影响输出；而在边沿触发器中，当时钟输入为1时，数据端输入的改变也不会影响输出。只有在时钟输入从0变为1的瞬间，数据端的输入才会影响边沿触发器的输出。

#### 边沿触发的D型触发器

为了要实现边沿触发的特性，我们可能需要两个R-S触发器来实现。当时钟信号为0时，第一个触发器保存数据，当时钟信号变为1时第二个触发器保存数据。则意味着可以让时钟输入端既控制着第一级R-S触发器，也控制着第二级，而且时钟信号在第一级中进行了取反操作。因此边沿触发的D型触发器是由两级R-S触发器按如下方式连接而成的。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午7.01.11.png)

只有当时钟信号由0变为1时，数据端输入才被保存下来。

进一步分析，下图为一个处于非工作状态的触发器，其数据输入和时钟输入均为0，且Q输出也为0.

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午7.12.59.png)

现在数据端输入为1，如下图所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午8.16.35.png)

这改变了第一级触发器的状态，因为时钟输入取反变为1.但第二级触发器状态保持不变，因为时钟输入仍然为0.现在把时钟输入变为1.

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午8.21.00.png)

这就引起了第二级触发器输出的改变，使Q输出变为1.不同点在于，无论数据端输入发生何种变化（比方说变为0）都不会影响Q的输出。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-26%20下午8.23.41.png)

边沿触发的D型触发器的功能表需要一个新的符号来表示从0到1的瞬间变化，即用一个向上的箭头表示，如下表所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.13.29.png)

表中箭头表示当时时钟端由0变为1时（称为时钟信号的“正跳变”，“负跳变”是指从1变为0），Q端输出与数据端输入是相同的。触发器的符号如下图所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.13.37.png)

图中的小三角符号表示触发器是边沿触发的。

#### 分频器

下面展示的是一个使用沿用D型触发器的电路，这个电路是不能用电平触发发形式复制出来的。先回忆一下本章开始构造的振荡器，其输出在0和1之间变化。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.13.43.png)

把振荡器的输出与边沿触发的D型触发器的时钟端输入连接，同时把1-Q端输出连接到本身的D输入端。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.13.47.png)

这个触发器的输出同时又是它自己的输入。反馈紧接着反馈！（实际上，这种构造可能是有问题的，振荡器是由状态来回迅速改变的继电器构成的，其输出与构成触发器的继电器相连，而这些其他的继电器不一定能跟得上振荡器的速度。为了避免这些问题，这里假设振荡器中的继电器比电路中其他地方的继电器速度要慢得多）。

仔细看一下下面的功能表就可以明白电路中发生的情况了，电路启动时，假设时钟输入为0且Q输出也为0，则1-Q端输出为1，而1-Q是和D端输入相连。

当时钟输入从0变为1时，Q输出与D输入相同。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.13.53.png)

但是由于1-Q的输出变为0，因此D输入也变为0.现在时钟输入为1，如下表所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.13.58.png)

当时钟输入变回0时，不会影响输出，如下表所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.14.03.png)

现在时钟端输入又变为1.由于D输入为0，那么Q输出为0且1-Q输出为1.

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.14.09.png)

所以D输入也变为1，如下表所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.14.16.png)

以上发生的现象可以简单总结为：每当时钟输入由0变为1时，Q端输出就发生边哈 u，或者从0到1，或者由1到0.下面的时序图可以更加清楚地说明这个问题。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.14.21.png)

当时钟端Clk输入由0变为1时，D的值（与1-Q的值相同）被输出到Q端。当下一次Clk信号由0变为1时，D和1－Q的值同样改变。

如果这个振荡器的频率是10Hz（即20个周期的时间为1s），那么Q的输出频率是它的一半，即10Hz，由于这个原因，这种电路称为分频器（frequency divider），它的1-Q输出反馈到触发器的数据端输入D。

#### 计数器

当然，分频器的输出可以作为另一个分频器的Clk输入，并再一次进行分频.下面是三个分频器连接在一起的示意图。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.14.26.png)

上图顶部的4个信号变化规律如下所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.14.31.png)

这里只给出了这幅图的一部分，因为这个电路会重复上述过程周而复始地变化下去。在这幅图中，你有没有发现眼熟的东西呢？

提示一下，把这些信号标上0和1.

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.14.37.png)

再试着把这个图顺时针旋转90度，然后读一读没遗憾的4位数字，它们分别对醒了十进制中0～15中的一个数。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.14.43.png)

可以看出来，这个电路具备了计数功能，如果再这个电路中添加更多触发器，其计数范围就会更大。

在每一次时钟信号的正跳变时，计数器的输出时增加的，即递增1.因此，看信号变化规律图，1-Clk每从高电平降到低电平，下面的Q1就从低电平升到高电平，Q1从高电平降到低电平时，Q2就从低电平升为高电平。以此类推。

第8章中提到一个顺序递增的二进制序列的规律，每一列数字在0和1之间的变化频率是其右边的一半，这个计数器就是模仿了这一点。观察信号变化规律图，1-Clk每运行一个周期时，Q1只运行半个周期，Q1运行一个周期时，Q2运行半个周期，以此类推。

把8个触发器连接在一起，然后放入一个盒子中，构成了一个8位计数器。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.14.54.png)

这个计数器称为“8位行波计数器”，因为每一个触发器的输出都是下一个触发器的时钟输入。变化是在触发器中一级一级地顺序传递的，最后一级触发器的变化必定会有一些延迟，更先进的计数器是“并行（同步）计数器”，这种计数器的所有输出是在同一时刻改变。

在计数器中输出端用Q0～Q7标记，在最右边的Q0是第一个触发器的输出。如果将灯泡连到这些输出端上，就可以将8位数数字读出来了。

这样一个计数器的时序图可以将8个输出分别表示出来，也可以将它们作为整体一起表示出来，如下图所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.15.03.png)

4位信号每半个周期二进制编码递增为1，8位行波计数器时钟每一个正跳变，二进制编码递增为1观察信号变化规律图，1-Clk每运行一个周期时，Q1只运行半个周期，Q1运行一个周期时，Q2运行半个周期，以此类推。

把8个触发器连接在一起，然后放入一个盒子中，构成了一个8位计数器。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.15.09.png)

这个计数器称为“8位行波计数器”，因为每一个触发器的输出都是下一个触发器的时钟输入。变化是在触发器中一级一级地顺序传递的，最后一级触发器的变化必定会有一些延迟，更先进的计数器是“并行（同步）计数器”，这种计数器的所有输出是在同一时刻改变。

在计数器中输出端用Q0～Q7标记，在最右边的Q0是第一个触发器的输出。如果将灯泡连到这些输出端上，就可以将8位数数字读出来了。

这样一个计数器的时序图可以将8个输出分别表示出来，也可以将它们作为整体一起表示出来，如下图所示。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.15.09.png)

4位行波计数器每个跳变，二进制编码递增为1; 8位行波计数器时钟每一个正跳变，二进制编码递增为1。8位是4位频率的一半，正好在时钟每个正跳变是编码加1.

#### 计数器计算振荡器频率

把一个振荡器连接到8位计数器的时钟输入端上，那么这个计数器会显示出振荡器经过的循环次数。当计数器总数达到11111111（十进制的255），它又返回为000000000.使用计数器确定振荡器频率的最简单的方法就是把计数器的8个输出端分别接到8个灯泡上。当所有的输出都是0时（即所有灯泡都是熄灭的），启动一个秒表计时；当所有灯泡都点亮时，停止秒表计时。这就是振荡器循环256次所需要的时间。假设这个时间为10s，则振荡器的频率是256/10,即25.6Hz。

#### 带预置和清零功能的边沿型D触发器

通常情况下，预置和清零信号输入会覆盖时钟和数据端输入，且两个输入都为0，当预置信号为1时，Q变为1，1-Q变为0.当清零信号为1，Q变为0，1-Q变为1（同R-S触发器中的S和R输入端一样，预置和清零信号不能同时为1）。除此之外，该触发器的工作原理是和普通边沿D触发器是一样的。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.15.17.png)

电路图如下。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.15.26.png)

电路图符号可以简单地用下图代替。

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2014%20Feedback%20and%20Flip-Flops/屏幕快照%202014-09-27%20下午12.15.33.png)

现在，我么已经懂得如何使用继电器做加法，减法和计数了，这是一件很有成就感的事情，因为我们使用的硬件是100多年前就存在的东西。

