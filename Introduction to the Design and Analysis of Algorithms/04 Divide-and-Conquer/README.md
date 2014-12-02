分治法
=====

分治法可能是最著名的通用算法设计技术了。很多非常有效的算法实际上是这个通用算法的特殊实现。分治法是按照以下方案工作的：

1. 将问题的实例划分为同一个问题的几个较小的实例，最好拥有同样的规模。
2. 对这些较小的实例求解（一般使用递归方法，也会使用一些其他方法）。
3. 必要的话，合并这些较小问题的解，以得到原始问题的解。

分治法的流程参见图4.1，该图描述的是将一个问题划分为两个较小子问题的例子。

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/04%20Divide-and-Conquer/屏幕截图%202014-12-02%2019.38.14.png)

作为一个例子，我们假设待解决问题是计算n个数字a0,...,an-1的和。如果n > 1,计算前[n/2]个数字的和以及计算后[n/2]个数字的和。一旦这两个和都被计算出来了（通过递归应用上述方法），就可以把这两个和相加，来得到原始问题的答案：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/04%20Divide-and-Conquer/屏幕截图%202014-12-02%2019.38.33.png)

求和的例子显示了分治法的最典型应用：问题规模为n的实例被划分为两个规模为n/2的实例。但不会比简单地顺序相加效率更高。下面我们分析分治法的效率。

一般的情况下，规模为n的实例划分为若干个规模为n/b的实例，其中a个实例需要求解。为了简化分析，我们假设n是b的乘方，对于算法的运行时间，我们有下列递推式：

> T(n) = aT(n/b) + f(n).                                      (4.1)

f(n)表示将问题分解为小问题和将结果合并起来所消耗的时间。递推式4.1为**通用分治递推式**.T(n)de增长次数取决于常量a和b的值，以及函数f(n)的增长次数。在分析许多分治算法的效率时可以应用下列定理简化我们的工作。

**主定理** 如果在递推式4.1中f(n)∈Θ(n^d)，其中d≧0，那么：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/04%20Divide-and-Conquer/屏幕截图%202014-12-02%2020.00.20.png)

对于上面的分治求和算法，当输入规模为n＝2^k时，加法运算次数A(n)可以用下面的递推式表示：

> A(n) = 2A(n/2) + 1

对上面的例子，a=2,b=2,d=0;这样一来，a > b^d,

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/04%20Divide-and-Conquer/屏幕截图%202014-12-02%2020.03.08.png)

通过这个定理，无需对递推式求解，就可以知道该算法的效率类型。

