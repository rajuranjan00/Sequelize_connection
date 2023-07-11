const express = require('express')
const app = express()
var bodyParser = require('body-parser')
// const User = require('./models/user')
// const Contact = require('./models/contact')
require('./models');
var userCtrl = require('./controllers/userController')
app.use(bodyParser.json())     /// converted in jason format

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/add', userCtrl.addUser) 
app.get('/users', userCtrl.getUsers) 
app.get('/users/:id', userCtrl.getUser) 

// for post

app.post('/users', userCtrl.postUsers) 

// for delete
app.delete('/users/:id', userCtrl.deleteUser)

/// for update
app.patch('/users/:id', userCtrl.patchUser)

// model query
app.get('/query', userCtrl.queryUser)





// User.sync({ force: true });
// Contact.sync({ force: true });
// sequelize.sync({force : true});


app.listen(3000,()=>{
    console.log("App will run on: http://localhost:3000")
})