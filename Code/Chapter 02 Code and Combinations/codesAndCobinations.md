编码与组合
=========

比起接受莫尔斯码，接受编码比进行解码费时得多。

因为我们只有一张提供"字母->莫尔斯码"得编码表，而缺少一张可以实现反查得"莫尔斯码->字母得"译码表".

忘记字母序列，根据编码中包含点、划多少来进行分组，是一个更好得组织这些编码得方法。

一个仅包含一个点或划得莫尔斯码只代表两个字母：“E”或“T”

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2002%20Code%20and%20Combinations/Morse1.png)

一组含有2个点或划得编码组合，可以呈现4个字母——I，A，N，M

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2002%20Code%20and%20Combinations/Morse2.png)

一组含有3个点或划得莫尔斯码可以表示8个字母

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2002%20Code%20and%20Combinations/Morse3.png)

一串由4个点或划组成得莫尔斯码可以表示16个字符

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2002%20Code%20and%20Combinations/Morse4.png)

点和划数目和码子的规律

点和划的数目| 码字的数目
------------|-----------
      1     |     2    
      2     |     4    
      3     |     9    
      4     |     16   

另一种呈现方式

点和划的数目|码字的数目
------------|----------
      1     |     2
      2     |    2x2
      3     |   2x2x2
      4     |  2x2x2x2

莫尔斯码的解码树形图

![](https://github.com/arcticlion/reading-lists/blob/master/Code/Chapter%2002%20Code%20and%20Combinations/MorseTree.png)

莫尔斯码也被称为二进制码（Binary Code), 因为这种编码的组合元素只有两个——点和划。这根硬币，只有正面朝上或反面朝上蕾丝。二元对象（例如硬币）和二进制码（例如莫尔斯码）常常使用2的盛放来进行描述。


