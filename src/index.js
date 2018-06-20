
const express = require('express')

// const functions = require('./functions.js')

const path = require('path')





const app = express()



app.use(express.static(path.join(__dirname, '../public')))



const server = app.listen(3001, () => {

 console.log('server started on 3001')

})