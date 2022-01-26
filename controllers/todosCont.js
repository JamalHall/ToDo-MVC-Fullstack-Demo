const todoMod = require('../models/todoModel')
const moment = require('moment')


module.exports={

    getTodo: async (req,res)=>{
            try{                 
                const todoItems = await todoMod.find()
                const itemsLeft = await todoMod.countDocuments({complete: false})
                const date = moment(todoItems.date).format("MMM Do YY")
                console.log('get ran')
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

    statusTodo: async (req,res)=>{
            console.log(req.body)
            const stat = req.body.status
            const setStat = (stat=='false')?'true':'false'
                try{ 
                    await todoMod.findOneAndUpdate({_id: req.body.todoIdFromMainJSFile}, {complete: setStat})
                    console.log(`Status updated to ${setStat}`)
                    res.json(`Status updated to ${setStat}`)
                }catch(err){ console.error(err)}
            },

    deleteTodo: async (req,res)=>{
        console.log(req.body)
        const taskName = req.body.taskName
        try{ 
                await todoMod.findOneAndDelete({_id: req.body.todoIdFromMainJSFile})
                console.log(`${taskName} task deleted`)
                res.json(`${taskName} task deleted`)
            }catch(err){ console.error(err)}
        },

}


