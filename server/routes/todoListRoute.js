const express = require('express')
const todoListController = require('../controllers/todoListController')
const router = express.Router();



router.get('/', todoListController.getAllTodoList)
router.post('/add', todoListController.addTodo)
router.post('/:id', todoListController.deleteTodo)

module.exports = router