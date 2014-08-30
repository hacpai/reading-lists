/*
 * 常见的IE错误
 *     操作终止
 *     无效字符
 *         Firefox抛出illegal charcter错误
 *         Safari报告发生语法错误
 *         Opera报告发生ReferenceError
 *         IE抛出invalid charcter错误
 */

//下面示例导致操作终止错误
<html>
<head>
    <title>Operation Aborted Example</title>
</head>
<body>
    <p>The following code should cause an Operation Aborted error in IE versions prior to 8.</p>
    <div>
        <script type="text/javascript">
            document.body.innerHTML(document.createElement("div"), document.body.firstChild);
        </script>
    </div>
</body>
</html>

