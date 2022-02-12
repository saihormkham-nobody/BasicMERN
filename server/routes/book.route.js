/***
 * @swagger
 * paths:
 *   /books/id/{id}:
 *     get:
 *       tags:
 *       - "books"
 *       summary: "Get the specific book."
 *       description: "Retrieve a JSONPlaceholder book. Can be used to insert a book profile when prototyping or testing an API."
 *       parameters:
 *         - in: "path"
 *           name: "id"
 *           schema:
 *             type: "string"
 *             description: "The book mongo ID, a string of 12 bytes or a string of 24 hex characters."
 *             example: "62020ce79c771bc2061f6d83"
 *           required: true
 *       responses:
 *         '200':
 *           description: "OK"
 *           content:
 *             application/json:
 *               schema:
 *                 type: "object"
 *                 properties:
 *                   data:
 *                     type: "array"
 *                     items:
 *                       $ref: "#/components/schemas/Book" 
 *                   meta:
 *                     $ref: "#/components/schemas/BookMeta" 
 *         '404':
 *           $ref: "#/components/responses/NotFound" 
 *         '500':
 *           $ref: "#/components/responses/InternalServerError"  
 *         '400':
 *           description: "Bad Request"
 *           content:
 *             application/json:
 *               schema:
 *                 oneOf:
 *                   - $ref: "#/components/schemas/InvalidArgument" 
 *     delete:
 *       tags:
 *       - "books"
 *       summary: "Delete the specific book."
 *       description: "Delete a JSONPlaceholder book. Can be used to insert a book profile when prototyping or testing an API."
 *       parameters:
 *         - in: "path"
 *           name: "id"
 *           schema:
 *             type: "string"
 *             description: "The book mongo ID, a string of 12 bytes or a string of 24 hex characters."
 *             example: "62020ce79c771bc2061f6d83"
 *           required: true
 *       responses:
 *         '204':
 *           description: "No Content"
 *         '404':
 *           $ref: "#/components/responses/NotFound" 
 *         '500':
 *           $ref: "#/components/responses/InternalServerError" 
 *   /books/reading:
 *     get:
 *       tags:
 *       - "books"
 *       summary: "Get all current reading books."
 *       description: "Retrieve a list of JSONPlaceholder books. Can be used to insert a book profile when prototyping or testing an API."
 *       responses:
 *         '200':
 *           description: "OK"
 *           content:
 *             application/json:
 *               schema:
 *                 type: "object"
 *                 properties:
 *                   data:
 *                     type: "array"
 *                     items:
 *                       $ref: "#/components/schemas/Book" 
 *                   meta:
 *                     $ref: "#/components/schemas/BookMeta" 
 *         '404':
 *           $ref: "#/components/responses/NotFound" 
 *         '500':
 *           $ref: "#/components/responses/InternalServerError"    
 *           
 *     post:
 *       tags:
 *       - "books"
 *       summary: "Add a new reading list to your list."
 *       description: " Insert a single JSONPlaceholder book. Can be used to insert a book profile when prototyping or testing an API."
 *       requestBody:
 *         description: "Book object that needs to be added to the store"
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: "object"
 *               properties:
 *                 name: 
 *                   type: "string"
 *                   description: "The book's name."
 *                   example: "Introduction to Java"
 *                 author:
 *                   type: "string"
 *                   description: "The book's author name."
 *                   example: "John"
 *               required: 
 *                 - name
 *                 - author
 *       responses:
 *         '201':
 *           description: "Created"
 *           content:
 *             application/json:
 *               schema:
 *                 type: "object"
 *                 properties:
 *                   data:
 *                     $ref: "#/components/schemas/Book" 
 *         '404':
 *           $ref: "#/components/responses/NotFound" 
 *         '400':
 *           description: "Bad Request"
 *           content:
 *             application/json:
 *               schema:
 *                 oneOf:
 *                   - $ref: "#/components/schemas/InvalidArgument" 
 *                   - $ref: "#/components/schemas/LimitExceed" 
 *         '500':
 *           $ref: "#/components/responses/InternalServerError"    
 *           
 *     patch:
 *       tags:
 *       - "books"
 *       summary: "Update the reading book as finished reading."
 *       description: " Update a single JSONPlaceholder book. Can be used to insert a book profile when prototyping or testing an API."
 *       requestBody:
 *         description: "Book object that needs to be added to the store"
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: "object"
 *               properties:
 *                 id: 
 *                   type: "string"
 *                   description: "The book mongo ID, a string of 12 bytes or a string of 24 hex characters."
 *                   example: "62020ce79c771bc2061f6d83"
 *               required: 
 *                 - id
 * 
 *       responses:
 *         '200':
 *           description: "OK"
 *           content:
 *             application/json:
 *               schema:
 *                 type: "object"
 *                 properties:
 *                   data:
 *                     $ref: "#/components/schemas/Book" 
 *         '404':
 *           $ref: "#/components/responses/NotFound" 
 *         '400':
 *           description: "Bad Request"
 *           content:
 *             application/json:
 *               schema:
 *                 oneOf:
 *                   - $ref: "#/components/schemas/InvalidArgument" 
 *                   - $ref: "#/components/schemas/BookAlreadyRead" 
 *         '500':
 *           $ref: "#/components/responses/InternalServerError"   
 *           
 *   /books/finished:
 *     get:
 *       tags:
 *       - "books"
 *       summary: "Get all finished reading books."
 *       description: "Retrieve a list of JSONPlaceholder books. Can be used to insert a book profile when prototyping or testing an API."
 *       parameters:
 *         - in: "query"
 *           name: "page"
 *           schema:
 *             type: "integer"
 *             default: 1
 *           required: false
 *       responses:
 *         '200':
 *           description: "OK"
 *           content:
 *             application/json:
 *               schema:
 *                 type: "object"
 *                 properties:
 *                   data:
 *                     type: "array"
 *                     items:
 *                       $ref: "#/components/schemas/Book" 
 *                   meta:
 *                     $ref: "#/components/schemas/BookMeta" 
 *         '404':
 *           $ref: "#/components/responses/NotFound" 
 *         '500':
 *           $ref: "#/components/responses/InternalServerError"    
 * 
 * 
 * components:
 *   responses:
 *     NotFound:
 *       description: The specified book is not found
 *       content:
 *         application/json:
 *           schema:
 *             oneOf:
 *               - $ref: "#/components/schemas/BookNotFound" 
 *     InternalServerError:
 *       description: Something went wrong
 *       content:
 *         application/json:
 *           schema:
 *             oneOf:
 *               - $ref: "#/components/schemas/InternalServerError" 
 *       
 * 
 *   schemas:
 *     BookMeta:
 *       type: "object"
 *       properties:
 *         total: 
 *           type: "integer"
 *           description: "Total number of book"
 *           example: 100
 *         page:
 *           type: "integer"
 *           description: "Current requested page number"
 *           example: 1
 *         last_page:
 *           type: "integer"
 *           description: "The last page"
 *           example: 11
 *     Book:
 *       type: "object"
 *       properties:
 *         _id:
 *           type: "string"
 *           description: "The book mongo ID, a string of 12 bytes or a string of 24 hex characters."
 *           example: "62020ce79c771bc2061f6d83"
 *         name:
 *           type: "string"
 *           description: "The name of the book"
 *           example: "Who moved my cheese?"
 *         author:
 *           type: "string"
 *           description: "The name of the author the book"
 *           example: "John"
 *         created:
 *           type: "string"
 *           description: "The created date"
 *           format: "date-time"
 *           default: "new Date();"
 *           example: "2022-02-08T06:25:46.181Z"
 *         finished:
 *           type: "string"
 *           format: "date-time"
 *           example: "2022-02-08T06:25:46.181Z"
 *       required:
 *         - _id
 *         - name
 *         - author
 *     LimitExceed:
 *       type: "object"
 *       properties:
 *         errors:
 *           type: "object"
 *           properties: 
 *             message: 
 *               type: "string"
 *               description: "The explaination of error message."
 *               example: "Please finish one of your reading list before start reading new one."  
 *           
 *     InternalServerError:
 *       type: "object"
 *       properties:
 *         errors:
 *           type: "object"
 *           properties: 
 *             message: 
 *               type: "string"
 *               description: "The explaination of error message."
 *               example: "Something went wrong"  
 *     
 *     BookAlreadyRead:
 *       type: "object"
 *       properties:
 *         errors:
 *           type: "object"
 *           properties: 
 *             message: 
 *               type: "string"
 *               description: "The explaination of error message."
 *               example: "Book is already read"  
 *           
 *     BookNotFound:
 *       type: "object"
 *       properties:
 *         errors:
 *           type: "object"
 *           properties: 
 *             message: 
 *               type: "string"
 *               description: "The explaination of error message."
 *               example: "Book Not Found"  
 *     
 *     InvalidArgument:
 *       type: "object"
 *       properties:
 *         errors:
 *           type: "object"
 *           properties: 
 *             message: 
 *               type: "string"
 *               description: "The explaination of error message."
 *               example: "Invalid arguments"
 *             details:
 *               type: "array"
 *               description: "The detial expliation of error message"
 *               items:
 *                 type: "object"
 *                 properties:
 *                   value: 
 *                     type: "string"
 *                   msg:
 *                     type: "string"
 *                     example: "Invalid value"
 *                   param:
 *                     type: "string"
 *                     example: "author"
 *                   location:
 *                     type: "string"
 *                     example: "body"
 * 
 */
import { Router } from "express";
const router = Router();
import BookService from "../src/service/book.service.js";
import { body, param, validationResult } from "express-validator";
import { mongoIdValidator } from "../src/validator/validator.js";

const bookService = new BookService();



 
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
    return res.status(result.code).json(result.body);
  }
);

router.delete(
  "/id/:id",
  [param("id").custom(mongoIdValidator)],
  async (req, res) => {
    const id = req.params.id;
    // Validate Field
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
      return invalidArgumentResponse(res, errors);
    }

    const result = await bookService.deleteBook({id});
    return res.status(result.code).json(result);
  }
);

const invalidArgumentResponse = (res, errors) => {
  return res.status(400).json({
    errors: { message: "Invalid arguments", details: errors.array() },
  });
};

export default router;
