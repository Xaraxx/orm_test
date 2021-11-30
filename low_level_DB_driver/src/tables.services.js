const pool = require("../connection")

const tablesServices = {}

tablesServices.getAllItemTable = async () => { 
    try {
        const items = await pool.query('SELECT * FROM item')
        return items
    } catch (error) {
        console.log(error)
    } 
}

tablesServices.getAllIngredientsTable = async () => {
    try {
        const ingredients = await pool.query('SELECT * FROM ingredient')
        return ingredients
    } catch (error) {
        console.log(error)
    }
}

tablesServices.getAllDishTable = async () => {
    try {
        const dishes = await pool.query('SELECT * FROM dish')
        return dishes
    } catch (error) {
        console.log(error)
    }
}

tablesServices.getARowFromTableById = async (id, table) => {
    try {
        const row = await pool.query('SELECT * FROM table=? WHERE id=?', [table, id])
        return row
    } catch (error) {
        console.log(error)
    }
}

module.exports = tablesServices