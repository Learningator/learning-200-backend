'use strict'
const axios = require('axios');


class MainServices {
  constructor() {}

  getCompletedCourses = async (user) =>{
    let courses;
    const url = 'https://learning-200-scraper.herokuapp.com/api/' + user;
    try{ 
      courses = await axios.get(url) 
      return courses.data || {}
    }
    catch(err){
      console.error(err)
    }
  }
 

  sendInfoToML = async ({params}) => {
    try{
      let response = await this.getCompletedCourses(params.user)
      if (response){
        response['field'] = params.field
        response['subfield'] = params.subfield
        response['user'] = params.user

        return response || {}
      }
      else{
        return {}
      }
      
    }catch(err){
      console.error(err)
    }

  }

}


module.exports = MainServices
