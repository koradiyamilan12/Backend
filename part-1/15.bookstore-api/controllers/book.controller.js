const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of books fetch successfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "books not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! please try again",
    });
  }
};

const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const bookDetailsById = await Book.findById(getCurrentBookId);

    if (!bookDetailsById) {
      return res.status(404).json({
        success: false,
        message:
          "Book with the current ID is not found! Please try with a different ID",
      });
    } else {
      res.status(200).json({
        success: true,
        data: bookDetailsById,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! please try again",
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);

    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! please try again",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body;
    const getCurrentBookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookId,
      updatedBookFormData,
      { new: true },
    );

    if (!updateBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: updatedBook,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! please try again",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookId);

    if (!deleteBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    } else {
      res.status(200).json({
        success: true,
        data: deletedBook,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! please try again",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
