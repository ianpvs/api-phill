const express = require('express');
const consign = require('consign')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://ianpvs:root123456@cluster0-nvc84.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

consign()
    .include('src/config/passport.js')
    .then('src/routes.js')
    .into(app)

app.listen('3333');