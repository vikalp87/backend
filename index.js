require('dotenv').config();
const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,resp)=>{
    resp.send('hello backend')
})
app.get('/login',(req,resp)=>{
    resp.send('<h1>please login</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log(`your server is running on ${port}`)
})
