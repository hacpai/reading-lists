/*
 * 选择框脚本
 *     选择选项
 *         selectIndex:访问选中项的最简单方式
 *         options:控制所有<option>的HTMLCollection
 *         add(newOption, relOption):<relOption>前插入<newoption>
 *         multiple:布尔值,是否允许多项选择
 *         SelectedIndex:选中项索引
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

