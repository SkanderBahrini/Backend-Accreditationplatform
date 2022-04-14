const Term = require('../models/term');

// create term
exports.createTerm =async(req,res) => {      
try {

    const term = await Term.create(req.body)

     return res.json(term)
     
} catch (error) {
     
        
         res.status(404)
} }

// get terms list

exports.getTerms = async(req,res) =>  {

     try {
          
          const terms = await Term.findAll()

          return res.json(terms)

     } catch (error) {
           console.log(error)
         res.status(404)
     }
}

// get term by id 

exports.geTermbyID = async (req, res) => {
  const uuid = req.params.uuid
  try {
    const term = await Term.findOne({id :uuid })

    return res.json(term)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

// get term by name 

exports.getTermbyName = async (req, res) => {
  const name = req.body
  try {
    const  term = await Term.findOne({ termname: name })

    return res.json(term)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

// delete term by id

exports.deleteById =  async (req, res) => {

  const id = req.params.uuid
  try {
    const term = await Term.findOne({ id: uuid } )

    await term.destroy()

    return res.json({ message: 'Term deleted!' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  } }

  // delete term by name

exports.deleteByName =  async (req, res) => {

  const name = req.body.uuid
  try {
    const term = await Term.findOne({ termname: name } )

    await term.destroy()

    return res.json({ message: 'Term deleted!' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  } }