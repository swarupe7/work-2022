const express=require('express')
const app=express();
const path=require('path')
const bodyparser=require('body-parser');
const session=require('express-session');
const {v4:uuidv4}=require('uuid');
const router=require('./router');


const port=process.env.PORT||8050;
//res.json({ error: err })

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.use('/static',express.static(path.join(__dirname,'public')))

app.use(session({
    secret:uuidv4(),//'secret',
    resave:true,
    saveUninitialized:true
}))

app.use('/route',router);

//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
app.get('/',(req,res)=>{
    res.render('base',{title:"Login"});
})

app.listen(port,()=>{console.log('Listened to http://localhost:8050')});

//console.log('listening to server');