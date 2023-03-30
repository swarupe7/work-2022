var express=require('express');
var app=express();
app.get('/',function(req,res){
      res.send('Hello World');
});
app.get('/base',function(req,res){
    res.send('response is'+req.ip);
});
app.get('/about',function(req,res){
    res.send('This is about');
}).listen(8081);
console.log('playing on 8081');