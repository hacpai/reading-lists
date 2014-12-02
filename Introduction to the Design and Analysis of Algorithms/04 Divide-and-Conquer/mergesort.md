合并排序
========

合并排序是成功应用分治技术的一个完美例子。对于一个需要排序的数组A[0..n-1],合并排序把它一分为二：A[0..[n/2]-1]和A[[n/2]..n-1],并对每个子数组递归排序，然后把这两个排好序的子数组合并为一个有序数组。

```
算法 Mergesort(A[0..n-1])
    //递归调用mergesort来对数组A[0..n-1]排序
    //输入：一个可排序数组A[0..n-1]
    //输出：非降序排列的数组A[0..n-1]
    if n > 1
        copy A[0..[n/2]-1] to B[0..[n/2]-1]
        copy A[[n/2]..n-1] to C[0..[n/2]-1]
        Mergesort(B[0..[n/2]-1])
        Mergesort(C[0..[n/2]-1])
        Merge(B,C,A)
```

对两个有序数组的**合并**可与你通过下面的算法完成。初始状态下，两个指针（数组下标）分别指向两个待合并数组的第一个元素。然后比较这两个元素的大小，将较小的元素添加到一个新创建的数组中；接着，被复制数组中的指针后移，指向较小元素的后续元素。上述操作一直持续到两个数组中的一个被处理完为止。然后，在未处理完的数组中，剩下的元素被复制到新创建数组的尾部。

```
算法 Merge(B[0..p-1],C[0..q-1],A[0..p+q-1])
    //将两个有序数组合并为一个有序数组
    //输入：两个有序数组B[0..p-1]和C[0..q-1]
    //输出：A[0..p+q-1]中已经有序存放了B和C中的元素
    i <- 0;j <- 0;k <- 0
    while i < p and j < q do
        if B[i] ≦ C[j]
            A[k] <- B[i]; i <- i+1
        else A[k] <- C[j]; j <- j+1
        k <- k+1
    if i = p
        copy C[j..q-1] to A[k..p+q-1]
    else copy B[i..p-1] to A[k..p+q-1]
```

合并排序算法的效率如何呢？

简单起见，假设n是2的乘方，那么键值比较次数C(n)的递推关系式为：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/04%20Divide-and-Conquer/屏幕截图%202014-12-02%2020.36.11.png)

我们来分析一下Cmerge(n)，合并阶段进行键值比较的次数。在最坏的情况下，最小的元素轮流来自不同的数组。对于最坏的情况来所，Cmerge(n)=n-1，我们得到下面这个递推式：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/04%20Divide-and-Conquer/屏幕截图%202014-12-02%2020.37.44.png)

根据主定理，Cworst(n)∈Θ(nlogn).实际上，如果n＝2^k，我们很容易求得该最差效率递推式的精确解：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/04%20Divide-and-Conquer/屏幕截图%202014-12-02%2020.43.44.png)

合并排序在最坏情况下的键值比较次数十分接近于任何基于比较的排序算法在理论上能够达到的最少次数。合并排序的主要缺点就是该算法需要线性的额外空间。不推荐改为“在位”，因为会导致算法过于复杂，增长次数具有一个很大的常系数，在位的合并排序算法只具有理论上的意义。

