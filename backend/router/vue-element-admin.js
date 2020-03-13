const express = require('express')
const Result = require('../models/Result')
const {querySql} = require('../db')
const router = express.Router()

router.post('/user/login', function(req, res, next) {
    console.log('/vue-element-admin/user/login', req.body)
    // querySql('select * from admin_user').then(results =>{
    //     console.log(results)
    // })
    new Result({token: 'admin-token'},'登陆成功').success(res)
})

router.get('/user/info', function(req, res, next) {
    console.log('/vue-element-admin/user/info', req.body)
    new Result({roles: '[admin]',name: 'admin',avatar: 'https://www.youbaobao.xyz/mpvue-res/logo.jpg',introduction: 'adminintro'},'登陆成功').success(res)
})

module.exports = router
