/*
 * 选择框脚本
 *     选择选项
 *         selectIndex:访问选中项的最简单方式
 *         options:控制所有<option>的HTMLCollection
 *         add(newOption, relOption):<relOption>前插入<newoption>
 *         multiple:布尔值,是否允许多项选择
 *         SelectedIndex:选中项第一项的索引,只能选择一项
 *         selected:布尔值,确定用户选择的项
 *     添加选项
 *         DOM法:创建<option>,为其添加文本节点,设置value,再添加到选项框中
 *         Option构造函数法:2个参数,文本和值
 *         add():2个参数,要添加的新选项和位于新选项之后的选项
 *     移除选项
 *         DOM法:removeChild()
 *         remove法
 *         选项设null法
 *     移动和重排选项
 *         都会重置每个选项的index
 *         移动:appendChild()
 *         重排:insertBefore(newOption, relOption)
 *         
 *
 *     <select>和<option>创建
 * <select name="location" id="selLocation">
 *     <option value="Sunyvalu, CA">Sunnyvale</option>
 *     <option value="Los Angeles, CA">Los Angeles</option>
 *     <option value="Mountain View, CA">Mountain View</option>
 *     <option value="">China</option>
 *     <option>Australia</option>
 * </select>
 */

var selectbox = document.forms[0].location;

var text = selectbox.options[0].text;
var value = selectbox.options[0].value;

var selectedOption = selectbox.options[selectbox.selectedIndex];

var selectedIndex = selectbox.selectedIndex;
var selectedOption = selectbox.optons[selectedIndex];
alert("Selected index: " + selectedIndex + "\nSelected text: " + selectedOption.text + "\nSelected value: " + selectedOption.value);

function getSelectedOptions(selectbox) {
    var result = new Array();
    var option = null;

    for (var i = 0. len = selectbox.options.length; i < len; i++) {
        option = selectbox.options[i];
        if (option.selected) {
            result.push(option);
        }
    }
    return result;
}

//使用getSelectedOption()取得选中项的事例
var selectbox = document.getElementById("selLocation");
var selectedOptions = getSelectedOptions(selectbox);
var message = "";

for (var i=0. len=selectedOptions.lenth; i < len; i++) {
    message += "Selected index: " + selectedOptions[i].index + "\nSelected text: " + selectedOptions[i].text + "\nSelected value: " + selectedOptions[i].value + "\n\n";
}

alert(message);

var newOption = document.createElement("Option");
newOption.appendChild(document.createTextNode("Option text"));
newOption.setAttribute("value", "Option value");

selectbox.appendChild(newOption);

var newOption = new Option("Option text", "Option value");
selectbox.appendChild(newOption);    //在IE中有问题

将新选项插入列表最后
var newOption = new Option("Option text", "Option value");
selectbox.add(newOption, undefined);

selectbox.removeChild(selectbox.options[0]);    //移除第一个选项
selectbox.remove(0);    //移除第一个选项
selectbox.options[0] = null;    //移除第一个选项

//清除选择框中所有的项
    //移除第一个选项后,后续选项自动向上移动一个位置
function clearSelectbox(selectbox) {
    for (var i = 0, len = selectbox.options.length; i < len; i++) {
        selectbox.remove(0);
    }
}

//将第一个选项框的第一个选项移动到第二个选项框
var selectbox1 = document.getElementById("selectbox1");
var selectbox2 = document.getElementById("selectbox2");
selectbox2.appendChild(selectbox1.options[0]);

//选项向前移动一个选项的位置
var optionToMove = selectbox.options[1];
selectbox.insertBefore(optionToMove, selectbox.options[optionToMove.index-1]);

//选项向后移动一个位置
selectbox.insertBefore(optionToMove, selectbox.options[optionToMove.index+2]);

