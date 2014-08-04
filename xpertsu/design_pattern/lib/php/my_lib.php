<?php
/**
 * 常用自定义方法
 * */

/**
 * 格式化数组输出
 * @param $array 被输出数组
 * @param $method 输出方法名
 * */
function dump($array, $method='print_r'){
    echo "<pre>";
    $method($array);
    echo "</pre>";
}

?>
