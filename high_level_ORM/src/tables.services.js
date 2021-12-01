const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const tablesServices = {}

tablesServices.getAllItemTable = async () => { 
    try {
        let items = await prisma.item.findMany()
        return items
    } catch (error) {
        console.log(error)
    } 
}

tablesServices.getAllIngredientsTable = async () => {
    try {
        let ingredients = await prisma.ingredient.findMany()
        return ingredients
    } catch (error) {
        console.log(error)
    }
}

tablesServices.getAllDishTable = async () => {
    try {
        const dishes = await prisma.dish.findMany()
        return dishes
    } catch (error) {
        console.log(error)
    }
}

// tablesServices.getARowFromTableById = async (id, table) => {
//     try {
//         const row = await pool.query('SELECT * FROM table=? WHERE id=?', [table, id])
//         return row
//     } catch (error) {
//         console.log(error)
//     }
// }

module.exports = tablesServices