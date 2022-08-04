var Artist = require("../models/artists");
var Song = require("../models/songs");
var Cost = require("../models/cost");

exports.song_create = (req, res) => {
  const { sname, dor, artwork, artist } = req.body;
  const song = new Song({
    sname: sname,
    dor,
    artwork,
    artist
  });
  song.save();
};

exports.getArtst = (req, res) =>{
       
}

exports.get_movie = function(req, res) {
  async function getmovie() {
    let songlist = await song.find();
    const str = "";
    for (let i = 0; i < songlist.length; i++) {
      const query = { movieid: movielist[i]._id };
      let costlist = await Cost.find(query);
      for (var j = 0; j < costlist.length; j++) {
        let actorlist = await Actor.find({
          _id: costlist[j].actorid
        });
        str = str + actorlist[0].name + ", ";
      }
      movielist[i].moviename = movielist[i].moviename + "@" + str.slice(0, -2);
      str = "";
    }
    res.send(movielist);
  }
  getmovie();
};

exports.movie_update = function(req, res) {
  async function update() {
    const { name, year, plot, poster, cost, _id } = req.body;
    let update = await Movie.findByIdAndUpdate(
      { _id },
      { $set: { moviename: name, plot: plot, year: year, poster: poster } }
    );
    let costdelete = await Cost.deleteMany({ movieid: _id });
    for (var i = 0; i < cost.length; i++) {
      var movieCost = new Cost({
        actorid: cost[i]._id,
        movieid: _id
      });
      await movieCost.save();
    }
    res.send("done");
  }
  update();
};
