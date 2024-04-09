// console.log("bhai kya chal raha hai?");
//import express from 'express';  // ye bhi tareeka hai import karne ka aur doosra tareeka hai require ka
require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('suryadotcom')
    
  })

  app.get('/login',(req,res)=>{
    res.send('login page')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})