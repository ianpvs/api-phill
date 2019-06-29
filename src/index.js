const app = require('express')()
const consign = require('consign')
const cors = require('cors')

app.use(cors())

consign()
    .include('src/routes.js')
    .into(app)

app.listen('3333')