'use strict'
const axios = require('axios')

class MainServices {
  constructor() {}
  getCompletedCourses = async (user) =>{
    let courses;
    const url;
    try{
      courses = await axios.get(url, {
        params: {
          user: user
        }
      })
      return courses || {}
    }
    catch(err){
      console.error(err)
    }
  }

}


module.exports = MainServices
