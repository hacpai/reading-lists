About
======

English name: Think Python: How to Think Like a Computer Scientist

中文名：Think Python: 如何像计算机科学家一样思考

作者：Allen Downey

译者: 车万翔

### Case study

* 接口设计
    * polygon.py/mypolygon.py
* word play
    * wordplay.py
* dictionaries
    * dictory.py
        * 字典作为计数器集合
        * 循环和字典
        * 逆向查找
        * 字典和列表
        * 备忘录
* data structure selection
    * my_analyze_book.py
* 类和对象
    * point_rectangle.py
        * Write a function called distance_between_points that takes two Points as ar- guments and returns the distance between them.
        * Write a function named move_rectangle that takes a Rectangle and two numbers named dx and dy. It should change the location of the rectangle by adding dx to the x coordinate of corner and adding dy to the y coordinate of corner.
        * Write a version of move_rectangle that creates and returns a new Rectangle instead of modifying the old one.
* 类和函数
    * time.py
        * Write a function called print_time that takes a Time object and prints it in the form hour:minute:second. Hint: the format sequence '%.2d' prints an integer using at least two digits, including a leading zero if necessary.
        * Write a boolean function called is_after that takes two Time objects, t1 and t2, and returns True if t1 follows t2 chronologically and False otherwise. Challenge: don’t use an if statement.
        * Write a function increment which adds a given number of seconds to a Time object, can be written naturally as a modifier. Challenge: don't contain any loops.
        * Write a “pure” version of increment that creates and returns a new Time object rather than modifying the parameter.
        * Rewrite increment using time_to_int and int_to_time.
        * Rewrite time_to_int as a method.
        * Write a `__cmp__` method for Time objects. Hint: you can use tuple comparison, but you also might consider using integer subtraction.
* 类和方法
    * point.py
        * Write an init method for the Point class that takes x and y as optional parameters and assigns them to the corresponding attributes.
        * Write a str method for the Point class. Create a Point object and print it.
        * Write an add method for the Point class.
        * Write an add method for Points that works with either a Point object or a tuple:
            * If the second operand is a Point, the method should return a new Point whose x coordinate is the sum of the x coordinates of the operands, and likewise for the y coordinates.
            * If the second operand is a tuple, the method should add the first element of the tuple to the x coordinate and the second element to the y coordinate, and return a new Point with the result.
* 继承
    * card.py
* Gui
    * Widgets
        * gui_demo.py
    * Packing widgets
        * SimpleTurtleWorld.py
    * Menus and Callables
        * menubutton_demo.py
    * Binding
        * draggable_demo.py
* HashTable
    * hashtable.py
* Lumpy
    * state diagram
        * lumpy_state.py
            ![](http://ww2.sinaimg.cn/large/8178ba0ejw1epiaj8trmwj20vh0iz0uf.jpg)
    * stack diagram
        * lumpy_stack.py
            ![](http://ww2.sinaimg.cn/large/8178ba0ejw1epiazckh0jj20vh0izmya.jpg)
    * object diagram
        * lumpy_object.py
            ![](http://ww1.sinaimg.cn/large/8178ba0ejw1epibia4x39j20vh0iz40o.jpg)
    * function and class object diagram
        * lumpy_function.py
            ![](http://ww2.sinaimg.cn/large/8178ba0ejw1epicajcycjj20vh0izwfz.jpg)
    * class diagram
        * lumpy_class.py
            ![](http://ww2.sinaimg.cn/large/8178ba0ejw1epidehxa5cj20vh0iz3zv.jpg)
        * lumpy_class2.py
            ![](http://ww1.sinaimg.cn/large/8178ba0ejw1epidf5tig4j20vh0izmz6.jpg)
