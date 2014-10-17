符号信息
=======

今天计算机处理的大多是如同名字，词语和图像等符号类信息。Scheme支持多种符号信息，包括符号（symbol），字符串（string），字符（character）和图像（images）等。符号是前面带一个单引号的一个键盘字符序列：

```
'the 'dog 'ate 'a 'chocolate 'cat! 'two^3 'and%sso%on?
```
与数值一样，符号并没有内在的含义，而由函数使用者将符号和现实世界的对象联系在一起，这种联系有时在特定的环境下是显而易见的，如`'east` 通常用来表示方向，即太阳升起的地方，而`'professor`则表示大学中的一个教授。

与数一样，符号是最基本的数据，它们用于表示如家庭，名字，头衔，命令，通知等信息。对于符号，Scheme 只提供一种操作：比较操作，即`symbol=?`, 它有两个参数，当且仅当它们相等时，其值为true：

```
(symbol=? 'Hello 'Hello) = true
(symbol=? 'Hello 'Howdy) = false
(symbol=? 'Hello x) = true    ; 如果x的值为 'Hello
(symbol=? 'Hello x) = fasle   ; 如果x的值为 'Howdy
```
符号最早由人工只能研究者引入，用于设计能与人类进行交谈的函数。考虑函数 `reply`, 它对问候“good morning”，“how are you”，“good afternoon”和“good evening”作出回答。这些问候语可以表示为`'GoodMorning`,`'HowAreYou`,` 'GoodAfternoon`, `'GoodEvening`.因此，`reply`函数接受一个符号类型的参数，而结果也是符号类型的：

```
;; reply : symbol -> symbol
;; 对于问候s确定一个回答
(define (reply s) ...)
```
而且，函数必须区分4种情况，这意味着，按照4.4节所描述的设计诀窍，函数是一个包含4个子句的cond表达式：

```
(define (reply s)
  (cond
    [(symbol=? s 'GoodMorning) ...]
    [(symbol=? s 'HowAreYou?) ...]
    [(symbol=? s 'GoodAfternoon) ...]
    [(symbol=? s 'GoodEvening) ...]))
```
cond子句对4个符号进行匹配，自然，这比去见的匹配容易得多。

从上述函数模版到最终函数只有一步之遥。下面是reply函数的一个版本：

```
(define (reply s)
  (cond
    [(symbol=? s 'GoodMorning) 'Hi]
    [(symbol=? s 'HowAreYou?) 'Fine]
    [(symbol=? s 'GoodAfternoon) 'INeedANap]
    [(symbol=? s 'GoodEvening])))
```
事实上，可以使用不同的回应替代程序模板中的“..."。因此，定义基本模板时可以不关心函数的输出。在下面的章节中，我们可以看到这种考虑实际上是正常的，即对输出数据的考虑可以推后进行。

### 关于字符串

字符串（string）是第2种形式的符号数据。与符号（symbol）一样，字符串是一个字符序列，但被包含在双引号中，如

```
"the dog" "isn't" "made of" "chocolate" "two^3" "and so on?"
```
与符号不同的是，字符串不是原子数据，而是符合数据，这一点将在后面说明。目前，暂且将字符串看成一种特别的符号，唯一的运算是 `string=?`,同`symbol=?`对两个符号进行比较类似，`string=?`对两个字符串进行比较。在其他方面，我们将忽略字符串，当使用它们时，系统将其看成符号。

### 关于图像

图像(image)是第3种形式的符号数据，开发能处理图像的函数是有趣的。与数，布尔值一样，图像也可以出现在表达式中。通常，我们也给图像命名，因为它们一般被多个函数使用。如果你不喜欢某一个图像，可以简单地将其替换为另一个图像（参见3.2节）。

![](https://github.com/arcticlion/reading-lists/blob/master/HtDC/I%20Processing%20Simple%20Forms%20of%20Data/Chapter%2005%20Symbolic%20Information/屏幕截图%202014-10-17%2014.12.28.png)


