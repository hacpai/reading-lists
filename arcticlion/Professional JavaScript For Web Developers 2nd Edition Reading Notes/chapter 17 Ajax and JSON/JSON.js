/*
 * JSON
 */

//对象字面量表示对象
{
    "name": "Nicholas C. Zakas",
    "title": "Software Engineer",
    "author": true,
    "age": 29
}

//可以直接赋值
var person = {
    "name": "Nicholas C. Zakas",
    "title": "Software Engineer",
    "author": true,
    "age": 29
};

//数组字面量表示数组
[1, 2, "color", true, null]

//描述人的对象数组
[
    {
        "name": "Nicholas C. Zakas",
        "title": "Software Enginner",
        "author": true,
        "age": 29
    },
    {
        "name": "Jim Smith", 
        "title": "Salesperson",
        "author": false,
        "age": 35
    }
]

//这些定义都是纯文本，传递给eval()解析返回实例
//求值为一个数组
var people = eval(jsonText);

//访问数据
alert(people[0].name);
people[1].age = 36;
if (people[0].author) {
    alert(people[0].name + " is an author");
}

