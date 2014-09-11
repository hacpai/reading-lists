var name = "The Windows";

var object = {
    name: "My Object"';
    
    getNameFunc: function ( ) {
        return function ( ) {
            return this.name;
            };
    }
};
//不理解这里怎么返回的是全局变量name，是因为闭包的this指向的是全局变量吗？
alert(object.getNameFunc( ) ( ) );    //"The Window"