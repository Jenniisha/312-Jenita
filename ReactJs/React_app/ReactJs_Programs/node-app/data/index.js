import mongoose from "mongoose";
import "../models/initialPlayers.js";


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

  // Find all documents 
Players.find({name:"Jenita"}, function (err, docs) {
  if (err){
      console.log(err);
  }
  else{
      console.log("First function call : ", docs);
  }
});

// Inserting one document
Players.create({
  name: "Jenni",
  age: 25,
  awards:["State Award","National Award"]
}).then((ans) => {
  console.log("Document inserted")
}).catch((err) => {
  console.log(err.Message);
});

//Seeing collections
Players.find({}, function (err, docs) {
  if (err){
      console.log(err);
  }
  else{
      console.log("Second function call : ", docs);
  }
});
  