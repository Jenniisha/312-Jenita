
import  mongoose  from "mongoose";

const playerSchema = new mongoose.Schema({
  
    name: {
      type: String,
      required: true,
    },
  
    age: {
      type: Number,
      required: true,
    },
  
    awards: {
        type: Array,
        required: true,
    },
});

mongoose.model("Players", playerSchema);