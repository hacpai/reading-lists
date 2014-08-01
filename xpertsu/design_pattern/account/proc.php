<?php
require('../lib/php/my_lib.php');

/**
 * 现金收费抽象类
 * @param $money 原价
 * */
abstract class CashSuper{
    public abstract function acceptCash($money);
}

/**
 * 正常收费子类
 * @param $money 原价
 * */
class CashNormal extends CashSuper{
    public function acceptCash($money){
        return $money;
    }
}

/**
 * 打折收费子类
 * @param $money 原价
 * @param $rebate 折扣率
 * */
class CashRebate extends CashSuper{
    private $moneyRebate = 1;
    public function __construct($rebate){
        $this->moneyRebate = floatval($rebate);
    }
    public function acceptCash($money){
        return $money * $this->moneyRebate;
    }
}

/**
 * 返利收费子类
 * @param $money 原价
 * @param $moneyCondition 返利条件
 * @param $moneyReturn 返利钱数
 * */
class CashReturn extends CashSuper{
    private $moneyCondition = 0;
    private $moneyReturn = 0;
    public function __construct($moneyCondition, $moneyReturn){
        $this->moneyCondition = floatval($moneyCondition);
        $this->moneyReturn = floatval($moneyReturn);
    }
    public function acceptCash($money){
        $result = $money;
        if($money > $this->moneyCondition){
            $result = $money - floor($money / $this->moneyCondition) * $this->moneyReturn;
        }
        return $result;
    }
}

/**
 * 现金收费工厂类
 * @param $type 折扣种类
 * */
class CashFactory{
    public static function createCashAccept($type){
        $cs = null;
        switch($type){
        case "正常收费":
            $cs = new CashNormal();
            break;
        case "满300返100":
            $cs = new CashReturn('300', '100');
            break;
        case "打8折":
            $cs = new CashRebate('0.8');
            break;
        }
        return $cs;
    }
}

//dump($_POST);
$data['calctype'] = $_POST['calctype'];
$data['price'] = $_POST['price'];
$data['count'] = $_POST['count'];
$totalprice = $data['price'] * $data['count'];
$csuper = CashFactory::createCashAccept($data['calctype']);
$data['sum'] = $csuper->acceptCash($totalprice);
echo json_encode($data);
?>
