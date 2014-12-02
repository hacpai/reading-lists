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


