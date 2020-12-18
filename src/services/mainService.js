'use strict'
const axios = require('axios');
const { request } = require('express');

const fake_response_scraper = 
  {
  'message':'OK:200',
  'courses': 
    [{'id': 1750, 
      'title': 'Curso Profesional de Scrum', 
      'slug': 'scrum', 
      'image': 'https://static.platzi.com/media/achievements/platzi-bd.png', 
      'color': '#edd94f', 
      'badge': 'https://static.platzi.com/media/achievements/badges-scrum-9aaa566f-eb7c-4676-9e55-d36565ec582e.png', 
      'url': '/clases/scrum/', 
      'approved': true, 
      'diploma': null, 
      'completed': 100, 
      'career': 'Gestión de Proyectos', 
      'deprecated': false, 
      'diploma_link': '/p/davidjaras/curso/1750-scrum/diploma/detalle/', 
      'exam_url': null, 
      'material_seen': 0, 
      'total_material': 0, 
      'has_exam': '875cfea8-3bd4-47ac-a96f-ea447d809dc1'}]
  }

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
    const url = 'www';
    try{ /*
      courses = await axios.get(url, {
        data: {
          user: user
        }
      }) */
      return fake_response_scraper || {}
    }
    catch(err){
      console.error(err)
    }
  }
  sendInfoToML = async ({params}) => {
    const url = ''
    
    try{
      let response = await this.getCompletedCourses(params.user)//axios.post(url,info )
      response['field'] = params.field
      response['subfield'] = params.subfield
      response['user'] = params.user
      return response || {}
      //return response || {}
    }catch(err){
      console.error(err)
    }

  }

}


module.exports = MainServices
