const http = require('http');

const express = require('express')

const app = express()

app.use('/add-product',(req, res, next)=>{
    console.log('add product page!')
    res.send('<h1>Add Product</h1><br><h3>Add</h3>')
})

app.use('/',(req, res, next)=>{
    console.log('root page')
    res.send('<h1>Root</h1>')
})

app.listen(3000);
