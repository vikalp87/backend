require('dotenv').config();
const express=require('express');
const app=express();
const port=3000;

const data={
"name":"vikalp jain",
"class":"9",
"subject":"Maths"
}

app.get('/',(req,resp)=>{
    resp.send('hello backend')
})
app.get('/login',(req,resp)=>{
    resp.send('<h1>please login</h1>')
})
app.get('/info',(req,resp)=>{
    resp.json(data);
})
app.listen(port,()=>{
    console.log(`your server is running on ${port}`)
})
