const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todosCont')

router.get('/', todosController.getTodo)
router.post('/createTodo', todosController.createTodo)
router.put('/markComplete', todosController.completeTodo)
router.delete('/deleteTodo', todosController.deleteTodo)

module.exports=router