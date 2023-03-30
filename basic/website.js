const http=require('http');
const port=process.env.PORT ||3000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/html');
    res.end('<h1>This is Main Page</h1>')

})
server.listen(port,()=>{
    console.log(`server is running on ${port}`);
})