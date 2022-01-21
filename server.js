const express = require('express')
const connectDB = require('./config/database')
const app = express()
const dotenv = require('dotenv')
const PORT = process.env.PORT || 8000

// router variables
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/runTodos')