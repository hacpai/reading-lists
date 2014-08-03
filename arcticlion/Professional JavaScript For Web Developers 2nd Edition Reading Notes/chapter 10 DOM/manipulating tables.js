/*
 * 操作表格
 * <table border="1" width="100%">
 *  <tbody>
 *      <tr>
 *          <td>Cell 1,1</td>
 *          <td>Cell 2,1</td>
 *      </tr>
 *      <tr>
 *          <td>Cell 1,2</td>
 *          <td>Cell 2,2</td>
 *  </tbody>
 * </table>
 * DOM方法创建
 * tbody.inserRow(0)创建一行到<tbody>位置0上
 * tbody.row[0]引用新插入的行
 * insertCell()传入并放置单元格位置
 * tbody.rows[0].cells[0]引用插入的单元格
 */
//创建table
var table = document.createElement("table");
table.border = 1;
table.width = "100%";

//创建tbody
var tbody = document.createElement("tbody");
table.appendChild(tbody);

//创建第一行
tbody.insertRow(0);
tbody.row[0].insertCell(0);
tbody.row[0].cells[0].appendChild(document.createTextNode("Cell 1, 1"));
tbody.row[0].inserCell(1);
tbody.row[0].cells[1].appendChild(document.createTextNode("Cell 2, 1"));

//创建第二行
tbody.inserRow(1);
tbody.row[1].insertCell(0);
tbody.row[1].cells[0].appendChild(document.createTextNode("Cell 1, 2"));
tbody.row[1].insertCell(1);
tbody.row[1].cells[1].appendChild(document.createTextNode("Cell 2, 2"));

//将表格添加到文档主体中
document.body.appendChild(table);

