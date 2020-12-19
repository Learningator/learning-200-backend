'use strict'

const express = require('express')
const router = express.Router()

const mainService = require('../services/mainService')
const MainServices = new mainService()

let fake_request_frontend= {
  'user': 'cvander',
  'field': 'DS',
  'subfield': 'ML/DL'
}

router.post('/',async (req, res) => {
  const params = req.body
  const response = await MainServices.sendInfoToML({params})
  res
    .status(200)
    .send(response)
})
module.exports = router