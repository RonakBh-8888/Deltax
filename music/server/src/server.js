const express = require("express");
const app = express();
const cors = require("cors");
require("./db/connect");
const Song = require("./models/songs");
const Artist = require("./models/artists");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
const path = require("path");
const fs = require('fs');
const multer = require('multer');
const bodyParser = require('body-parser');
const hbs = require("hbs");
const { json } = require("express");

const staticPath = path.join(__dirname , "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.get('/', (req, res) =>{
    res.render("home");
})
app.get('/addsong', (req, res)=>{
  res.render("addsong");

});

app.get('/addartist', (req, res) =>{
  res.render("addartist");
})


//
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({ storage: storage });

//Adding the New Song
app.post('/addsong', upload.single('image'),  async (req, res)=>{
  try{
    const song = new Song({
      sname: req.body.sname,
      rdate: req.body.DOR,
      img:{
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        contentType: 'image/png'
      },
      artist:req.body.artist
    });

    const addedsong = await song.save();
    res.status(201).render("home");

  }catch(error){
    res.status(400).send(error);
  }
});

//Adding the new Artist
app.post('/addartist', async (req, res)=>{
  try {
    const artist = new Artist({
      aname:req.body.aname,
      dob:req.body.dob,
      bio:req.body.bio
    });
    const addedartist = artist.save();
    res.status(201).render("home");
  }catch(error){
    res.status(400).send(error);
  }
})
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});