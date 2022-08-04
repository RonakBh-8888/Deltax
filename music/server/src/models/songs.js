const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  
  sname: {
    type: String,
    unique: true
  },
  dor: String,
  artwork: {
    data: Buffer,
    contentType: String
  },
  artist: String,
  
});

const Song = mongoose.model("Song", songSchema);
module.exports = Song;