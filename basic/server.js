const http=require('http')

http.createServer((req,res)=>{
    res.end('<h1>Hi Bro</h1><img src="pexels-kaique-rocha-447329.jpg" width="300px" height="300px" <p>Im chilling up here.</p>');

}).listen(8010);