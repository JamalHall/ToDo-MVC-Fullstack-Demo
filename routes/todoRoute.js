const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todosCont')

router.get('/', todosController.getTodo)
router.post('/createTodo', todosController.createTodo)
router.put('/markStatus', todosController.statusTodo)
router.delete('/deleteTodo', todosController.deleteTodo)

module.exports=router