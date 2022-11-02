const express = require('express')
const todoListController = require('../controllers/todoListController')
const router = express.Router();



router.get('/', todoListController.getAllTodoList)


module.exports = router