'use strict'
const axios = require('axios');

const fake_lp = {
  'LearningPath':
    [
      {
        'course1': 'Ingenieria de datos conn python', 
        'course2': 'Curso de Algo'
      }
    ]
}


class MainServices {
  constructor() {}

  getCompletedCourses = async (user) =>{
    let courses;
    const url = 'https://learning-200-scraper.herokuapp.com/api/' + user;
    try{ 
      courses = await axios.get(url) 
      //console.log(courses.data)
      return courses.data || {}
    }
    catch(err){
      console.error(err)
    }
  }
  getCutomizedLP = async(response) => {
    const url = 'www'
    try{
      /*
      const lp = await axios.get(url, response)
      if (lp){
        return lp
      }
      else{
        return {}
      } */
      console.log(response)
      return fake_lp
    }catch(err){
      console.error(err)
    }

  }

  sendInfoToML = async ({params}) => {
    const url = ''
    let customizedLP;
    try{
      let response = await this.getCompletedCourses(params.user)
      if (response){
        response['field'] = params.field
        response['subfield'] = params.subfield
        response['user'] = params.user
        customizedLP = await this.getCutomizedLP(response)

        return customizedLP || {}
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
