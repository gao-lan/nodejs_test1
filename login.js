/**
 * ������Ӧ����
 */
var http = require('http');
var url = require("url");
var qs = require("querystring");

function start() {  
 function onRequest(request, response) 
 { //��ȡurl��·�����ʣ������ж���ת��ͬ�Ŀ���������    
  var pathname = url.parse(request.url).pathname;     
    var str='';
    //������
    if(pathname == '/'){ 
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"}); 
        str="<h1>Welcome</h1><a href='/login'>login</a>";
         response.write(str); 
         response.end(); 
         console.log("Return to Home"); 
    }
    //��½����
    if(pathname == '/login'){

    	str = require('./login').get(request,response); 
        console.log("Turn to Login");
    }
    //��½����
    if(pathname == '/dologin'){
      var s = require('./login');
          var a="";

            //��������
            //����request��������ݱ��롣  
            request.setEncoding("utf8"); 
            request.addListener("data",function(postdata){

            //�Ա����ݽ��н���
            var c = decodeURIComponent(postdata);

            //ת����json����
            var b = qs.parse(c);  
            a = b; 
        });

        //����������ݴ����¼�
        request.addListener("end",function(){
            s.deal(request,response,a);
        });
       }

       //�޸Ľ���
       if(pathname == '/modify'){

	var s = require('./login');
        var data = url.parse(request.url).query;
 	data= qs.parse(data); //ת����JSON��ʽ���ݺô���

 	s.dealget(request,response,data);
     }
   }   
      http.createServer(onRequest).listen(8000);   
      console.log("8000."); 
  } 

  start();