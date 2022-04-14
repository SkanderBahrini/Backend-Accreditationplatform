const express= require('express');
const router = express.Router();

const term = require('../models/term');

 const { sequelize, Course} = require('../models')

 const courseController = require('../controllers/courseController')
 
// create  a course
router.route('/course').post( courseController.createCourse)

// get course list

router.route('/course/lists').get(courseController.getCourses)

// get course by ID

router.route('/courses/:uuid').get(courseController.getCourseID)

// get course by name
 
router.route('/courses/search/name').get(courseController.getCoursebyName)

// delete course by id

router.route('/course/delete/:uuid').get(courseController.deleteById)

// delete course by name 

router.route('/course/delete/name').get(courseController.getCoursebyName)

 module.exports = router;