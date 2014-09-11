# 部署

## 构建过程

某些过程始于源控制中定义用于存储文件的逻辑结构。遵循以下面向对象语言中的典型模式：将每个对象或自定义类型分别放入其单独的文件中。

将代码分离成多个文件只是为了提高维护性。进行部署的时候，需要将这些源代码合并为一个或几个归并文件。

browserify即有加载功能,又有合并成一个js的功能,目前用得感觉良好.

## 验证

JSLint帮助确定JavaScript代码的潜在的问题，查找代码中的愈发错误以及常见的编码错误。

## 压缩

当谈及JavaScript文件压缩，讨论两个东西：代码长度和配重。代码长度指的是浏览器所需解析的字节数，配重指的是实际从服务器传送到浏览器的字节数。

### 文件压缩

所有的JavaScript文件在部署到生产环境之前，都应该使用YUI压缩器或者蕾丝的工具进行压缩。给构建过程添加一个压缩JavaScript文件的环节以确保每次都进行这个操作。

### HTTP压缩

配重指的是实际从服务器传送到浏览器的字节数。

对Apache web服务器，有两个模块可以进行HTTP压缩：`mod_gzip`和`mod_deflate`.对于`mode_gzip`, 可以给`httpd.conf`文件或者是`.htaccess`文件添加以下代码启用对JavaScript的自动压缩。

```
# 告诉mod_zip要包含任何以.js结尾的文件
mod_gzip_item_include    file    \.js$
```
对于mod_deflate，可以类似添加一行代码以保证JavaScript文件在被发送之前已被压缩。将以下这一行代码添加到`httpd.conf`文件或者是`.htaccess`文件中：

```
#告诉mod_deflate要包含所有的JavaScript文件
AddOutputFilterByType DEFLATE application/x-javascript
```


