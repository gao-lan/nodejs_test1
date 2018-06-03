

//����MySQLģ��
var mysql = require("mysql");

//����һ��connection
var connection  = mysql.createConnection({

   host     : 'localhost',//������ַ
   user     : 'root',     //MySQL��֤�û���
   password : '',
   port     : '3306',     //�˿ں�Ĭ��3306
   database : 'test' 

});

connection.connect(function(err){

    if(err){       

        console.log('[query] - :'+err);

        return;

    }

    console.log('[connection connect]  succeed!');

});


//��ѯ����  
function query(sql,callback){  
        connection.query(sql, function(err, rows, fields) {  
            if (err) throw err;  
            callback(rows);  
               
      });   
} 
exports.query = query; 


//�ر�connection
connection.end(function(err){

    if(err){       

        return;

    }

    console.log('[connection end] succeed!');

});