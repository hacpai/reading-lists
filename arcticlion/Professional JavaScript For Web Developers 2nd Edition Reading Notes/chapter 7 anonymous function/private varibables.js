//创建私有变量和自定义类型的特权方法
function MyObject( ) {

    //函数的私有变量
    var privateVariable = 10;
   
    function privateFunction ( ) {
        return false;
    }

    //特权方法
    this.publicMethod = function ( ) {
        privateVariable++;
        return privateFuncton( );
    };
}

//单例的特权方法 

//增强的模块模式
function BaseComponent( ) {
}

function OtherComponent( ) {
}

var application = function( ) {

    //私有变量和函数
    var components = new Array( );

    //初始化
    components.push(new BaseComponent( ) );

    //创建 applicantion 的一个局部副本
    var app = new BaseComponent ( );

    //公共接口
    app.getComponentCount = function ( ) {
        return components.length;
    };

    app.registerComponent = function ( component ) {
        if (typeof components.push( component);
        }
     };

    //返回这个副本
    return app;
} ( );