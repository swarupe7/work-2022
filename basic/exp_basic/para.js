var express=require('express');
var app=express();
app.get('/',function(req,res){
      res.send('Hello World');
});
app.post('/',function(req,res){
    console.log('hi');
    res.send('post req');
})
app.get('/about',function(req,res){
    res.send('This is about');
}).listen(8085);
console.log('playing on 8085');