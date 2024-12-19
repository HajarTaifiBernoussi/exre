const express = require('express')
const app = express() //express c'est une fonction
const users =[]
app.get('/',(req,res)=>{
    res.send('welcome to home')
})
app.get('/users',(req,res)=>{
    res.send('heloo users ')
})
app.post('/create',(req,res)=>{
    console.log(app.body)
    res.send('created')
})
app.listen(3000,()=>{
    console.log('serveur listen at port 3000')
})
app.get('/users',()=>{})