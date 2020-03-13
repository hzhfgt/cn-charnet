const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./router')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/',router);

const server = app.listen(5000, function() {
    const { address, port } = server.address()
    console.log('Http Server is running on http://%s:%s', address, port)
})
