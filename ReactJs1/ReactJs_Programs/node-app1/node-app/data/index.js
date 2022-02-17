import mongoose from "mongoose";
import "../node-app/models/initialPlayers.js";

const connectionStr = `mongodb://localhost:27017/initialPlayers`;

mongoose
  .connect(connectionStr)
  .then(() => {
    console.log(`connected to the mongodb database`);
    //console.log(connectionStr.initialPlayers);
  })
  .catch((err) => {
    console.log(err.message);
  });

// const collections = mongoose.model("Players", playerSchema);
// players is the collection
const Players = mongoose.model("Players");
Players.find({}, function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("First function call : ", docs);
  }
});

collections.find();
Players.create({
  name: "kohli",
  age: 32,
  awards: ["arjuna", "padmaShree"],
})
  .then((ans) => {
    console.log("Document inserted");
  })
  .catch((err) => {
    console.log(err.Message);
  });

Players.find({}, function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("second function call : ", docs);
  }
});
