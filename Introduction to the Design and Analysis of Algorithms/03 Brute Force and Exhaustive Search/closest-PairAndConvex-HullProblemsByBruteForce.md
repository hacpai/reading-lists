最近对和凸包问题的蛮力算法
==========================

本节中，这两个问题处理的都是平面上的有限集合。它们来自于计算集合和运筹学这两个应用领域。

### 最近对问题

最近对问题要求找出一个包含n个点的集合中距离最近的两个点。问题中的点可定义在多维空间中，但为了简单起见，我们只在二维的情况下考虑该问题。我们假设所讨论的点是以标准的笛卡尔坐标形式(x, y)给出的，因此在两个点Pi=(Xi, Yi)和Pj(Xj, Yj)之间的距离是标准的欧几里得距离：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/03%20Brute%20Force%20and%20Exhaustive%20Search/屏幕截图%202014-12-02%2015.33.27.png)

故求解该问题的蛮力算法是这样：分别计算每一对点之间的距离，然后找出距离最小的那一对。同时为了避免同一对点计算两次距离的情况，我们只考虑i < j的那些对(PiPj).

```
算法 BruteForceClosestPoint(P)
    //输入：一个n(n≧2)个点的列表P, P1=(X1,Y1),...,Pn=(Xn,Yn)
    //输出：两个最近点的下标，index1和index2
    dmin <- ∞
    for i <- 1 to n-1 do
        for j <- j+1 to n do
            d <- sqrt((Xi-Xj)^2 + (Yi-Yj)^2)
            if d < dmin
                dmin <- d;index1 <- i;index2 <- j
    return index1, index2
```

算法的基本操作是计算两个点的欧几里得距离。由于平方根操作复杂且不精确，所以我们避免比较平方根，只比较(Xi-Xj)^2+(Yi-Yj)^2值本身（平方根函数是严格递增的，因此可以比较被开方的值）。

平凡操作的执行次数这样计算：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/03%20Brute%20Force%20and%20Exhaustive%20Search/屏幕截图%202014-12-02%2015.43.36.png)

### 凸包问题

现在讨论另一个问题——计算凸包。先来定义什么是凸集合。

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/03%20Brute%20Force%20and%20Exhaustive%20Search/屏幕截图%202014-12-02%2015.47.15.png)

图(a)中的所有集合都是凸的，其他凸集合还包括：直线，三角形区域，四边形区域，圆区域，以及整个平面。

另一些集合都不是凸的：图(b)中所有集合，任意亮个或多个点构成的有限集，任意凸多边形的边界，以及圆周。

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/03%20Brute%20Force%20and%20Exhaustive%20Search/屏幕截图%202014-12-02%2015.47.26.png)

现在介绍凸包的概念了。直观来讲，对于平面上n个点的集合，它的凸包就是包含所有这些点的最小凸多边形。通俗易懂地解释就是所讨论的点想象成钉在胶合板上的钉子，胶合板代表平面。撑开一根橡皮筋圈，把所有钉子都围住，然后劈啪一声松手。凸包就是以橡皮筋圈为边界的区域（图3.5）。

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/03%20Brute%20Force%20and%20Exhaustive%20Search/屏幕截图%202014-12-02%2015.54.00.png)

**定义** 一个点集合S的**凸包**是包含S的最小凸集合。

如果S是两个点组成的集合，它的凸包是连接这两个点的线段。如果S是由三个不同线的点组合的集合，它的凸包是以这三个点为顶点的三角形；如果三点同线，凸包是以距离最远的两个点为端点的线段。更大的集合凸包——8个点的集合的凸包是以P1，P5，P6，P7和P3为顶点的凸多边形，如图3.6.

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/03%20Brute%20Force%20and%20Exhaustive%20Search/屏幕截图%202014-12-02%2016.17.07.png)

**定理** 任意包含n > 2个点（不共线的点）的集合S的**凸包**是以S中的某些点为顶点的凸多边形。

**凸包问题**是为一个n个点的集合构成凸包的问题。为了解决该问题，需要找出作为这个集合的凸多边形的顶点。数学家将这种顶点称为“极点”。还需要直到另外一些信息：哪几对点需要连接起来以构成凸包的边界。

如何用蛮力法解决凸包问题呢？

因为线段构成凸包的边界，可以基于这个事实设计一个简单但缺乏效率的算法：对于一个n个点集合中的两个点Pi和Pj，当且仅当该集合中的其他点都位于穿过这两个点的直线的同一边时，它们的连线是该集合凸包边界的一部分。

为了实现这个算法，需要用到一些解析几何的额基本知识。首先，在坐标平面上穿过两个点(x1,y1),(x2,y2)的直线是由下面方程定义的：

> ax + by = c

其中，a＝y2-y1, b = x1-x2, c = x1y2-y1x2.

其次，这样一根直线把平面分为两个半平面：其中一个半平面中的点都满足ax+bx > c,而另一个半面的点满足ax+bx < c,线上的点是，ax+bx-c,检验这个表达式的符号是否相同。

该算法的效率如何呢额？

它属于O(n^3): 对于不同点的每一个n(n-1)/2来说，要对其他n－2个点求出ax+bx-c的符号。

