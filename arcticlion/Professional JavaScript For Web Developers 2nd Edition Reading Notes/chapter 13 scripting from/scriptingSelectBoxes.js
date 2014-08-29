/*
 * 选择框脚本
 *     选择选项
 *         selectIndex:访问选中项的最简单方式
 *         options:控制所有<option>的HTMLCollection
 *         add(newOption, relOption):<relOption>前插入<newoption>
 *         multiple:布尔值,是否允许多项选择
 *         SelectedIndex:选中项第一项的索引,只能选择一项
 *         selected:布尔值,确定用户选择的项
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

