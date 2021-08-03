const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

const adminData = require('./admin')

router.get('/',(req, res, next)=>{
    let products = adminData.products
    res.render('shop',{
        prod: products, 
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    })
})

module.exports = router