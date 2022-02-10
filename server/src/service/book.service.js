import Book from "../model/book.js";
import {
  someWentWrongError,
  elementNotFoundError,
  limitExceedError,
  invalidRequestError,
} from "../errors/errors.js";

const bookPerPage = 12;
const maxReadingBookAmount = 6;

class BookService {
  constructor() {}

  getAllReadingBook = async () => {
    try {
      const books = await Book.find({ finished: { $exists: false } }).limit(
        maxReadingBookAmount
      );
      return {
        code: 200,
        body: {
          data: books,
          meta: { total: books.length, page: 1, last_page: 1 },
        },
      };
    } catch (err) {
      console.log("Can't Find book ", err);
    }
    return someWentWrongError();
  };

  getFinishedBook = async (reqPage) => {
    try {
      const totalBook = await Book.countDocuments({
        finished: { $exists: true },
      });
      // set default page as 1
      const page = parseInt(reqPage) || 1;
      // calculate last page
      let lastPage = Math.ceil(totalBook / bookPerPage);
      if (lastPage < 1 && totalBook > 0) {
        lastPage = 1;
      }
      // calculate start value
      const startFrom = (page - 1) * bookPerPage;
      const books = await Book.find({ finished: { $exists: true } })
        .sort("-finished")
        .sort("-_id")
        .skip(startFrom)
        .limit(bookPerPage);
      return {
        code: 200,
        body: {
          data: books,
          meta: { total: totalBook, page: page, last_page: lastPage },
        },
      };
    } catch (err) {
      console.log(err);
    }
    return someWentWrongError();
  };

  deleteBook = async ({id}) => {
    try {
      // Find the book
      const book = await Book.findById(id);
      if (book == null) {
        return elementNotFoundError("Book");
      }
      await book.remove();
      return {
        code: 204,
        body: {},
      };
    } catch (err) {
      console.log(err);
    }
    return someWentWrongError();
  };

  getBookById = async (id) => {
    try {
      const book = await Book.findById(id);
      if (book == null) {
        return elementNotFoundError("Book");
      } else {
        return { code: 200, body: { data: book } };
      }
    } catch (err) {
      console.log(err);
    }
    return someWentWrongError();
  };

  updateBookAsRead = async ({ id }) => {
    try {
      const book = await Book.findById(id);
      if (book == null) {
        return elementNotFoundError("Book");
      }
      console.log("finished" in book, book, typeof book.finished);
      if ("finished" in book && book.finished) {
        return invalidRequestError("This book is already read");
      }
      book.finished = new Date();
      book.save();
      return { code: 200, body: { data: book } };
    } catch (err) {
      console.log(err);
    }
    return someWentWrongError();
  };

  insertReadingBook = async ({ name, author }) => {
    try {
      // Check Reading Books Count
      const readingBookCount = await Book.countDocuments({
        finished: { $exists: false },
      });
      // If User has been reading 6 books, deny the request.
      if (readingBookCount >= maxReadingBookAmount) {
        return limitExceedError(
          "Please finish one of your reading list before start reading new one."
        );
      }

      const book = new Book({ name, author });

      book.save();
      console.log("Book inserted: ", book);
      return { code: 201, body: { data: book } };
    } catch (err) {
      console.log(err);
    }

    return someWentWrongError;
  };
}

export default BookService;
