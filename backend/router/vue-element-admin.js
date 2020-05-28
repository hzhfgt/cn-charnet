const express = require('express')
const Result = require('../models/Result')
const {querySql} = require('../db')
const router = express.Router()

router.post('/user/login', function(req, res, next) {
    console.log('/vue-element-admin/user/login', req.body)
    const queryBody = req.body
    console.log(queryBody['username'])
    if(queryBody['username']=='admin'){
        new Result({token: 'admin-token'},'登陆成功').success(res)
    }
    else{
        new Result({token: 'editor-token'},'登陆成功').success(res)
    }


})

router.get('/user/info', function(req, res, next) {
    console.log('/vue-element-admin/user/info', req.body)

    const queryParams = req.query
    const sqlParams = [queryParams.charName];

    if(queryParams.token=='admin-token'){
        new Result({roles: ['admin'],name: 'admin',avatar: 'https://www.youbaobao.xyz/mpvue-res/logo.jpg',introduction: 'adminintro'},'登陆成功').success(res)
    }
    else{
        new Result({roles: ['editor'],name: 'editor',avatar: 'https://www.youbaobao.xyz/mpvue-res/logo.jpg',introduction: 'editor'},'登陆成功').success(res)
    }

})

module.exports = router
