<?php 
class Operation{
    private $numA = 0;
    private $numB = 0;

    public function __get($name){
        return $this->$name;
    }

    public function __set($name, $value){
        $this->$name = $value;
    }

    public function getResult(){
        $result = 0;
        return $result;
    }
}

class OperationAdd extends Operation{
    public function getResult(){
        $result = $this->numA + $this->numB;
        return $result;
    }
}

class OperationSub extends Operation{
    public function getResult(){
        $result = $this->numA - $this->numB;
        return $result;
    }
}

class OperationMuti extends Operation{
    public function getResult(){
        $result = $this->numA * $this->numB;
        return $result;
    }
}

class OperationDivi extends Operation{
    public function getResult(){
        if($this->numB == 0){
            throw new Exception();
        }
        $result = $this->numA / $this->numB;
        return $result;
    }
}

class OperationFactory{
    public static function createOperate($oper){
        switch($oper){
        case '+':
            $opr = new OperationAdd();
            break;
        case '-':
            $opr = new OperationSub();
            break;
        case '*':
            $opr = new OperationMuti();
            break;
        case '/':
            $opr = new OperationDivi();
            break;
        }
        return $opr;
    }
}

$opr = OperationFactory::createOperate($_POST['oper']);
$opr->__set('numA', $_POST['numA']);
$opr->__set('numB', $_POST['numB']);
$res = $opr->getResult();
echo $res;
?>
