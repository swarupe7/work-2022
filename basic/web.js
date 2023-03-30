const {Console}=require('console');
const http=require('http');
const port=process.env.PORT ||3000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/html');
    
    console.log(req.url);
    if(req.url=='/'){
        res.statusCode=200;
        res.end('<h1>This is my  main page</h1>');
    }else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1>This is About page</h1>');
    }else{
        res.statusCode=404;
        res.end('<h1>page not found</h1>');
    }

})
server.listen(port,()=>{
    console.log(`server is running on ${port}`);
})