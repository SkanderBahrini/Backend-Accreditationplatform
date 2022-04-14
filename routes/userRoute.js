const express= require('express');
const router = express.Router();
 const bcrypt = require('bcrypt');

 const userController = require('../controllers/userController')


 const { sequelize, User} = require('../models')
 
// create user
router.route('/user/signup').post(userController.signup);

// login
router.route('/user/signin').post(userController.signin);

// get user 

router.route('/user/lists').get(userController.getUsers)

// get user by ID
 
router.route('/users/:uuid').get(userController.getUserbyID)

// get user by name
 
router.route('/users/search/name').get(userController.getUserbyName)

// delete user by id

router.route('/user/delete/:uuid').get(userController.deleteById)
   
 module.exports = router;