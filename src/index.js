const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(require('./routes'));

mongoose.connect('mongodb+srv://ianpvs:root123456@cluster0-nvc84.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.listen('3333')