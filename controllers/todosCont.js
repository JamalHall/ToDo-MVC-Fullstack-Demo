const todoMod = require('../models/todoModel')

module.exports={

        getTodo: async (req,res)=>{
            try{
                console.log('getTodo')
                const todoItems = await todoMod.find()
                const itemsLeft = await todoMod.countDocuments({complete: false})
                res.render('todo.ejs', {todos: todoItems, left: itemsLeft} )
            }catch(err){ console.error(err)}
        },

        createTodo: async (req,res)=>{
            try{
                console.log('createTodo')
            }catch(err){ console.error(err)}
        },

        completeTodo: async (req,res)=>{
            try{
                console.log('completeTodo')
            }catch(err){ console.error(err)}
        },

        deleteTodo: async (req,res)=>{
            try{
                console.log('deleteTodo')
            }catch(err){ console.error(err)}
        }
}
   

