'use strict'

const express = require('express')
const router = express.Router()

const mainService = require('../services/mainService')
const MainServices = new mainService()

router.get('/',async (req, res) => {
  const temp = 'temp'
  res
    .status(200)
    .send()
})
module.exports = router