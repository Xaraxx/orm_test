const mysql = require('mysql2')
const util = require('util')

require('dotenv').config({path: '.env.local'})


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

module.exports = connection  