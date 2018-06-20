const mongoose = require('mongoose');

const express = require('express');

const Schema = mongoose.Schema;

const bodyParser = require('body-parser');





const app = express()



app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());



const connection = mongoose.connect("mongodb+srv://Michael:oWebZMROhu8VRe3X@cluster0-tinoo.mongodb.net/puntoDB");



const TeamSchema = new Schema({

    team_name: {

      type: String

    },

    teams_points: {

      type: Number,

    }

}, {collection: 'Team'});



const Team = mongoose.model('Team', TeamSchema);



const AddNewTeamMateSchema = new Schema ({

  real_name: {

    type: String

  },

  team_id: {

    type: String

  }

}, {collection: 'Channel Collection'});



const channelCollection = mongoose.model('Channel Collection', AddNewTeamMateSchema);

const GetCommentsSchema = new Schema ({
  user_name: {
    type: String
  },

  text: {
    type: String
  }
}, {collection: 'Comments'});

const Comments = mongoose.model('Comments', GetCommentsSchema);


app.get('/getData', function(req, res, next){

  Team.find({}, (err, data) => {

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.status(200).json(data)

  })

});

app.get('/getComments', function(req, res, next) {
  Comments.find({}, (err, data) => {
    
    res.setHeader("Access-Control-Allow-Origin", "*")

    res.status(200).json(data)
  })
});

app.post('/postData', function(req, res, next){

  console.log(req.body);

   const postNewTeamMate = {

     real_name: req.body.name,

     team_id: req.body.team

   };

   const data = channelCollection(postNewTeamMate)

  data.save();

  res.status(200).json(postNewTeamMate);
});



mongoose.connection.once('open', function(){

  console.log('Connection has been made');

}).on('error', function(error) {

  console.log('Connection error:', error);

});





app.listen(3000, () => console.log('hello'));
