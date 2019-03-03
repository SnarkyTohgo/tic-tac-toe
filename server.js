// Dependencies
const express = require('express')
const fs = require('fs')

// Config
const port = process.env.PORT || 3000
const app = express()
const root = __dirname

// Options 
app.use(express.static(`${root}/public`))

app.listen(port, () => console.log(`Server is up on port ${port}`))
