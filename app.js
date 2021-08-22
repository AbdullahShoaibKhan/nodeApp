const express = require('express');
const app=express();
const mongoose = require('mongoose');
const dbURI= 'mongodb+srv://abdullah:236bscs@cluster0.mbzm0.mongodb.net/nodeTut?retryWrites=true&w=majority'; 
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('connected'))
.catch((err)=>console.log(err));
app.set('view engine','ejs');
app.listen(8080);

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/blogs/create',(req,res)=>{
    res.render('createBlog');
})