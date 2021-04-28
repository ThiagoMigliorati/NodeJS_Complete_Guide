const rootDir = require('./util/path')
const path = require('path')
const http = require('http');
const bodyParser = require('body-parser')
const express = require('express')

// routes
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.set('view engine','pug')
app.set('views','views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(shopRoutes)
app.use('/admin',adminRoutes.routes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})

app.listen(3000);
