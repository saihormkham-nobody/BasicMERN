// Express App Setup
const express = require("express");
const router = express.Router();
const BookService = require("./service/book.service");
const { body, param, validationResult } = require("express-validator");
const { mongoIdValidator } = require("./validator/validator");

const bookService = new BookService();



router.get("/reading", async (req, res) => {
  const result = await bookService.getAllReadingBook();
  res.status(getStatus(result.success)).send(result);
});

router.get("/finished/:page*?", async (req, res) => {
  const page = req.params.page;
  const result = await bookService.getAllFinishedBook(page);
  res.status(getStatus(result.success)).send(result);
});

router.post(
  "/reading",
  [body("name").not().isEmpty(), body("author").not().isEmpty()],
  async (req, res) => {
    console.log(req.body);
    // Validate Field
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
      return res
        .status(400)
        .json({
          success: false,
          message: "Invalid request body",
          errors: errors.array(),
        });
    }
    try {
      const result = await bookService.insertReadingBook(req.body);
      return res.status(getStatus(result.success)).json(result);
    } catch (err) {
      console.log(err);
    }
    return res
      .status(400)
      .json({ success: false, message: "Something went wrong" });
  }
);

router.put(
  "/reading",
  [body("id").not().isEmpty(), body("id").custom(mongoIdValidator) ],
  async (req, res) => {
    console.log(req.body);
    // Validate Field
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
      return res
        .status(400)
        .json({
          success: false,
          message: "Invalid request body",
          errors: errors.array(),
        });
    }
    try {
      const result = await bookService.updateBookAsRead(req.body);
      return res.status(getStatus(result.success)).json(result);
    } catch (err) {
      console.log(err);
    }
    return res
      .status(400)
      .json({ success: false, message: "Something went wrong" });
  }
);


getStatus = (success) => {
  return success ? 201 : 400;
};

module.exports = router;
