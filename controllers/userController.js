const { sequelize, User} = require('../models')

//create user

/*  exports.creatUser = (async(req,res) => {      
try {

     req.body.password = await bcrypt.hash(req.body.password, 12);
    const user = await User.create(req.body)

     return res.json(user)
     
} catch (error) {
     
         console.log(error)
         res.status(404)
} }) */


// register
exports.signup = (req, res, next) => {
  let { firstname, lastname, email, phone, password, password_confirmation,role } = req.body;
  let errors = [];
  if (!firstname) {
    errors.push({ firstname: "required" });
  }
  if (!lasttname) {
    errors.push({ lastname: "required" });
  }
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (!password_confirmation) {
    errors.push({
     password_confirmation: "required",
    });
  }
  if (password != password_confirmation) {
    errors.push({ password: "mismatch" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  User.findOne({email: email})
   .then(user=>{
      if(user){
         return res.status(422).json({ errors: [{ user: "email already exists" }] });
      }else {
         const user = new User({
           firstname: firstname,
           lastname: lastname,
           email: email,
           phone: phone,
           password: password,
           role: role,
         });
         bcrypt.genSalt(10, function(err, salt) { bcrypt.hash(password, salt, function(err, hash) {
         if (err) throw err;
         user.password = hash;
         user.save()
             .then(response => {
                res.status(200).json({
                  success: true,
                  result: response
                })
             })
             .catch(err => {
               res.status(500).json({
                  errors: [{ error: err }]
               });
            });
         });
      });
     }
  }).catch(err =>{
      res.status(500).json({
        errors: [{ error: 'Something went wrong' }]
      });
  })
}
// login

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

exports.signin = (req, res) => {
  let { email, password } = req.body;
  let errors = [];
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid email" });
  }
  if (!password) {
    errors.push({ passowrd: "required" });
  }
  if (errors.length > 0) {
   return res.status(422).json({ errors: errors });
  }
  User.findOne({ email: email }).then(user => {
     if (!user) {
       return res.status(404).json({
         errors: [{ user: "not found" }],
       });
     } else {
        bcrypt.compare(password, user.password).then(isMatch => {
           if (!isMatch) {
            return res.status(400).json({ errors: [{ password:
"incorrect" }] 
});
}
})
}
})
}

// get user

exports.getUsers = async(req,res) =>  {

     try {
          
          const users = await User.findAll()

          return res.json(users)

     } catch (error) {
           console.log(error)
         res.status(404)
     }
}

// get user by id 

exports.getUserbyID = async (req, res) => {
  const uuid = req.params.uuid
  try {
    const user = await User.findOne({id :uuid })

    return res.json(user)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

// get user by name 

exports.getUserbyName = async (req, res) => {
  const name = req.body
  try {
    const user = await User.findOne({ firstname: name })

    return res.json(user)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

// delete user by id

exports.deleteById =  async (req, res) => {

  const id = req.params.uuid
  try {
    const user = await User.findOne({ id: uuid } )

    await user.destroy()

    return res.json({ message: 'User deleted!' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  } }

  // delete user by name

exports.deleteByName =  async (req, res) => {

  const name = req.body.uuid
  try {
    const user = await User.findOne({ firstname: name } )

    await user.destroy()

    return res.json({ message: 'User deleted!' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  } }