//term route
const termRoute = require('./routes/termRoute')
// course route
const courseRoute = require('./routes/courseRoute')
// user route
const useRoute = require('./routes/userRoute')
// group route
const groupRoute = require('./routes/groupRoute')


const express = require('express');
 app = express();

 const { sequelize} = require('./models');
 
 // middlewares7
app.use(express.json())


app.use(courseRoute)
app.use(groupRoute)
app.use(termRoute)
app.use(useRoute)

 app.get('/', (req,res)=> res.send('hello world'));

 app.use(express.json()); 


 


 app.listen(3000 ,() => {

    console.log("connected") })