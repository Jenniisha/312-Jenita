import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import "../node-app/models/initialPlayers.js";
import supertest from "supertest";
const app = express();



//const connectionStr = `mongodb://localhost:27017/initialPlayers`;
const connectionStr = `mongodb+srv://atrain:3j6fttxX3@cluster0.ixxay.mongodb.net/test`;
mongoose.connect(connectionStr)
  .then(() => {
    console.log(`Connected to the mongodb Database`);
    // console.log(connectionStr.initialPlayers);
  })
  .catch((err) => {
    console.log(err.message);
  });

  //get hold of collections
  //const collections=mongoose.model("Players",playerSchema);
  //Players is the collection.
  const Players=mongoose.model("Players");

//var app = express();

app.use(express.static('public'));

import bodyParser from 'body-parser';
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//GET
app.get('/players', (req, res) => {
Players.find({}, function (err, docs) {
    res.json(docs);
});
});

app.get('/players/name/:name', (req, res) => {
    const pName=req.params.name;
    Players.find({name:pName}, function (err, docs) {
        res.json(docs);
    });
    });

    app.get('/players/age/:age', (req, res) => {
        const pAge=req.params.age;
        Players.find({age:{$lt:pAge}}, function (err, docs) {
            res.json(docs);
        });
        });

    

 //POST
 app.post('/players/add',(req,res) => {
    // const pName = req.body.name;
    // const pAge = req.body.age;
    // const pAwards = req.body.awards;
    Players.create(req.body).then((ans) => {
        console.log("New Player Inserted")
        res.status(200).send({msg:"Player added successfully"});
      }).catch((err) => {
        console.log(err.Message);
      });
      

});


//DELETE
    app.post('/players/delete',(req,res) => {
        // const pName = req.body.name;
        // const pAge = req.body.age;
        // const pAwards = req.body.awards;
        Players.deleteOne({name:req.body.name}).then((ans) => {
            console.log("one player deleted")
            res.status(200).send({msg:"Player removed successfully"});
          }).catch((err) => {
            console.log(err.Message);
          });
          
    
    });
    

      export default app;