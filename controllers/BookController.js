import * as db from "../util/database.js";

export const getBooks = (req, res) => {
  const books = db.getBooks();
  res.status(200).json(books);
};

export const getBookId = (req, res) => {
  const book = db.getBookId(+req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found!" });
  res.status(200).json(book);
};

export const SaveBook = (req, res) => {
  const { title, author, publisher, publishDate, quantity, price } = req.body;
  if (!title || !author || !publisher || !publishDate || !quantity || !price)
    return res.status(400).json({ message: "Missing some data!" });
  try {
    const saved = db.SaveBook(
      title,
      author,
      publisher,
      publishDate,
      quantity,
      price
    );
    const book = db.getBookId(saved.lastInsertRowid);
    res.status(201).json(book);
  } catch {
    res.status(400).json({ message: "Missing some data!" });
  }
};

export const DeleteBook = (req, res) => {
  db.DeleteBook(+req.params.id);
  res.status(200).json({ message: "Delete successful! :)" });
};
