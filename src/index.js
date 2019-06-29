const app = require('express')()
const consign = require('consign')
const cors = require('cors')

app.use(cors())

app.use(require('./routes'));

app.listen('3333')