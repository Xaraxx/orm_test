const pool = require('../index')

const tablesServices = {}

tablesServices.getAllItemTable = async () => { 
    try {
        const query = await pool.query('SELECT * FROM item')
        return query
    } catch (error) {
        console.log(error)
    } 
}

tablesServices.getAllIngredientsTable = async () => {
    try {
        const query = await pool.query('SELECT * FROM ingredient')
        return query
    } catch (error) {
        console.log(error)
    }
}

tablesServices.getAllDishTable = async () => {
    try {
        const query = await pool.query('SELECT * FROM dish')
        return query
    } catch (error) {
        console.log(error)
    }
}

tablesServices.getARowFromTableById = async (id, table) => {
    try {
        const query = await pool.query('SELECT * FROM table=? WHERE id=?', [table, id])
        return query
    } catch (error) {
        console.log(error)
    }
}

module.exports = tablesServices