'use strict'

const express = require('express')
const router = express.Router()

const mainService = require('../services/mainService')
const MainServices = new mainService()

router.post('/',async (req, res) => {
  const params = req.body
  if (!params.user || !params.field)
  res.status(400).send({
    error: true,
    message: 'Data empty',
  });
  else{
  const response = await MainServices.sendInfoToML({params})
  res
    .status(200)
    .send(response)
  }
})
module.exports = router