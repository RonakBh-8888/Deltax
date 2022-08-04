const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  
  aname: {
    type: String,
    unique: true
  },
  
  dob: String,
  bio: String,
  
});

 const Artist = mongoose.model("Artist", artistSchema);
 module.exports = Artist;