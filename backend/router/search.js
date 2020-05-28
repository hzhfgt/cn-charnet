const express = require('express')
const Result = require('../models/Result')
const {querySql} = require('../db')
const router = express.Router()

// 单字查询

router.get('/singleChar/info', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)

    const queryParams = req.query

    const sqlString = " select * from info where info.character = ? "

    const sqlParams = [queryParams.charName];

    querySql(sqlString,sqlParams).then(results =>{
        const dataString = JSON.stringify(results);
        const data = JSON.parse(dataString);
        console.log(data)
        new Result(data,'查询成功').success(res)
    })
})

router.get('/singleChar/meaning', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)

    const queryParams = req.query

    const sqlString = " set @rownum = 0;\n" +
        "select @rownum := @rownum +1 AS number, meaning , example from meaning where meaning.character = ? "

    const sqlParams = [queryParams.charName];

    querySql(sqlString,sqlParams).then(results =>{
        const dataString = JSON.stringify(results);
        const data = JSON.parse(dataString);
        console.log(data)
        new Result(data,'查询成功').success(res)
    })
})

// 字形关系

router.get('/shapeRelations/whole-part', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)

    const queryParams = req.query

    const sqlParams = [queryParams.charName];

    const sqlString = " select * from component where component.character = ? "

    querySql(sqlString,sqlParams).then(results =>{
        const dataString = JSON.stringify(results);
        const data = JSON.parse(dataString);
        console.log(data)
        new Result(data,'查询成功').success(res)
    })
})

router.get('/shapeRelations/similarStructure', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)

    const queryParams = req.query

    const sqlParams = [queryParams.charName];

    const sqlString = " select `character` as charName , structure , 'some info' as info from info where info.structure = (SELECT structure from info where info.`character` = ?) "

    querySql(sqlString,sqlParams).then(results =>{
        const dataString = JSON.stringify(results);
        let data = JSON.parse(dataString);

        //数据多时进行分页处理，暂时只返回最多30条数据
        if(data.length >30){
            data = data.slice(0,30)
        }

        console.log(data)
        new Result(data,'查询成功').success(res)
    })
})

router.get('/shapeRelations/similarComponent', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)

    const queryParams = req.query

    const sqlParams = [queryParams.charName];

    const sqlString = "select components from component where component.`character` = ?"

    querySql(sqlString,sqlParams).then(results =>{
        const dataString = JSON.stringify(results);
        let data = JSON.parse(dataString);
        console.log(data[0]['components'])
        //去除重复组件
        let cps = new Set()
        for(let c of data[0]['components']){
            cps.add(c)
        }
        console.log(cps)
        //构造多个请求的数组
        sqls_arr = []
        sqlString2 =  "select `character` from component where component.components like ?"
        for(let c of cps){
            let paramStr = '%' + c + '%'
            sqlParams2 = [paramStr]
            console.log(sqlParams2)
            sqls_arr.push(querySql(sqlString2,sqlParams2))
        }
        Promise.all(sqls_arr).then(values => {
            returnData = []
            for(let index in values){
                let tempdata = values[index]
                if(tempdata.length >30){
                    tempdata = tempdata.slice(0,5)
                }
                let data2 = JSON.parse(JSON.stringify(tempdata))
                for(let i of data2){
                    let dataObj = {
                        charName: i['character'],
                        components: Array.from(cps)[index],
                        info: 'some info about this relation'
                    }
                    returnData.push(dataObj)
                }
                //console.log(data2)
                //console.log(Array.from(cps)[index])
            }
            console.log(returnData)
            new Result(returnData,'查询成功').success(res)
        })
    })
})

router.get('/shapeRelations/similarChoke', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)

    const queryParams = req.query

    const sqlParams = [queryParams.charName];

    const sqlString = " select `character` as charName , stroke_number as strokes , 'some info' as info from info where info.stroke_number = (SELECT stroke_number from info where info.`character` = ?) "

    querySql(sqlString,sqlParams).then(results =>{
        const dataString = JSON.stringify(results);
        let data = JSON.parse(dataString);

        //数据多时进行分页处理，暂时只返回最多30条数据
        if(data.length >30){
            data = data.slice(0,30)
        }

        console.log(data)
        new Result(data,'查询成功').success(res)
    })
})

// 字义关系

router.get('/meaningRelations/fanCha', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)

    const queryParams = req.query

    const sqlParams = [queryParams.charName];

    const sqlString = " select `character` as charName,meaning from meaning where meaning.meaning like \'%" + queryParams.charName + "%\' "

    querySql(sqlString,sqlParams).then(results =>{
        const dataString = JSON.stringify(results);
        let data = JSON.parse(dataString);

        //数据多时进行分页处理，暂时只返回最多30条数据
        if(data.length >30){
            data = data.slice(0,30)
        }

        console.log(data)
        new Result(data,'查询成功').success(res)
    })
})

router.get('/meaningRelations/fanCha_SW', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)

    const queryParams = req.query

    const sqlParams = [queryParams.charName];

    const sqlString = " select `character` as charName,meaning from meaning_shuowen where meaning_shuowen.meaning like \'%" + queryParams.charName + "%\' "

    querySql(sqlString,sqlParams).then(results =>{
        const dataString = JSON.stringify(results);
        let data = JSON.parse(dataString);

        //数据多时进行分页处理，暂时只返回最多30条数据
        if(data.length >30){
            data = data.slice(0,30)
        }

        console.log(data)
        new Result(data,'查询成功').success(res)
    })
})

router.get('/meaningRelations/variants', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)

    const queryParams = req.query

    const sqlParams = [queryParams.charName];

    const sqlString = " select char2 as charName, relation as type from variants where variants.char1 = ? "

    querySql(sqlString,sqlParams).then(results =>{
        const dataString = JSON.stringify(results);
        let data1 = JSON.parse(dataString);
        // 去除重复数据
        let data2 = new Set()
        let data3 = []
        for(let d of data1){
            if(!data2.has(d['charName'])){
                data2.add(d['charName'])
                data3.push(d)
            }
        }
        // 数据多时进行分页处理，暂时只返回最多30条数据
        if(data3.length >30){
            data3 = data3.slice(0,30)
        }

        console.log(data3)
        new Result(data3,'查询成功').success(res)
    })
})

// 字音关系
router.get('/pronounceRelations', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)

    const queryParams = req.query

    const charName = queryParams.charName;
    const options = queryParams.options;
    console.log(options)

    firstSqlString = "select * from pronounce where pronounce.`character` = ?"

    querySql(firstSqlString,[charName]).then(results => {
        const dataString = JSON.stringify(results);
        let data = JSON.parse(dataString)[0];

        sql1 = "(select id, `character`, pinyin from pronounce where pronounce.shengmu = \'" + data['shengmu'] +"\') a"
        sql2 = "(select id, `character`, pinyin from pronounce where pronounce.yunmu = \'" + data['yunmu'] + "\') b"
        sql3 = "(select id, `character`, pinyin from pronounce where pronounce.shengdiao = \'" + data['shengdiao'] + "\') c"
        sql4 = "(select id, `character`, pinyin from pronounce where pronounce.biyin = \'" + data['biyin'] + "\') d"

        sql = ""
        sql_end = ""
        if(options.length>1){
            sql_end = " on "
            let first = true
            let first_end = 'z'
            if(options.indexOf('声母相同')!=-1){
                first = false
                sql = sql + sql1
                first_end = 'a'
                sql_end = sql_end + "a.id=a.id"
            }
            if(options.indexOf('韵母相同')!=-1){
                if(first){
                    first = false
                    sql = sql +sql2
                    first_end = 'b'
                    sql_end = sql_end + "b.id=b.id"
                }
                else{
                    sql = sql + " inner join " + sql2
                    sql_end = sql_end +" and " + first_end + ".id=b.id"
                }
            }
            if(options.indexOf('声调相同')!=-1){
                if(first){
                    first = false
                    sql = sql +sql3
                    first_end = 'c'
                    sql_end = sql_end + "c.id=c.id"
                }
                else{
                    sql = sql + " inner join " + sql3
                    sql_end = sql_end + " and " + first_end + ".id=c.id"
                }
            }
            if(options.indexOf('前后鼻音')!=-1){
                if(first){
                    first = false
                    sql = sql +sql4
                    first_end = 'd'
                    sql_end = sql_end + "d.id=d.id"
                }
                else{
                    sql = sql + " inner join " + sql4
                    sql_end = sql_end + " and " + first_end + ".id=d.id"
                }
            }

            sql = "select " + first_end + ".`character` as charName," + first_end + ".pinyin as pronounce from" + sql +sql_end

        }
        else{
            if(options.indexOf('声母相同')!=-1){
                sql = "select `character` as charName, pinyin as pronounce from pronounce where pronounce.shengmu = \'" + data['shengmu'] + "\'"
            }
            else if(options.indexOf('韵母相同')!=-1){
                sql = "select `character` as charName, pinyin as pronounce from pronounce where pronounce.yunmu = \'" + data['yunmu'] + "\'"
            }
            else if(options.indexOf('声调相同')!=-1){
                sql = "select `character` as charName, pinyin as pronounce from pronounce where pronounce.shengdiao = \'" + data['shengdiao'] + "\'"
            }
            else if(options.indexOf('前后鼻音')!=-1){
                sql = "select `character` as charName, pinyin as pronounce from pronounce where pronounce.biyin = \'" + data['biyin'] + "\'"
            }
        }

        console.log(sql)

        querySql(sql).then(results =>{
            const dataString = JSON.stringify(results);
            let data = JSON.parse(dataString);

            //数据多时进行分页处理，暂时只返回最多30条数据
            if(data.length >30){
                data = data.slice(0,30)
            }

            console.log(data)
            new Result(data,'查询成功').success(res)
        })

    })
})

//  其他关系

router.get('/otherRelations/tongjiazi', function(req, res, next) {
    // console.log('/search/singleChar/info')
    // console.log(req.query)

    const queryParams = req.query

    const sqlParams = [queryParams.charName];

    const sqlString = "select char2 , example , source from tongjiazi where tongjiazi.char1 = ?"
    console.log(sqlString)

    querySql(sqlString,sqlParams).then(results =>{
        const dataString = JSON.stringify(results);
        let data = JSON.parse(dataString);

        //数据多时进行分页处理，暂时只返回最多30条数据
        if(data.length >30){
            data = data.slice(0,30)
        }

        console.log(data)
        new Result(data,'查询成功').success(res)
    })
})


module.exports = router
