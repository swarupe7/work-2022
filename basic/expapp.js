const exp=require('express')
const app=exp();
const port=3500;
app.get('/',(req,res)=>{
    res.send('Hello world');
})
app.get('/about',(req,res)=>{
    res.send('About Page');
})

app.listen(port,()=>{
    console.log(`Example app listeng at ${port}`)
})