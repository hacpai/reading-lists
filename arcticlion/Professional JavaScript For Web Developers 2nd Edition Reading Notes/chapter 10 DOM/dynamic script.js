/*
 * 创建动态脚本
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
