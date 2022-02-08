// Express App Setup
import { Router } from "express";
const router = Router();
import BookService from "./service/book.service.js";
import { body, param, validationResult } from "express-validator";
import { mongoIdValidator } from "./validator/validator.js";
import { invalidRequestError } from "./errors/errors.js";

const bookService = new BookService();

router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  const result = await bookService.getBookById(id);
  res.status(result.code).send(result.body);
});

router.get("/reading", async (req, res) => {
  const result = await bookService.getAllReadingBook();
  res.status(result.code).send(result.body);
});

router.get("/finished/:page*?", async (req, res) => {
  const page = req.params.page;
  const result = await bookService.getAllFinishedBook(page);
  res.status(result.code).send(result.body);
});

router.post(
  "/reading",
  [body("name").not().isEmpty(), body("author").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
      return invalidArgumentResponse(res, errors);
    }
    const result = await bookService.insertReadingBook(req.body);
    return res.status(result.code).json(result);
  }
);

router.patch(
  "/reading",
  [body("id").not().isEmpty(), body("id").custom(mongoIdValidator)],
  async (req, res) => {
    console.log(req.body);
    // Validate Field
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
      return invalidArgumentResponse(res, errors);
    }

    const result = await bookService.updateBookAsRead(req.body);
    return res.status(result.code).json(result);
  }
);

router.delete(
  "/",
  [body("id").not().isEmpty(), body("id").custom(mongoIdValidator)],
  async (req, res) => {
    console.log(req.body);
    // Validate Field
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
      return invalidArgumentResponse(res, errors);
    }

    const result = await bookService.deleteBook(req.body);
    return res.status(result.code).json(result);
  }
);

const invalidArgumentResponse = (res, errors) => {
  return res
    .status(400)
    .json({
      errors: { message: "Invalid arguments", details: errors.array() },
    });
};

export default router;
