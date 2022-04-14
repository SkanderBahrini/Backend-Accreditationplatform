const express= require('express');
const router = express.Router();

const groupController = require('../controllers/groupController')

 const { sequelize, Group} = require('../models')
 
// create  a group
router.route('/group').post( groupController.createGroup)

// get groups list

router.route('/group/lists').get(groupController.getGroups)

// get group by ID

router.route('/groups/:uuid').get(groupController.getGroupbyID)

// get group by name
 
router.route('/groups/search/name').get(groupController.getGroupbyName)

// delete  group by id

router.route('/group/delete/:uuid').get(groupController.deleteById)

// delete group by name 

router.route('/groups/delete/name').get(groupController.deleteByName)


 module.exports = router;