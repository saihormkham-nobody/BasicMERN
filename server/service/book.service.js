const Book = require("../model/book");

class BookService {
  constructor() {}

  getAllReadBook = async () => {
    try{
        const books = await Book.find();
        console.log(books);
        return books;
    }catch(err){
        console.log("Can't Find book ",err);
        
    }
    return books;
  };
}

module.exports = BookService;
