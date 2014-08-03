# Webtranning组员进度

### saharabear

#### HTML
** quanchike-webtraining / saharabear / 201407 / sass / index.html **

    <!doctype html>
    <html lang="zh-CN" >
        <head>
            <meta charset="utf-8" />
            <title>SASS</title>
            <link rel="stylesheet" href="./style.css"/>
        </head>
        <body>
    
        </body>
    </html>

#### SASS
**SASS sample markup**

    9<link rel="stylesheet" href="./style.css"/>
    </head>
    <body>
    + <div class="qheader">
    + <div class="q-container">
    + <div class="q-logo">SASS Sample</div>
    + <div class="q-menu">
    + <ul>
    + <li><a href="#">主页</a></li>
    + <li><a href="#">设置</a></li>
    + <li><a href="#">栏目</a></li>
    + </ul>
    + </div>
    + </div>
    + </div>
    + <div class="q-body">
    + <div class="q-container">
    + <div class="q-row">
    + <div class="q-left">
    + <h2>Panel</h2>
    + <div class="q-panel">
    + <div class="q-panel-header">
    + Panel Header
    + </div>
    + <div class="q-panel-body">
    + Panel Body
    + </div>
    + <div class="q-panel-footer">
    + Panel Footer
    + </div>
    + </div>
    + </div>
    + <div class="q-right">
    + <h2>Image</h2>
    + <img src="http://cdn.code.baidu.com/imgs/jquery.png" class="q-image" />
    + </div>
    +20 </div>
    +
    + <div class="q-row">
    + <div class="q-left">
    + <h2>Button</h2>
    + <button class="q-btn q-btn-primary">Primary Button</button>
    + <button class="q-btn q-btn-success">Success Button</button>
    + </div>
    + <div class="q-right">
    + <h2>Table</h2>
    + <table class="q-table">
    + <thead>
    + <tr><th>Column 1</th>
    + <th>Column 2</th>
    + </tr>
    + </thead>
    + <tfoot>
    + <tr><th>Footer 1</th>
    + <th>Footer 2</th>
    + </tr>
    + </tfoot>
    + <tbody>
    + <tr>
    + <td>Data 1-1</td>
    + <td>Data 1-2</td>
    + </tr>
    + <tr>
    + <td>Data 2-1</td>
    + <td>Data 2-2</td>
    + </tr>
    + <tr>
    + <td>Data 3-1</td>
    + <td>Data 3-2</td>
    + </tr>
    + <tr>
    + <td>Data 4-1</td>
    + <td>Data 4-2</td>
    + </tr>
    + </tbody>
    + </table>
    + </div>
    + </div>
    + <div class="q-row">
    + <div class="q-left">
    + <h2>Form</h2>
    + <form method="GET" action="#">
    +
    + </form>
    + </div>
    + <div class="q-right">
    + <h2>Pagination</h2>
    + <div class="q-pagination">
    + <span class="pre"><a href="#">前一页</a></span>
    + <span class="item"><a href="#">2</a></span>
    + <span class="item active"><a href="#">3</a></span>
    + <span class="item"><a href="#">4</a></span>
    + <span class="item"><a href="#">5</a></span>
    + <span class="next"><a href="#">下一页</a></span>
    + </div>
    + </div>
    + </div>
    +
    + <div class="q-row">
    + <div class="q-left">
    + <h2>Label</h2>
    + <div class="q-label q-label-primary">Primary Label</div>
    + <div class="q-label q-label-success">Success Label</div>
    + </div>
    + <div class="q-right">
    + <h2>alert</h2>
    + <div class="q-alert q-alert-primary">Primary Alert</div>
    + <div class="q-alert q-alert-success">Success Alert</div>
    + </div>
    + </div>
    +
    + <div class="q-row">
    + <div class="q-left">
    + <h2>Lits Group</h2>
    + </div>
    + <div class="q-right">
    + <h2>badge</h2>
    + <span class="q-badge">10</span>
    + <span class="q-badge">20</span>
    + </div>
    + </div>
    + </div>
    + </div>
    +
    + <div class="q-footer">
    + <div class="q-container">
    + <div class="q-clearfix">
    + <div class="q-right">
    + <a href="#">关于</a>
    + </div>
    + </div>
    + </div>
    +139 </div>
    </body>
    </html>

** SASS testing markup **

     88<div class="q-row">
    <div class="q-left">
    <h2>Form</h2>
    - <form method="GET" action="#">
    + <form method="GET" action="#" class="q-form">
    + <div class="q-form-row">
    + <label for="exampleInputEmail1">Email address</label>
    + <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
    + </div>
    + <div class="q-form-row">
    + <label for="exampleInputPassword1">Password</label>
    + <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    + </div>
    + <div class="q-form-row">
    + <label for="exampleInputFile">File input</label>
    + <input type="file" id="exampleInputFile">
    + <p class="q-help-block">Example block-level help text here.</p>
    + </div>
    + <div class="q-checkbox">
    + <label>
    + <input type="checkbox"> Check me out
    + </label>
    + </div>
    + <label class="q-checkbox-inline">
    + <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
    + </label>
    + <label class="q-checkbox-inline">
    + <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
    + </label>
    + <label class="q-checkbox-inline">
    + <input type="checkbox" id="inlineCheckbox3" value="option3"> 3
    + </label>
    + <select class="q-form-row">
    + <option>1</option>
    + <option>2</option>
    + <option>3</option>
    + <option>4</option>
    + <option>5</option>
    + </select>
    +
    + <select multiple class="q-form-row">
    + <option>1</option>
    + <option>2</option>
    + <option>3</option>
    + <option>4</option>
    + <option>5</option>
    + </select>
    + <div class="q-form-row success">
    + <label class="q-form-label" for="inputSuccess2">Input with success</label>
    + <input type="text" class="q-form-label" id="inputSuccess2">
    + <span class="q-form-success"></span>
    + </div>
    + <div class="q-form-row">
    + <button class="q-btn q-btn-primary">Submit</button>
    + 139</div>

 >今天撸出一个HTML，包括常用的Web组件了，明后天有空就用SASS编译出相应的CSS代码．以后的各种JavaScript效果的训练，我就基于这个HTML组件和对应的CSS来写．

#### 关于SASS的网站
[**SASS用法指南 作者： 阮一峰**](http://www.ruanyifeng.com/blog/2012/06/sass.html)
[**gui的工具来处理sass, less, css压缩，js压缩**](http://koala-app.com/index-zh.html)

> 能够自动处理各种转译和压缩，全部自动处理，上手也非常简单．推荐windows用户试试．　Linux/Mac用户可用可不用了．

#### 一个简单的panel和image的样式
![Alt text](http://mingce.org/api/image/352/0)
#### [panel](https://github.com/saharabear/quanchike-webtraining/commit/933cfc75374dfb36c28aa1d13feb3e1c5383dbaa#diff-e75b22d05bf3bb0ec39bb7adf367f745)
#### [image style](https://github.com/saharabear/quanchike-webtraining/commit/2b5cbd4c54dbba2a1177a20c4078c418b2b1bb8e)

#### 实现垂直居中的几种办法

> http://www.w3cplus.com/css/elements-horizontally-center-with-css.html
> 
> http://www.w3cplus.com/css/pure-css-create-equal-height-column-layout-and-certical-horizontal-centers-and-sticky-footer.html
> 
> http://www.w3cplus.com/css/vertically-center-content-with-css

#### 样例的HTML+CSS都完成
![Alt text](http://mingce.org/api/image/360/0)

    https://github.com/saharabear/quanchike-webtraining/commits/master/saharabear/201407

> 从明天开始的7-14天内，我会把CSS的所有文档过一遍． 
> 再向后，做一次purecss和bootstrap的源代码分析．
> 再然后，用sass将我这里写的这个样例重构一次． 
> 再然后，就开始基于这个样例，来写JavaScript．
> 
大体是这个规划．相信如果大家能跟着这一系列走完，所有代码自己敲上几遍，那在前端这部分都能入门．

**CSS的文档主要参考下面三个资源**
- https://developer.mozilla.org/en-US/docs/Web/CSS
- http://docs.webplatform.org/wiki/css
- http://www.amazon.cn/dp/B0011F5SIC

> 其中第一和第二项的内容相对完整，第三项的这本书几年前读过，有一些东西都记不大清楚了．纸质媒体的问题是更新速度跟不上技术发展，但是如果你不懂CSS，用第三项这本书
> CSS权威指南(第3版) 可以很容易入门．
> 
> 最后，不要刻意在初学阶段区分CSS2还是CSS3，也不需要刻意追求浏览器兼容性，在这个初学的阶段，过一遍文档就可以，兼容性和其他设计是后面的事情．
> 
> 我在我的代码库里面，建立了css这个目录，测试代码都会写在这里面．

---------
### nanbiandema
- [SASS介绍](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- [SASS组织结构](http://thesassway.com/beginner/how-to-structure-a-sass-project)

---------
感谢阅读这份帮助文档。

