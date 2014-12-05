用分治法解最近对问题和凸包问题
==============================

3.3节我们用蛮力法解决最近对问题和凸包问题。解决这两个问题二维版本的蛮力算法的时间效率分别是Θ(n^2)和O(n^3)。本节中，对于这两个问题，讨论运用分治技术的两个更复杂，渐进效率也更好的算法。

### 最近对问题

P1=(x1,y1),...,Pn=(xn,yn)是平面上n个点构成的集合S，简单起见，我们假设n是2的乘方。我们画一条垂直线x＝c，把这些给定点分为两个包含n/2个点的子集S1和S2，使得n/2个点位于直线的左侧或者直线上，另外n/2个点位于直线的右侧或者直线上。求常数c的适当值的一个方法是实用这些x坐标的中值。

遵循分治方法，我们可以递归地求出左子集S1和右子集S2的最近对。设d1和d2分别是S1和S2的点对中的最小距离，并设d＝min{d1, d2}.

但遗憾的是，d不一定是S1和S2中所有点对的最小距离，因为距离最近的两个点可能分别位于分界线的两侧。所以，作为合并较小子问题的解的一个步骤，我们需要检查这样的店。需要检查的点在以x＝c为对称的，宽度为2d的垂直带中，如图(a)

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/04%20Divide-and-Conquer/屏幕截图%202014-12-05%2019.57.39.png)

只有这片区域上的点有可能小于d，设C1和C2分别是该垂直带左右部分的点构成的子集。

现在，检查C1中的每个点P(x,y)和C2中的点的记忆力是否小于d。显然，这种点的y轴坐标一点位于区间[y-d, y+d]之间。观察发现：这样的点不会超过6个，因为C2中的店，相互之间的距离至少为d。所以不可能有点在图(b)中的矩形区域内。图(b)给出了这种最坏的情况。

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/04%20Divide-and-Conquer/屏幕截图%202014-12-05%2020.01.37.png)

另一个重要的发现是，我们可以维护C1和C2中点的两个列表，在表中，这些点按照y轴坐标以增序排列，并用合并算法合并两个已经排好序的表。我们顺序地处理C1中的点，同时一个指针在C2列表的宽度为2d的区间中来回移动，取出6个候选点，来计算它们和C1当前点P之间的距离。

```
算法 EfficientClosestPair(P, Q)
    //运用分治法解决最近对问题
    //输入：以x轴非减序排列的点的数组P和以y轴非减序排列的数组Q
    //输出：最近对的欧几里得距离
    if n ≦ 3
        return the minimal distance found by the brute-force algorithm
    else 
        copy the first ⌈n/2⌉ points of P to array Pl
        copy the same ⌈n/2⌉ points from Q to array Ql
        copy the remaining ⌊n/2⌋ points of P to array Pr
        copy the same ⌊n/2⌋ points from Q to array Qr
        d1 <- EfficientClosestPair(P1, Q1)
        dr <- EfficientClosestPair(Pr, Qr)
        d <- min{d1, dr}
        m <- P[⌈n/2⌉ − 1].x
        copy all the points of Q for which |x − m| < d into array S[0..num − 1]
        dminsq <- d^2
        for i <- 0 to num-2 do
            k <- i+1
            while k≦num-1 and (S[k].y - S[i].y)^2 < dminsq
                dminsq <- min((S[k].x - S[i].x)^2 + (S[k].y - S[i].y)^2, dminsq)
                k <- k+1
    return sqrt(dminsq)
```

合并较小的子问题所化的时间M(n)为O(n).现在，关于该算法对n个预排序点的运行时间，我们有下面的递推式： 

> T(n) = 2T(n/2) + M(n)

应用主定理（其中,a=2,b=2,d=1),我们得到T(n)∈O(nlogn).

### 凸包问题

对于凸包问题的分治算法，有一个操作和快速排序的操作十分类似的算法，我们称它为**快包**.

假设P1=(x1,y1),...,Pn=(xn,y,)是平面上n个点构成的集合S。这些点按照x轴坐标升序排列的，并按照y轴坐标的升序建立连接。一个几何学上的事实，最左边的点P1和最右边的点Pn一定是该集合的凸包顶点（图5.8）

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/04%20Divide-and-Conquer/屏幕截图%202014-12-05%2020.43.44.png)

设P1Pn是方向从P1到Pn的直线。这条直线把点分为两个集合：S1是位于直线左侧或在直线上的点构成的集合；S2是位于直线右侧或在直线上的点构成的集合。如果P1P2是方向从P1到P2的直线，如果P1P2P3构成一个逆时针的回路，我们说点P3位于P1P2的左侧。我们应用三个点的坐标所构成的行列式符号检查P3是否在P1P2左侧。

S1的凸包由下列线段构成：以P1和Pn为端点的线段构成的下边界，由多节链条构成的上边界。这条上边界称为**上包**.类似的，作为集合S2的下边界的多结链条被称为**下包**.一个非常有价值的发现是整个集合S的凸包是由上包和下包构成的。

我们讨论快包算法是如何构造上包的。首先，该算法找到S1中的顶点Pmax，它是距离直线P1Pn最远的点（图5.9）。

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/04%20Divide-and-Conquer/屏幕截图%202014-12-05%2020.50.07.png)

如果作两条连接线的话，这个点确定了面积最大的三角形△PmaxP1Pn.然后找出S1中所有直线P1Pmax左边的点，这些点以及P1和Pmax，构成了集合S1,1.S1中在直线PmaxPn左边的点以及Pax和Pn构成的集合S1,2.该算法继续递归构造S1,1和S1,2的上包，然后简单地把它们连接起来，以得到整个S1的上包。

现在，我们必须知道如何来实现该算法的集合操作。我们可以利用下面这个非常有用的解析几何知识：如果P1＝(x1,y1),p2=(x2,y2),p3=(x3,y3)是平面上的任意三个点，那么三角形△P1P2P3的面积等于下面这个行列式绝对值的二分之一：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/04%20Divide-and-Conquer/屏幕截图%202014-12-05%2020.56.09.png)

当且仅当P3=(x3,y3)位于直线P1P2的左侧时，该表达式的符号为正。使用这个公式可以检查一个点是否位于两个点确定的直线的左侧，并且可以求得这个点到这根直线的距离。

快包的效率和快速排序是相同的：平均效率是Θ(nlogn),最差效率是Θ(n^2).

