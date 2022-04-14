
const { sequelize, Course} = require('../models')

//create user
exports.createCourse= async(req,res) => {      


try {
    const course = await Course.create(req.body)

     return res.json(course)
     
} catch (error) {
     
         console.log(error)
         res.status(404)
} }

// display courses

exports.getCourses =async(req,res) => {

    try {

        const courses = await course.findAll()

        res.send(courses)
        
    } catch (error) {
         res.send(error)
    }
}

// search course by id 

exports.getCourseID = async (req, res) => {

  const uuid = req.params.uuid
  try {
    const course = await Course.findOne({id :uuid })

    return res.json(course)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

// search course by name 

exports.getCoursebyName = async (req, res) => {
  const name = req.body
  try {
    const course = await Course.findOne({ courseName: name })

    return res.json(course)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

// delete course by id

exports.deleteById =  async (req, res) => {

  const id = req.params.uuid
  try {
    const course = await Course.findOne({ id: uuid } )

    await course.destroy()

    return res.json({ message: 'Group deleted!' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  } }

// delete course by name

exports.deleteByName =  async (req, res) => {

  const name = req.body.uuid
  try {
    const course = await Group.findOne({ courseName: name } )

    await course.destroy()

    return res.json({ message: 'Group deleted!' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  } }