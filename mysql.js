

//调用MySQL模块
var mysql = require("mysql");

//创建一个connection
var connection  = mysql.createConnection({

   host     : 'localhost',//主机地址
   user     : 'root',     //MySQL认证用户名
   password : '',
   port     : '3306',     //端口号默认3306
   database : 'test' 

});

connection.connect(function(err){

    if(err){       

        console.log('[query] - :'+err);

        return;

    }

    console.log('[connection connect]  succeed!');

});


//查询数据  
function query(sql,callback){  
        connection.query(sql, function(err, rows, fields) {  
            if (err) throw err;  
            callback(rows);  
               
      });   
} 
exports.query = query; 


//关闭connection
connection.end(function(err){

    if(err){       

        return;

    }

    console.log('[connection end] succeed!');

});