/*
 * 创建动态脚本
 * 包含外部文件
 * <script type="text/javascript" src="client.js"></script>
 * 用函数封装
 */
function loadScript(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}

loadScript("client.js");

/*
 * 行内方式
 * <script type="text/javascript">
 *     function sayHi() {
 *         alert("Hi");
 *     }
 * </script>
 */
var script = document.createElement("script");
script.type = "text/javascript";
script.appendChild(document.createTextNode("function sayHi() {alert('hi');}"));
document.body.appendChild(script);
