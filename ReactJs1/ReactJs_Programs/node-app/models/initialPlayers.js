const playerSchema = new mongoose.Schema({
  
    name: {
      type: String,
      required: true,
    },
  
    age: {
      type: String,
      required: true,
    },
  
    awards: {
        type: String,
        required: true,
    },
});