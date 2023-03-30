const express=require('express');
const path=require('path');
const app=express();
const uuid=require('uuid');

const logger=require('./logger');
const members =require('./members');
app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get('/',(req,res)=>{
    res.send('<h2>hi welcome to home page</h2>');
})

app.get('/html',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
})

const middleware=(req,res,next)=>{
    console.log('it is middleware');
    next();
}



app.use(logger);

//single req
app.get('/api/members/:id',(req,res)=>{

    const found=members.some(member=>member.id===parseInt(req.params.id));
    if(found){
        res.json(members.filter(member=>member.id===parseInt(req.params.id)));
    }else{
        console.log('not found status');
        res.status(400).json({msg:'id not found'})
    }
    
})

app.get('/api/members',(req,res)=>{
    res.json(members);
})

//post request

app.post('/api/members',(req,res)=>{
    const newMember={
       id:uuid.v4(),
       name:req.body.name,
       email:req.body.email,
       status:'active'
    }
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg:'include all details'});
    }
    members.push(newMember);
    res.json(members);
})

//update

app.put('/api/members/:id',(req,res)=>{

    const found=members.some(member=>member.id===parseInt(req.params.id));
    if(found){
       const updMember=req.body;
       members.forEach(member=>{
        if(member.id===parseInt(req.params.id)){
            member.name=updMember.name ? updMember.name:member.name;
            member.email=updMember.email ? updMember.email:member.email;


            res.json({msg:'message updated' ,member});
        }
       });
    }else{
        console.log('not found status');
        res.status(400).json({msg:'id not found'})
    }
    
})

//delete

app.delete('/api/members/:id',(req,res)=>{

    const found=members.some(member=>member.id===parseInt(req.params.id));
    if(found){
        res.json({msg :'Member deleted',member:members.filter(member=>member.id!==parseInt(req.params.id))});
    }else{
        console.log('not found status');
        res.status(400).json({msg:'id not found'})
    }
    
})

app.get('/api/members',(req,res)=>{
    res.json(members);
})




app.listen(3001);