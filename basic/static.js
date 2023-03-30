var express=require('express');

var app=express();
app.use(express.static('public'));
app.get('/',function(req,res){
      res.send('Hello World');
});

app.get('/about',function(req,res){
    res.send('This is about');
}).listen(8089);
console.log('playing on 8089');