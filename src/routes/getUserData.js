'use strict';

const express = require('express');
const router = express.Router();

/* 

  userDataSchema

  user = {
    profileUrl: String,
    specialty: String
  }

  coursesSchema

  courses: [
    {
      bageUrl: "http://x.com",
      title: 'Python',
      teacher: 'Facundo García Martoni',
      difficulty: 'Básico',
      duration: 4
    }
  ]


*/

const mainService = require('../services/mainService');
const MainServices = new mainService();

router.post('/', async (req, res) => {
  const user = req.body.user;

  console.log(user);

  if (!user.profileUrl || !user.specialty)
    res.status(400).send({
      error: true,
      message: 'Data empty',
    });

  res.status(200).send({
    error: false,
    courses: [
      {
        badgeUrl: 'http://x.com',
        title: 'Python',
        teacher: 'Facundo García Martoni',
        difficulty: 'Básico',
        durationInHours: 4,
      },
    ],
  });
});

module.exports = router;
