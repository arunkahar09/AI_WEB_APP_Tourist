const express = require("express")
const app = express();
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const db = new sqlite3.Database("data.db");

const initSQL = fs.readFileSync(path.join(__dirname, 'init.sql'), 'utf8');
db.exec(initSQL);

app.use(express.static(path.join(__dirname)));
app.use('/src', express.static(path.join(__dirname, 'src')));

app.use(express.static(path.join(__dirname, "style")));
app.use(express.static(path.join(__dirname, "js")));

// app.use(express.static(path.join(__dirname, "public")));



const port = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/Explore", (req, res) => {
  res.render("Explore");
})


app.get("/data", (req, res) => {
  db.all("SELECT * FROM images", (err, rows) => {
    res.render("page", { rows });
  });
});

app.get("/", (req, res) => {
  db.all("SELECT * FROM images", (err, images) => {
    if (err) return res.send("Database Error");

    res.render("home", { images });
  });
});



app.get('/experiences', (req, res) => res.render('experiences'));
app.get('/plan', (req, res) => res.render('plan'));
app.get('/blogs', (req, res) => res.render('blogs'));
app.get('/search', (req, res) => res.render('search'));
app.get('/media', (req, res) => res.render('media'));
app.get('/book', (req, res) => res.render('book'));


// ek chhoti si avtivity 
// app.get("/ig/:username",(req,res) =>{
//     let {username} = req.params;
//     res.render("insta.ejs", {username})

// })

app.listen(port, () => {
  console.log(`express port ${port}`);
  console.log(` http://localhost:${port} `);
});


// app.get("/", (req, res) => {
//   const images = [
//     { url: "https://picsum.photos/300?random=1", title: "Image 1" },
//     { url: "https://picsum.photos/300?random=2", title: "Image 2" },
//     { url: "https://picsum.photos/300?random=3", title: "Image 3" }
//   ];

//   res.render("home", { images });

//   db.all("SELECT * FROM images", (err, images) => {
//     res.render("home", { images });
//   });
// });