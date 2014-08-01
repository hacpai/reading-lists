<?php
require('../lib/php/my_lib.php');
//dump($_POST);
$data['price'] = $_POST['price'];
$data['count'] = $_POST['count'];
$data['sum'] = $data['price'] + $data['count'];
echo json_encode($data);
?>
