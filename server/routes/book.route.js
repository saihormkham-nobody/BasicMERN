// Express App Setup
import { Router } from "express";
const router = Router();
import BookService from "../src/service/book.service.js";
import { body, param, validationResult } from "express-validator";
import { mongoIdValidator } from "../src/validator/validator.js";

const bookService = new BookService();

/**
 * @swagger
 * /books/id/{id}:
 *   get:
 *     summary: Retrieve a single JSONPlaceholder book.
 *     description: Retrieve a single JSONPlaceholder book. Can be used to populate a book profile when prototyping or testing an API.
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Mongo ID of the book, a string of 12 bytes or a string of 24 hex characters
 *        schema:
 *         type: string
 *     responses:
 *       200:
 *         description: A single book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The book mongo ID, a string of 12 bytes or a string of 24 hex characters.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The book's name.
 *                       example: Introduction to Java
 *                     author:
 *                       type: string
 *                       description: The book's author name.
 *                       example: John
 *                     created:
 *                       type: date
 *                       description: The book inserted date.
 *                       example: 2022-02-08T06:25:43.751Z
 *                     finished:
 *                       type: date
 *                       description: The book finished reading date.
 *                       example: 2022-02-08T06:25:43.751Z
 *                     __v:
 *                       type: integer
 *                       description: the version key that describes the internal revision of a document.
 *                       example: 0
 *
 *
 */
router.get(
  "/id/:id",
  [param("id").custom(mongoIdValidator)],
  async (req, res) => {
    const id = req.params.id;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return invalidArgumentResponse(res, errors);
    }
    const result = await bookService.getBookById(id);
    res.status(result.code).send(result.body);
  }
);

router.get("/reading", async (req, res) => {
  const result = await bookService.getAllReadingBook();
  res.status(result.code).send(result.body);
});

router.get("/finished/", async (req, res) => {
  const page = req.query.page;
  const result = await bookService.getFinishedBook(page);
  res.status(result.code).send(result.body);
});

/**
 * @swagger
 * /books/reading:
 *   post:
 *     summary: Insert a current Reading book.
 *     description: Insert a single JSONPlaceholder book. Can be used to insert a book profile when prototyping or testing an API.
 *     parameters:
 *
 *     responses:
 *       200:
 *         description: A single book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The book mongo ID.
 *                       example: 0
 *                     name:
 *                       type: string
 *                       description: The book's name.
 *                       example: Leanne Graham
 */
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
    return res.status(result.code).json(result.body);
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
  "/id/:id",
  [param("id").custom(mongoIdValidator)],
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
  return res.status(400).json({
    errors: { message: "Invalid arguments", details: errors.array() },
  });
};

export default router;
