const express=require('express');
const  joi=require('joi');
const app=express();
app.use(express.json());

const customers=[
    {title:'swarup',id:1},
    {title:'karthik',id:2},
    {title:'swar',id:3},
    {title:'josh',id:4},
    {title:'arjun',id:5},
]
app.get('/',(req,res)=>{
    res.send('REST api created by me');
})
app.get('/customers/:id',(req,res)=>{
    const customer=customers.find(c=>c.id===parseInt(req.params.id));
    if(!customer)res.status(404).send('<h2>cant find it </h2>');
    res.send(customer);
})
app.post('/customers',(req,res)=>{
   const {error} =validateCustomer(req.body);
   if(error){
    res.status(400).send(error.details[0].message);
    return;
   }
   const customer={
    id:customers.length+1,
    title:req.body.title
   };
   customers.push(customer);
   res.send(customer);
    
})

app.put('/customers/:id',(req,res)=>{
    const customer=customers.find(c=>c.id===parseInt(req.params.id));
    if(!customer) res.status(404).send('<h3>not update</h3>');
    const {error}=validateCustomer(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;

    }
    customer.title=req.body.title;
    req.send(customer);
})
app.delete('/customers/:id',(req,res)=>{
    const customer=customers.find(c=>c.id===parseInt(req.params.id));
    if(!customer) res.status(404).send('<h3>not update</h3>');
    const index=customers.indexOf(customer);
    customers.splice(index,1);
    res.send(customer);
})
function validateCustomer(customer){
    const schema={
        title:joi.string().min(3).required()
    };
    return joi.validate(customer,schema);
}

app.get('/customers',(req,res)=>{
    res.send(customers);
}).listen(8089);
console.log('listening to 8079');