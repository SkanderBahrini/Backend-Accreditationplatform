const express= require('express');
const router = express.Router();

const term = require('../models/term');

const termControllers = require('../controllers/termControllers')

 const { sequelize, Term} = require('../models')
 
// create term
router.route('/term').post(termControllers.createTerm)

// get term 

router.route('/term/lists').get(termControllers.getTerms)

// get term by ID
 
router.route('/terms/:uuid').get(termControllers.geTermbyID)

// get term by name
 
router.route('/terms/search/name').get(termControllers.deleteByName)

// delete term by id

router.route('/terms/delete/:uuid').get(termControllers.deleteById)

 module.exports = router;