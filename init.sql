DROP TABLE IF EXISTS images;

CREATE TABLE images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  url TEXT NOT NULL,
  title TEXT
);

INSERT INTO images (url, title) VALUES
('/src/bg.jpg', 'Animal'),
('/src/bhojpur.jpg', 'Ancient Temple'),
('/src/khajurao.jpg', 'ancient temple'),
('/src/me.png', 'I');