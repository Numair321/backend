require('dotenv').config()
const express = require('express');
 
const app= express();
 const port= 4000
 app.get('/',(req,res)=>{
     res.send("Hello world!");
 }); 
app.get('/twitter',(req,res)=>{
    res.send("NumairAhmad");
}); 
app.get('/login',(req,res)=>{
    res.send("<h1>please login this page for next process</h1>")
});
app.get('/youtube',(req,res)=>{
    res.send("<h1> youtube home page</h1>")
});
 app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`);
        }
        console.log(`server is running on port: ${port}`);
 });

 