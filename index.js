require('dotenv').config()
const express = require('express');
 
const app= express();
 const port= 4000
 const githubdata={
    "_id": "65a83ab241d705577a105b20",
    "index": 0,
    "guid": "94c0ae62-f5c4-44ad-ab91-180dbc0a2c04",
    "isActive": false,
    "balance": "$3,392.55",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "brown",
    "name": "Sandra Bates",
    "gender": "female",
    "company": "ROTODYNE",
    "email": "sandrabates@rotodyne.com",
    "phone": "+1 (810) 483-3481",
    "address": "767 Gain Court, Collins, Indiana, 7488",
    "about": "Et deserunt sit pariatur ut ad tempor nulla enim. Labore aliquip nisi sint mollit irure irure labore id id do. Consequat anim ipsum dolor aliqua fugiat minim laboris eiusmod mollit ad laboris mollit do id.\r\n",
    "registered": "2014-03-01T06:12:48 -06:-30",
    "latitude": 55.528394,
    "longitude": 44.590988,
    "tags": [
      "Lorem",
      "duis",
      "mollit",
      "labore",
      "dolore",
      "non",
      "aliqua"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Wilma Hernandez"
      },
      {
        "id": 1,
        "name": "Yates Mclaughlin"
      },
      {
        "id": 2,
        "name": "Carolyn Norton"
      }
    ],
    "greeting": "Hello, Sandra Bates! You have 10 unread messages.",
    "favoriteFruit": "apple"
  }

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
app.get('/github',(req,res)=>{
    res.json(githubdata);
})
 app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`);
        }
        console.log(`server is running on port: ${port}`);
 });

 