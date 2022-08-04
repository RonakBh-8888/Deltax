var Artist = require("../models/artists");

exports.artist_create = function(req, res) {
  const { name, dob, bio} = req.body;
  const actor = new Artist({
    name,
    dob,
    bio
  });
  artist.save(function(err, succ) {
    if (!err) {
      res.send("done");
    } else {
      res.send("Artist Already Exist");
    }
  });
};

exports.get_artist = function(req, res) {
  Artist.find(function(err, actorlist) {
    res.json(actorlist);
  });
};


