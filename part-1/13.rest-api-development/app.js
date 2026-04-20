const express = require("express");
const app = express();

const port = 3000;

// Middleware
app.use(express.json());

let books = [
  {
    id: 1,
    title: "Product 1",
  },
  {
    id: 2,
    title: "Product 2",
  },
  {
    id: 3,
    title: "Product 3",
  },
];

// intro route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our bookstore api",
  });
});

// get all books
app.get("/get", (req, res) => {
  res.json(books);
});

// get single book
app.get("/get/:id", (req, res) => {
  const book = books.find((item) => item.id === Number(req.params.id));

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "Book not found! Please try with a different Book ID",
    });
  }
});

// add a new book
app.post("/add", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    title: `Book ${Math.floor(Math.random() * 1000)}`,
  };

  books.push(newBook);
  res.status(201).json({
    data: newBook,
    message: "New book is added successfully",
  });
});

// update a book
app.put("/update/:id", (req, res) => {
  const findCurrentBook = books.find(
    (bookItem) => bookItem.id === Number(req.params.id),
  );

  if (findCurrentBook) {
    findCurrentBook.title = req.body?.title || findCurrentBook.title;

    res.status(200).json({
      message: `Book with ID ${req.params.id} updated successfully`,
      data: findCurrentBook,
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

// delete book
app.delete("/delete/:id", (req, res) => {
  const findIndexOfCurrentBook = books.findIndex(
    (item) => item.id === Number(req.params.id),
  );

  if (findIndexOfCurrentBook !== -1) {
    const deletedBook = books.splice(findIndexOfCurrentBook, 1);
    res.status(200).json({
      message: "Book deleted successfully",
      data: deletedBook[0],
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

app.listen(port, (req, res) => {
  console.log(`Server is running at http://localhost:${port}`);
});
