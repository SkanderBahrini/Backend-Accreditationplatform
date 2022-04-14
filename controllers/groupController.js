 const { sequelize, Group} = require('../models')

//create group
exports.createGroup= async(req,res) => {      
 const {groupname} = req.body

try {
    const group = await Group.create({groupname})

     return res.json(group)
     
} catch (error) {
     
         console.log(error)
         res.status(404)
} }

// display groups

exports.getGroups =async(req,res) => {

    try {

        const groups = await Group.findAll()

        res.send(groups)
        
    } catch (error) {
         res.send(error)
    }
}

// search group by id 

exports.getGroupbyID = async (req, res) => {

  const uuid = req.params.uuid
  try {
    const user = await Group.findOne({id :uuid })

    return res.json(user)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

// search term by name 

exports.getGroupbyName = async (req, res) => {
  const name = req.body
  try {
    const group = await Group.findOne({ groupname: name })

    return res.json(group)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

// delete user by id

exports.deleteById =  async (req, res) => {

  const id = req.params.uuid
  try {
    const group = await Group.findOne({ id: uuid } )

    await group.destroy()

    return res.json({ message: 'Group deleted!' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  } }

// delete group by name

exports.deleteByName =  async (req, res) => {

  const name = req.body.uuid
  try {
    const group = await Group.findOne({ groupname: name } )

    await group.destroy()

    return res.json({ message: 'Group deleted!' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  } }