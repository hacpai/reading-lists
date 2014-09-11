# 在HTML中使用JavaScript

## <script>元素

向HTML页面中插入JavaScript的主要方法，就是使用`<script>`元素。

两种方式都要求把`type`设置为`text/javascript`,表明使用的脚本语言是JavaScript。

包含外部JavaScript文件时，`src`属性设置为指定相应文件的URL。

### 标签的位置

现代Web应用程序一般都把全部JavaScript引用放在`<body>`元素中，放在页面最底部。

### 嵌入代码与外部文件

一般认为最好的做法还是尽可能使用外部文件来包含JavaScript代码。使用外部文件有如下优点。

- 可维护性
- 可缓存性
- 可适应未来


