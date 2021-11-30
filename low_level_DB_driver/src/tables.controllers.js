const tablesServices = require('./tables.services')
const tableControllers = {}

tableControllers.getAllItemTable = async (req, res) => {
    try {
        let items = await tablesServices.getAllItemTable()
        res.status(200).json(items)
    } catch (error) {
        res.send(error)
    }
}

tableControllers.getAllIngredientsTable = async (req, res) => {
    try {
        let ingredients = await tablesServices.getAllIngredientsTable()
        res.status(200).json(ingredients)
    } catch (error) {
        res.send(error)
    }
}

tableControllers.getAllDishTable = async (req, res) => {
    try {
        let dishes = await tablesServices.getAllDishTable()
        res.status(200).json(dishes)
    } catch (error) {
        res.send(error)
    }
}

tableControllers.getARowFromTableById = async (req, res) => {
    try {
        let id = req.params.id
        let tableName = req.params.table
        let row = await tablesServices.getARowFromTableById(id, tableName)
        res.status(200).json(row)
    } catch (error) {
        res.send(error)
    }
}

exports.module = tableControllers