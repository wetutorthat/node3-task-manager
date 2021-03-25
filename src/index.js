// Loading in express
const express = require('express')

// Load in mongoose file
require('./db/mongoose')

// Load in router for user
const userRouter = require('./routers/user')

// Load in router for task
const taskRouter = require('./routers/task')

// Create express application
const app = express()

// Define the port
const port = process.env.PORT

// Automatically parse incoming JSON into an object
app.use(express.json())
app.use(userRouter) // Register userRouter
app.use(taskRouter) // Register taskRouter

// Listen on port
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})