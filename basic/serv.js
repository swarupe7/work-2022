var express= require('express');
var app=express();
app.use(express.static('public'));
app.get('/form.html',function(req,res){
    res.sendFile(__dirname+"/"+"form.html");
})
app.get('/process_get',function(req,res){
    response={
        first_name:req.query.first_name,
        last_name:req.query.last_name   };
        res.end(JSON.stringify(response));
}).listen(8070);
console.log('working on 8070');