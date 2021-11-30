const express = require('express')
const tablesControllers = require('./tables.controllers')

const router = new express.Router()

router.get('/item', tablesControllers.getAllItemTable)
router.get('/ingredients', tablesControllers.getAllIngredientsTable)
router.get('/dishes', tablesControllers.getAllDishTable)
router.get('/:table/:id', tablesControllers.getARowFromTableById)

module.exports = router