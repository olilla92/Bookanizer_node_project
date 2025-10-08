import Database from "better-sqlite3";

const db = new Database("./data/database.sqlite");
db.prepare(
  `CREATE TABLE IF NOT EXISTS books 
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    title STRING,
    author STRING,
    publisher STRING,
    publishDate INTEGER,
    quantity INTEGER,
    price INTEGER )`
).run();

export const getBooks = () => db.prepare("SELECT * FROM books").all();

export const getBookId = (id) =>
  db.prepare("SELECT * FROM books WHERE id = ?").get(id);

export const SaveBook = (
  title,
  author,
  publisher,
  publishDate,
  quantity,
  price
) =>
  db
    .prepare(
      "INSERT INTO books (title, author, publisher, publishDate, quantity, price) VALUES (?, ?, ?, ?, ?, ?)"
    )
    .run(title, author, publisher, publishDate, quantity, price);

export const DeleteBook = (id) =>
  db.prepare("DELETE FROM books WHERE id = ?").run(id);

const books = getBooks();
if (!books.length) {
  SaveBook("1984", "George Orwell", "Secker & Warburg", 1949, 20, 5299);
}
