选择排序和冒泡排序
=================

本节中，考虑蛮力法在排序问题中的应用：给定一个可排序的n元素序列，对它们按照非降序方式重新排序

这里讨论的两个算法——选择排序和冒泡排序。对于这两个算法，选择排序比冒泡排序更加清晰地实现了蛮力法。

### 选择排序

选择排序扫描整个列表，找到最小元素然后和第一个元素交换，将最小元素放到它在有序表中的最终位置上。然后从第二个元素开始扫描列表，找到最后n-1个元素中的最小元素，再和第二个元素交换位置，把第二个小的元素放在它的最终位置上。一般来说，在对该列表做第i遍扫描的时候（i的值从0到n－2），该算法在最后n－i个元素中寻找最小元素，然后拿它和Ai交换：

在n－1遍以后，该列表就被排好序了。

这里是该算法的伪代码，简单起见，假设列表是由数组实现的。

```
算法 SelectionSort(A[0..n-1])
    //该算法用选择排序对给定的数组排序
    //输入：一个可排序数组A[0..n-1]
    //输出：非降序排列的数组A[0..n-1]
    for i <- 0 to n-2 do
        min <- i
        for j <- i+1 to n-1 do
            if A[j] < A[min] min <- j
        swap A[i] and A[min]
```

对于选择排序，输入的规模由元素的个数n决定；算法的基本操作是键值比较A[j] < A[min].这个比较的执行次数仅仅依赖于数组的规模，求和公式如下：

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/03%20Brute%20Force%20and%20Exhaustive%20Search/屏幕截图%202014-11-29%2023.39.37.png)

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/03%20Brute%20Force%20and%20Exhaustive%20Search/屏幕截图%202014-11-29%2023.39.49.png)

因此，对于任何输入来说，选择排序都是一个Θ(n^2)的算法。然而，请注意，键的交换次数仅为Θ(n).更精确地说，是n－1次（i循环每重复一次执行一次交换）。这个特性使得选择排序超过了许多其他的排序算法。

