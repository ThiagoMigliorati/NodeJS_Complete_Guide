const rootDir = require('./util/path')
const path = require('path')
const http = require('http');
const bodyParser = require('body-parser')
const express = require('express')

// routes
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.set('view engine','ejs')
app.set('views','views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(shopRoutes)
app.use('/admin',adminRoutes.routes)

app.use((req,res,next)=>{
    res.status(404).render('404', {pageTitle: 'Page Not found'})
})

app.listen(3000);
