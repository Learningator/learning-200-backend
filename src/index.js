'use strict'

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require("body-parser");

app.use(cors({origin: '*'} )) 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use('/main', require('./routes/main'))

app.use('/', (req, res) => {
  res.status(404).send('Not Found')
})

app.listen(port, (err) => {
  if (err) {
    console.error('Error: ', err)
    return
  }
  console.log(`Listening http://localhost:${port}`)
})
module.exports = app