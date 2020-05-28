const express = require('express')
const Result = require('../models/Result')
const {querySql} = require('../db')
const router = express.Router()

//  字义关系

router.post('/meaningRelations/variants', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)
    const queryParams = req.body
    console.log(queryParams)

    const sqlParams = [queryParams.char1,queryParams.char2,queryParams.relationType]

    const sqlString = "insert into variants_add values(?,?,?);"

    querySql(sqlString,sqlParams).then(results => {
        new Result().success(res)
    })
})



//  其他关系

router.post('/otherRelations/tongjiazi', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)
    const queryParams = req.body
    console.log(queryParams)

    const sqlParams = [queryParams.char1,queryParams.char2,queryParams.example,queryParams.source]

    const sqlString = "insert into tongjiazi_add values(?,?,?,?);"

    querySql(sqlString,sqlParams).then(results => {
        new Result().success(res)
    })
})

//  审核

router.get('/shenhe/refresh_tongjiazi', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)
    const queryParams = req.body
    console.log(queryParams)

    const sqlString = "select * from tongjiazi_add"

    querySql(sqlString).then(results => {
        const dataString = JSON.stringify(results);
        let data = JSON.parse(dataString);

        console.log(data)
        new Result(data,'查询成功').success(res)
    })
})

router.get('/shenhe/refresh_variants', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)
    const queryParams = req.body
    console.log(queryParams)

    const sqlString = "select * from variants_add"

    querySql(sqlString).then(results => {
        const dataString = JSON.stringify(results);
        let data = JSON.parse(dataString);

        console.log(data)
        new Result(data,'查询成功').success(res)
    })
})

router.post('/shenhe/tongjiazi', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)
    const queryParams = req.body
    console.log(queryParams)

    const sqlString = "insert into tongjiazi values(?,?,?,?);"
    const sqlString2 = "delete from tongjiazi_add where char1=? and char2=? and example=? and source=?"

    for(let i of queryParams){
        const sqlParams = [i.char1, i.char2, i.example, i.source]
        querySql(sqlString,sqlParams)
        querySql(sqlString2,sqlParams)
    }
    new Result().success(res)
})

router.post('/shenhe/variants', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)
    const queryParams = req.body
    console.log(queryParams)

    const sqlString = "insert into variants values(?,?,?);"
    const sqlString2 = "delete from variants_add where char1=? and char2=? and relationType=?"

    for(let i of queryParams){
        const sqlParams1 = [i.char1, i.relationType, i.char2]
        const sqlParams2 = [i.char1, i.char2, i.relationType]
        querySql(sqlString,sqlParams1)
        querySql(sqlString2,sqlParams2)
    }
    new Result().success(res)
})

router.post('/shenhe/tongjiazi_delete', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)
    const queryParams = req.body
    console.log(queryParams)

    const sqlString = "delete from tongjiazi_add where char1=? and char2=? and example=? and source=?"

    for(let i of queryParams){
        const sqlParams = [i.char1, i.char2, i.example, i.source]
        querySql(sqlString,sqlParams)
    }
    new Result().success(res)
})

router.post('/shenhe/variants_delete', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)
    const queryParams = req.body
    console.log(queryParams)

    const sqlString = "delete from variants_add where char1=? and char2=? relationType=?"

    for(let i of queryParams){
        const sqlParams = [i.char1, i.char2, i.relationType]
        querySql(sqlString,sqlParams)
    }
    new Result().success(res)
})

module.exports = router
