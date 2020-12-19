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

const fake_response_scraper2 = {
  "courses": [
    {
      "approved": true, 
      "badge": "https://static.platzi.com/media/achievements/programacion-basica2x.png", 
      "career": "Desarrollo de Aplicaciones Android", 
      "color": "#CB13A1", 
      "completed": 100, 
      "deprecated": false, 
      "diploma": null, 
      "diploma_link": "/p/freddier/curso/39-programacion-basica-2014/diploma/detalle/", 
      "exam_url": null, 
      "has_exam": "5d2977f5-2291-4284-8f34-e80b4a4bc0a0", 
      "id": 39, 
      "image": "https://static.platzi.com/media/courses/basica.png", 
      "material_seen": 0, 
      "slug": "programacion-basica-2014", 
      "title": "Curso de Programaci\u00f3n B\u00e1sica 2014", 
      "total_material": 0, 
      "url": "/clases/programacion-basica-2014/"
    }, 
    {
      "approved": true, 
      "badge": "https://static.platzi.com/media/achievements/1213-62a1def8-aa3f-44df-a1da-4c7d0d0c93a7.png", 
      "career": "Transformaci\u00f3n Digital", 
      "color": "#472c09", 
      "completed": 100, 
      "deprecated": false, 
      "diploma": null, 
      "diploma_link": "/p/freddier/curso/1213-seguridad-empresas-2018/diploma/detalle/", 
      "exam_url": null, 
      "has_exam": "76e96243-9bdf-4c22-8409-ff8694266254", 
      "id": 1213, 
      "image": "https://static.platzi.com/media/achievements/platzi-bd.png", 
      "material_seen": 0, 
      "slug": "seguridad-empresas-2018", 
      "title": "Curso de Seguridad Inform\u00e1tica para Empresas 2018", 
      "total_material": 0, 
      "url": "/clases/seguridad-empresas-2018/"
    }, 
    {
      "approved": true, 
      "badge": "https://static.platzi.com/media/achievements/1050-bfb74f83-8e2e-4ff7-a66d-77d2c0067908.png", 
      "career": "Backend Profesional", 
      "color": "#95c73f", 
      "completed": 100, 
      "deprecated": false, 
      "diploma": null, 
      "diploma_link": "/p/freddier/curso/1050-programacion-basica/diploma/detalle/", 
      "exam_url": null, 
      "has_exam": "f1b23fdc-e338-4acb-a63f-032bd80c9a85", 
      "id": 1050, 
      "image": "https://static.platzi.com/media/courses/programacion-basica2x.png", 
      "material_seen": 0, 
      "slug": "programacion-basica", 
      "title": "Curso Gratis de Programaci\u00f3n B\u00e1sica", 
      "total_material": 0, 
      "url": "/clases/programacion-basica/"
    }, 
    {
      "approved": true, 
      "badge": "https://static.platzi.com/media/achievements/badge-ing-software-2017-18f503fd-36bd-42d8-b1a1-492865659687.png", 
      "career": "Desarrollo Backend con Ruby", 
      "color": "#95c73f", 
      "completed": 100, 
      "deprecated": false, 
      "diploma": null, 
      "diploma_link": "/p/freddier/curso/1098-ingenieria/diploma/detalle/", 
      "exam_url": null, 
      "has_exam": "45d7fe75-b765-4c3a-959e-21a9f9a695e7", 
      "id": 1098, 
      "image": "https://static.platzi.com/media/achievements/platzi-bd.png", 
      "material_seen": 0, 
      "slug": "ingenieria", 
      "title": "Fundamentos de Ingenier\u00eda de Software", 
      "total_material": 0, 
      "url": "/clases/ingenieria/"
    }
  ], 
  "message": "OK: 200"
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
  sendInfoToML = async ({params}) => {
    const url = ''
    
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
      //return response || {}
    }catch(err){
      console.error(err)
    }

  }

}


module.exports = MainServices
