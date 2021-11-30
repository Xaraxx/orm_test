const express = require('express')

require('dotenv').config({path: '.env.local'})

const app = express()  


const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World! This is an Raw query example test api')
})

app.use('/tables/', require('./src/tables.routes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

