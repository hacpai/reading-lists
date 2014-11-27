渐进符号和基本效率类型
======================

前一节中指出，效率分析框架主要关心一个算法的基本操作次数的增长次数。基本操作次数的增长次数作为算法效率的主要指标。为对这些增长次数进行比较和归类，计算机科学家使用了3种符号：O（读作“O”），Ω（读作“omega”），Θ（读作“theta”）。

在下面的讨论中，一个算法的运行时间（常常用基于操作次数C(n)来表示），g(n)是一个用来和该操作次数做比较的函数。

### 非正式介绍

非正式来说，O(g(n))是增长次数小于等于g(n)（以及其常数倍，n趋向于无穷大）的函数集合。下面几个例子，它们的断言都为真：

> n ∈ O(n^2), 100n + 5 ∈ O(n^2), 1/2n(n-1) ∈ O(n^2)

前两个函数都是线性函数，增长次数比g(n) = n^2的要小，最后一个是平方函数，和n^2相同的增长次数。另一方面，

> n^3 ∉ O(n^2), 0.0001n^3 ∉ O(n^2), n^4 + n + 1 ∉ O(n^2)

n^3和0.0001n^3都是立法函数，增长次数比n^2大；对于四次多项式n^4 + n + 1也是如此。

第二个符号，Ω(g(n))，代表增长次数大于等于g(n)（以及其常数倍，n趋向于无穷大）的函数集合。例如：

> n^3 ∈ Ω(n^2), 1/2n(n-1) ∈ Ω(n^2), 但是100n + 5 ∉ Ω(n^2)

Θ(g(n))是增长次数等于g(n)（以及其常数倍，n趋向于无穷大）的函数集合。因此，每一个二次方程an^2+bn+c在a>0的情况下都包含在Θ(n^2)中。

通过前面的非正式讨论，对于这3个渐进符号背后所包含的思想已经有所熟悉了。因此，我们现在来做一个非正式的定义。

### 符号O

**定义1** 函数t(n)包含在O(g(n))中，记作t(n) ∈ O(g(n)); 它的成立条件是：

> 对于所有的n≧n0来说，t(n) ≦ cg(n)

图2.1说明了这个定义，我们在图中，将n扩展为实数。

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202014-11-27%2013.52.06.png)

作为例子，我们对前面介绍中的断言做一个正式的证明：100n + 5 ∈ O(n^2).

> 100n + 5 ≦ 100n + n(当n≧5) = 101n ≦ 101n^2

因此，我们得到了定义中要求的常量c和n0的值，它们分别是101和5.

注意，该定义给了我们很大的自由度来选择常量c和n0的特定值。例如，我们也可用以下推导来完成证明：

> 100n + 5 ≦ 100n + 5n(当n≧1) = 105n

这时，c＝105而n0 ＝1.

### 符号Ω

**定义2** 函数t(n)包含在Ω(g(n))中，记作t(n)∈Ω(g(n))，成立条件是：

> 对于所有的n≧n0来说，t(n) ≧ cg(n)

图2.2说明了这个定义。

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202014-11-27%2013.52.13.png)

这个例子是n^3 ∈ Ω(n^2)的一个正式证明：

> 当n≧0时，n^3 ≧ n^2

也就是所，我们可以选择c=1及n0=1.

### 符号Θ

**定义3** 函数t(n)包含在Θ(g(n))中，记作t(n)∈Θ(g(n)), 它的成立条件是：

> 对于所有n≧n0来说，c2g(n)≦t(n)≦c1g(n)

图2.3说明了这个定义。

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2014.05.47.png)

作为一个例子，让我们来证明1/2n(n-1)∈Θ(n^2)。首先，我们证明右边的不等式（上界的情况）：

> 当n≧0时，1/2n(n-1) = 1/2n^2 - 1/2n ≦ 1/2n^2

其次，我们来证明左边的不等式（下界的情况）：

> 1/2n(n-1) = 1/2n^2 - 1/2n ≧ 1/2n^2 - 1/2n·1/2n(当n≧2) = 1/4n^2

### 渐进符号的有用特性

某些算法是由两个连续的执行部分组成的，在对它们进行分析时，下列特质特别有用。

**定理** 如果t1(n)∈O(g1(n))并且t2(n)∈O(g2(n)),则

> t1(n) + t2(n) ∈ O(max{g1(n), g2(n)}) 

(对于符号Ω和Θ符号，类似的断言也为真)

**证明** （就像我们看到的，增长次数的证明是基于以下简单事实：4个任意实数a1，b1，a2和b2，如果a1≦b1并且a2≦b2，则a1+a2≦2max{b1, b2}. 

又因为t1(n)∈O(g1(n))存在常量c1和n1，使得：

> 对于所有的n≧n1，t1(n)≦c1g1(n)

因为t2(n)∈O(g2(n)),

> 对于所有的n≧n2，t2(n)≦c2g2(n)

假设c3＝max{c1, c2}, 并且n≧max{n1, n2},则：

> t1(n)+t2(n) ≦ c1g1(n) + c2g2(n)
>             ≦ c3g1(n) + c3g2(n) = c3[g1(n) + g2(n)]
>             ≦ c32max{g1(n), g2(n)}

因此，t1(n) + t2(n) ∈ O(max{g1(n), g2(n)}), 这时，满足符号O定义的c和n0的值分别为2c3＝2max{c1, c2}和max{n1, n2}.

它意味着该算法的整体效率是由具有较大增长次数的部分所决定的，即它效率较差的部分决定的

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2014.29.38.png)

### 利用极限比较增长次数

符号O，Ω和Θ的正式定义对于证明它们的抽象性质是不可缺少的，但我们很少直接用它们的定义来比较两个特定函数的增长次数。一种较为简便的比较方法，基于对所讨论的两个函数的比率求极限。有3种极限情况会发生：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2014.36.07.png)

注意，前两种情况意味着t(n)∈O(g(n)),后两种情况意味着t(n)∈Ω(g(n)),第二种情况意味着t(n)∈Θ(g(n)).

基于极限的方法常常比基于定义的方法更方便，因为它可以利用强大的微积分技术计算极限，比如说洛必达法制

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2014.38.52.png)

和史特林公式

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2014.38.56.png)

下面3个例子用极限法来比较两个函数的增长次数。

**例1** 比较1/2n(n-1)和n^2的增长次数（可以一眼看出来）

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2014.40.52.png)

因为极限等于一个为正的常量，所以这两个函数具有相同的增长次数，也可以用符号的形式表达为1/2n(n-1)∈Θ(n^2).

**例2** 比较logn和√n的增长次数。

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2014.43.49.png)

因为极限等于0，logn的增长次数比√n小。

**例2** 比较n!和2^n的增长次数。利用史特林公式，我们有

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2014.44.01.png)

因此，虽然2^n增长很快，但n!增长得更快。我们可以用符号记作n!∈Ω(2^n).

