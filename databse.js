const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");


db.run(`
  CREATE TABLE IF NOT EXISTS images (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT,
    title TEXT
  );
`);


db.run("INSERT INTO images (url, title) VALUES (?, ?)", [
  "/img/tiger.jpg",
  "Wildlife"
]);
