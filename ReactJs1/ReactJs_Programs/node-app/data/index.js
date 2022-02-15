import mongoose from "mongoose";
import "../models/initialPlayers.js";

const connectionStr = `mongodb://localhost:27017/initialPlayers`;
mongoose
// mongoose.connect(connectionStr);
// var conn = mongoose.connection;
// conn.on('error', console.error.bind(console, 'connection error:'));
// conn.once('open', function () {

// conn.db.collection(" collection ", function(err, collection){

//     collection.find({}).toArray(function(err, data){
//         console.log(data); // data printed in console
//     })
// });

// .connect(connectionStr, function(err, db) {
//   if (err) throw err;
//   var dbo = db("initialPlayers");
//   dbo.collection("players").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });

  .connect(connectionStr)
  .then(() => {
    console.log(`connected to the mongodb database`);
    console.log(connectionStr.initialPlayers);
  })
  .catch((err) => {
    console.log(err.message);
  });