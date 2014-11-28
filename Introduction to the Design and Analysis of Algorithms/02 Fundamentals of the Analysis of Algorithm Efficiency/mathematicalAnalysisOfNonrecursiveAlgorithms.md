非递归算法的数学分析
===================

本节中，系统地运用2.1节介绍的通用框架来分析非递归算法的效率。我们以一个非常简单的算法作为开始，该算法示范了这类算法的所有主要分析步骤。

**例1** 从n个元素的列表中查找元素最大值的问题。简单起见，假设列表是用数组实现。

```
算法 MaxElement(A[0..n-1])
    //求给定数组中最大元素的值
    //输入：实数数组A[0..n-1]
    //输出：A中最大元素的值
    maxval <- A[0]
    for i <- 1 to n-1 do
        if A[i] > maxval
            maxval <- A[i]
    return maxval
```

这里，输入规模用数组元素的个数来度量。算法执行最频繁的操作在for循环中。循环体中存在两种操作：比较运算`A[i]>maxval`和赋值运算`maxval <- A[i]`.

应该把两种算法中的哪一种作为基本操作呢？

由于每做一次循环都会进行一次比较，而赋值运算并不是这样，故把比较运算作为该算法de基本操作。（注意，对于所有大小为n的数组，比较次数都是相同的；所以，使用比较次数作为度量的时候，没有必要去区分最差情况，平均情况和最优情况）。

把C(n)记作比较运算的执行次数，由于该算法每执行一次循环就会做一次比较，循环变量i从1到n－1，所以，C(n)的下列求和表达式：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2015.20.33.png)

这个和很好计算，它对1重复了n－1遍。因此，

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2015.21.15.png)

一个分析非递归算法时可遵循的一般性方案。

**分析非递归算法效率的通用方案**

1. 决定用哪个常数作为输入规模的度量。
2. 找出算法的基本操作（作为一个规律，它总是位于算法的最内层循环中）。
3. 考虑基本操作的执行次数是否只依赖输入规模。如果它还依赖一些其它的特性，则最差效率，平均效率以及最优效率需要分别研究。
4. 建立一个算法基本操作执行次数的求和表达式。
5. 利用求和运算的标准公式和法则来确定它的增长次数。

我们用得特别频繁的是求和运算的两个基本规则：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2015.27.41.png)

以及两个求和公式

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2015.27.47.png)

**例2** **元素唯一性问题**:验证给定数组中的元素是否全部唯一。

```
算法 UniqueElements(A[0..n-1])
    //验证给定数组中的元素是否全部唯一
    //输入：数组A[0..n-1]
    //输出：如果A中的元素全部唯一，返回"true"
    //      否则，返回"false"
    for i <- 0 to n-2 do
        for j <- i+1 to n-1 do
            if A[i] = A[j] return false
    return true
```

输入规模的自然度量还是数组中元素的个数——n。最内层的循环只包含一个操作（两个元素的比较），故它为该算法的基本操作。注意，元素比较的次数不仅取决于n，还取决于数组是否有相同的元素，在有相同元素的情况下，还取决于它们在数组中的位置。本体中，我们只研究最差效率。

根据定义，如果对某个数组所做的比较数Cworst(n)比其他数组都多，那么它是所有大小为n的数组中的最差输入。查看最内层循环，发现有两种类型的最差输入（它们不会使算法过早地推出循环）：不包括相同元素的数组，以及最后两个元素使唯一对相同元素的数组。对于这样的输入，最内层循环每执行一次就会进行一次比较，并且对于循环变量j在i+1和n-1的每个值都做一次循环；对于外层循环变量i在0和n－2之间的每个值，上述过程都会再重复一遍。因此，我们有：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2015.35.28.png)

用S2式，计算会更快

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2015.35.32.png)

这个结果是完全可以晕车的：在最坏的情况下，对于n个元素的所有(n-1)n/2对两两组合，该算法都要比较一遍。

**例3** 两个给定n阶方阵A和B，有一个基于定义的算法计算它们乘积，求该算法的时间效率。

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2015.37.54.png)

对于i≧0和j≦n-1的每一对下标，C[i, j]=A[i, 0]B[0, j]+...A[i, k]B[k, j]+...+A[i, n-1]B[n-1, j].

```
算法 MatrixMultiplication(A[0..n-1,0..n-1], B[0..n-1,0..n-1])
    //用基于定义的算法计算两个n阶矩阵的乘积
    //输入：两个n阶矩阵A和B
    //输出：矩阵C＝AB
    for i <- 0 to n-1 do
        for j <- 0 to n-1 do
            C[i, j] <- 0.0
            for k <- 0 to n-1 do 
                C[i, j] <- C[i, j] + A[i, k]*B[k, j]
    return C
```

矩阵的阶数n作为输入规模的度量。该算法的最内层循环中是两个算术运算——乘法和假发。我们选择乘法作为算法基本操作。注意，对于这个算法来说，我们不必非要从两个运算中指定一个，因为最内层循环每做一遍，两个运算都会被执行一次。所以，在计算一个运算次数的同时也自动计算另外一个运算的次数。我们来建立一个计算该算法乘法运算总次数M(n)的求和表达式（因为这个操作次数只依赖于谁人矩阵的阶，所以我们不必分别研究最差效率，平均效率和最优效率）。

算法最内层循环每次执行的时候，只执行一次乘法运算，变量k的范围从0到n－1，执行次数也为0到n－1.因此，对于变量i和j每个取值，算法所做的乘法运算次数是

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2015.46.53.png)

而乘法运算总次数M(n)可以用一下三重求和式来表示：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2015.49.23.png)

使用公式(S1)和规则(R1)求和。于是，我们得到：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/02%20Fundamentals%20of%20the%20Analysis%20of%20Algorithm%20Efficiency/屏幕截图%202014-11-27%2015.49.23(2).png)

这个例子足够简单，我们也可以不使用求和工具得出相同的结果。该算法计算的是乘积矩阵中n^2个元素的值。乘积的每一个元素都是第一个矩阵中某个n元素行和第二个矩阵中某个n元素列的点积，也就是做n次乘法运算。所以乘法运算的总次数是n·n^2=n^3.

估计该算法在一台特定计算机上的运行时间

> T(n) ∈ CmM(n) = Cm·n^3

其中，Cm是一次乘法运算所讨论的计算机上的运行时间。考虑把假发运算所消耗的时间，得到一个更加精确的估算：

> T(n) ≈ CmM(n) + CaA(n) = Cm·n^3 + Ca·n^3 = (Cm + Ca)n^3

其中，Ca是执行一次加法运算的时间。请注意，两个估算仅在乘法常数上有差别，而增长次数上没有差别。

循环变量的无规律变化，过于复杂而无法求解的求和表达式，分析平均情况时固有的难度，以至于使用上面介绍的方案来分析非递归算法不一定总能成功。

最后一个例子，循环变量变化方式与以往的例子都不相同。

**例4** 求一个十进制正整数在二进制表示中的二进制数字个数。

```
算法 Binary(n)
    //输入：十进制正整数n
    //输出：n在二进制表示中的二进制数字个数
    count <- 1
    while n > 1 do
        count <- count + 1
        n <- [n/2]
    return count
```

本算法将最内层循环`n <- [n/2]`作为算法基本操作。比较算法的执行次数比循环体的循环次数大1.

本例中循环的每次执行过程中，n的值基本上都会减半，所以该次数大约时log2 n。比较运算n>1执行次数的精确公式是[log2 n]+1.使用基于递推关系的分析技术也能得到相同的答案，我们将在下一节讨论。

