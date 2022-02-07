// Express App Setup
const express = require("express");
const router = express.Router();
const BookService = require("./service/book.service");
const { body, param, validationResult } = require("express-validator");

const bookService = new BookService();

router.get("/reading", async (req, res) => {
  const books = await bookService.getAllReadingBook();
  res.send(books);
});

router.get("/finished/:page*?", async (req, res) => {
  const page = req.params.page;
  const books = await bookService.getAllFinishedBook(page);
  res.send(books);
});

router.post(
  "/reading",
  [body("name").not().isEmpty(), body("author").not().isEmpty()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array });
    }
    return res.status(201).json({ success: true });
  }
);

module.exports = router;
