//server set up variables
const express = require('express')
const connectDB = require('./config/database')
const app = express()
const dotenv = require('dotenv')
const PORT = process.env.PORT || 8000

// router variables
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todospage')

//DB connection
dotenv.config({path: './config/.env'})
connectDB()

// Set EJS as templating engine
app.set('view engine','ejs')

//express configurations
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//router routes
app.use('/', homeRoutes)
app.use('/todospage', todoRoutes )

//Listen Method
app.listen(PORT, ()=>{
    console.log(`The Server is running on ${PORT} use ^c to chill server`)
})