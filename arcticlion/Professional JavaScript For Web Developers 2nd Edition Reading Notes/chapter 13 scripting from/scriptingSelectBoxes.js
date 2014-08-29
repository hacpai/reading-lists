/*
 * 选择框脚本
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

var text = selectbox.option[0].text;
var value = selectbox.option[0].value;

