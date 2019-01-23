const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('@pusher/chatkit-server');
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const chatkit = new Chatkit.default({
   instanceLocator:'v1:us1:4cb732f3-bdac-4155-aa75-2e8c097ad8f5',
   key:'e086aff0-a28b-4c6f-944b-83cfac603a02:G8QhWPXkwjFdjMB8KGYLk6yWpDUSOqBlQlw1R/jxIPQ='

});

 app.post('/users',(req,res) =>{
   // deconstructing
   const {username} = req.body
   chatkit
     .createUser({
       id:username,
       name:username
     })
     .then(() => res.sendStatus(201))
     .catch(error => {
        if(error.error_type === 'services/chatkit/user_already_exists'){
           res.sendStatus(200)
        }
        else{
          res.status(error.status).json(error)
        }
     })
 });

 app.post('/authenticate',(req,res) =>{
     const authData = chatkit.authenticate({userId: req.query.user_id})
     res.status(authData.status).send(authData.body);
 })


const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})
