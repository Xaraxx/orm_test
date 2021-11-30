const express = require('express')
const mysql = require('mysql2')
const util = require('util')
require('dotenv').config({path: '.env.local'})

const app = express()  
console.log(process.env.DB_USER)

let connection = mysql.createPool({ 
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE
})

connection.getConnection(
  (error, connection) => {
    if(error){ 
      console.log(error)
    }

    if(connection){ 
      connection.release()
      console.log('DATABASE CONNECTION WAS SUCESFUL')
    }
  }
)

connection.query = util.promisify(connection.query)

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World! This is an ORM test api')
})

app.use('/tables/', require('./src/tables.routes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = connection