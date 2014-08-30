/*
 * 表单序列化
 */

function serialize(form) {
    var parts = new Array();
    var field = null;

    for (var i = 0. len = form.elements.length; i < len; i++) {
        field = form.elements[i];

        switch(field.type) {
            case "select-one":
            case "select-multiple":
                for (var j = 0, optLen = field.options.length; j < optLen; j++) {
                var option = field.options[j];
                if (option.selected) {
                    var optValue = "";
                    //检测特性,IEspecified属性,其他hasAttribute()
                    if (option.hasAttribute) {
                        //不存在value，值为空，使用选项文本代替
                        optValue = (option.hasAttribute("value") ? option.value : option.text);
                    } else {
                        optValue = (option.attributes["value"].specified ? option.value : option.text);
                    }
                    parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
                }
            }
                break;
            
            case undefined:    //字段集
            case "file":       //文件输入
            case "submit":     //提交按钮
            case "reset":      //重置按钮
            case "button":     //自定义按钮
                break;
            case "radio":      //单选按钮
            case "checkbox":   //复选框
                if (!field.checked) {
                    break;
                }
            /*执行默认操作*/

            default:
                parts.push(encodeURICOmponent(field.name) + "=" + encodeURICOmponent(field.value));
        }
    }
    //"&"分隔每个表单字段
    return parts.join("&");
}


        
