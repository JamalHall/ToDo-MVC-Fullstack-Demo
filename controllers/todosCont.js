const todoMod = require('../models/todoModel')
const moment = require('moment')


module.exports={

    getTodo: async (req,res)=>{
            try{                 
                const todoItems = await todoMod.find()
                const itemsLeft = await todoMod.countDocuments({complete: false})
                const date = moment(todoItems.date).format("MMM Do YY")
                console.log(date)
                res.render('todo.ejs',  {todoItems: todoItems, left: itemsLeft, newDate: date})
            }catch(err){ console.error(err)}
        },

    createTodo: async (req,res)=>{
            console.log(req.body)
            try{
                //console.log('createTodo')
                await todoMod.create({task: req.body.todoFormItem, date: req.body.formDate, complete: false})
                console.log('Todo has been added!',req.body)
                res.redirect('/todos')
            }catch(err){ console.error(err)}
        },

    completeTodo: async (req,res)=>{
            try{
                //console.log('completeTodo')
            }catch(err){ console.error(err)}
        },

    deleteTodo: async (req,res)=>{
            try{
                //console.log('deleteTodo')
            }catch(err){ console.error(err)}
        }

        
}