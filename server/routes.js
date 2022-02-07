const keys = require("./keys");

// Express App Setup
const express = require("express");
const router = express.Router();
const BookService = require("./service/book.service");

const bookService = new BookService();

router.get("/", async (req, res) => {
 
  const books = await bookService.getAllReadBook();

  res.send(books);
});


router.get("values/all", async (req, res) => {
  res.send("Hi hl");
  // const values = await pgClient.query("SELECT * from values");

  // res.send(values.rows);
});


module.exports = router;