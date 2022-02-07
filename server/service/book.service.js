const Book = require("../model/book");
const bookPerPage = 12;
const maxReadingBookAmount = 6;
class BookService {
  constructor() {}

  getAllReadingBook = async () => {
    try {
      const books = await Book.find({ finished: { $exist: true } }).size(
        maxReadingBookAmount
      );
      return {
        success: true,
        data: books,
      };
    } catch (err) {
      console.log("Can't Find book ", err);
      return {
        success: false,
        data: "Can't Find books",
      };
    }
  };

  getAllFinishedBook = async (reqPage) => {
    const totalBook = await Book.countDocuments();
    // set default page as 1
    const page = parseInt(reqPage) || 1;
    // calculate last page
    let lastPage = Math.ceil(totalBook / bookPerPage);
    if (lastPage < 1 && total > 0) {
      lastPage = 1;
    }
    // calculate start value
    const startFrom = (page - 1) * bookPerPage;
    try {
      const books = await Book.find({ finished: { "$exists": true } })
        .sort("-created")
        .skip(startFrom)
        .limit(bookPerPage);
      return {
        success: true,
        data: books,
        total: totalBook,
        page: page,
        last_page: lastPage,
      };
    } catch (err) {
      console.log(err);
      return { success: false, message: "something went wrong" };
    }
  };

  deleteBook = async (id) => {
    try {
      // Find the book
      const book = await Book.findById(id);
      if (book == null) {
        return { success: false, message: "Cannot find book" };
      }

      try {
        await book.remove();
        return {
          success: true,
          message: "Deleted Book",
        };
      } catch (err) {
        return { success: false, message: err.message };
      }
    } catch (err) {
      console.log(err);
      return {
        success: false,
        data: "Something went wrong!",
      };
    }
  };

  getBookById = async (id) => {
    try {
      const book = await Book.findById(id);
      if (book == null) {
        return { success: false, message: "Cannot find book" };
      } else {
        return { success: true, data: book };
      }
    } catch (err) {
      return {
        success: false,
        data: "Something went wrong!",
      };
    }
  };

  updateBook = async (id) => {
    // TODO implement
  };

  initBookData = async (id) => {
    const total = await Book.countDocuments();
    console.log("number of document ",total);
    if(total==0){
      const books = [
        { name: "A Tale of Two Cities", author: "Charles Dickens" },
        { name: "The Hobbit", author: "J. R. R. Tolkien" },
        {
          name: "Harry Potter and the Philosopher's Stone",
          author: "J. K. Rowling",
        },
        { name: "The Little Prince", author: "Antoine de Saint-Exupry" },
        { name: "Dream of the Red Chamber", author: "Cao Xueqin" },
        { name: "And Then There Were None", author: "Agatha Christie" },
        { name: "The Lion", author: " the Witch and the Wardrobe" },
        { name: "C. S. Lewis", author: "She: A History of Adventure" },
        {
          name: "H. Rider Haggard",
          author: "The Adventures of Pinocchio(Le avventure di Pinocchio)",
        },
        { name: "Carlo Collodi", author: "The Da Vinci Code" },
        {
          name: "Dan Brown",
          author: "Harry Potter and the Chamber of Secrets",
        },
        {
          name: "J. K. Rowling",
          author: "Harry Potter and the Prisoner of Azkaban",
        },
        {
          name: "J. K. Rowling",
          author: "Harry Potter and the Goblet of Fire",
        },
        {
          name: "J. K. Rowling",
          author: "Harry Potter and the Order of the Phoenix",
        },
        {
          name: "J. K. Rowling",
          author: "Harry Potter and the Half-Blood Prince",
        },
        {
          name: "J. K. Rowling",
          author: "Harry Potter and the Deathly Hallows",
        },
        { name: "J. K. Rowling", author: "The Alchemist(O Alquimista)" },
        { name: "Paulo Coelho", author: "The Catcher in the Rye" },
        { name: "J. D. Salinger", author: "The Bridges of Madison County" },
        {
          name: "Robert James Waller",
          author: "Ben-Hur: A Tale of the Christ",
        },
        { name: "Lew Wallace", author: "You Can Heal Your Life" },
        {
          name: "Louise Hay",
          author: "One Hundred Years of Solitude(Cien aos de soledad)",
        },
        { name: "Gabriel Garca Mrquez", author: "Lolita" },
        { name: "Vladimir Nabokov", author: "Heidi" },
        {
          name: "Johanna Spyri",
          author: "The Common Sense Book of Baby and Child Care",
        },
        { name: "Benjamin Spock", author: "Anne of Green Gables" },
        { name: "Lucy Maud Montgomery", author: "Black Beauty" },
        {
          name: "Anna Sewell",
          author: "The Name of the Rose(Il Nome della Rosa)",
        },
        { name: "Umberto Eco", author: "The Eagle Has Landed" },
        { name: "Jack Higgins", author: "Watership Down" },
        { name: "Richard Adams", author: "The Hite Report" },
        { name: "Shere Hite", author: "Charlotte's Web" },
        {
          name: "E. B. White; illustrated byGarth Williams",
          author: "The Ginger Man",
        },
        { name: "J. P. Donleavy", author: "The Tale of Peter Rabbit" },
        { name: "Beatrix Potter", author: "Jonathan Livingston Seagull" },
        { name: "Richard Bach", author: "The Very Hungry Caterpillar" },
        { name: "Eric Carle", author: "A Message to Garcia" },
        { name: "Elbert Hubbard", author: "To Kill a Mockingbird" },
        { name: "Harper Lee", author: "Flowers in the Attic" },
        { name: "V. C. Andrews", author: "Cosmos" },
        { name: "Carl Sagan", author: "Sophie's World(Sofies verden)" },
        { name: "Jostein Gaarder", author: "Angels & Demons" },
        { name: "Dan Brown", author: "Kane and Abel" },
        {
          name: "Jeffrey Archer",
          author: "How the Steel Was Tempered(??? ?????????? ?????)",
        },
        { name: "Nikolai Ostrovsky", author: "War and Peace(????? ? ???)" },
        {
          name: "Leo Tolstoy",
          author: "The Diary of Anne Frank(Het Achterhuis)",
        },
        { name: "Anne Frank", author: "Your Erroneous Zones" },
        { name: "Wayne Dyer", author: "The Thorn Birds" },
        { name: "Colleen McCullough", author: "The Purpose Driven Life" },
        { name: "Rick Warren", author: "The Kite Runner" },
        { name: "Khaled Hosseini", author: "Valley of the Dolls" },
        {
          name: "Jacqueline Susann",
          author: "Alcoholics Anonymous Big Book",
        },
        {
          name: "Bill Wilson",
          author: "How to Win Friends and Influence People",
        },
        { name: "Dale Carnegie", author: "The Great Gatsby" },
        { name: "F. Scott Fitzgerald", author: "Gone with the Wind" },
        { name: "Margaret Mitchell", author: "Rebecca" },
        { name: "Daphne du Maurier", author: "Nineteen Eighty-Four" },
        { name: "George Orwell", author: "The Revolt of Mamie Stover" },
        {
          name: "William Bradford Huie",
          author: "The Girl with the Dragon Tattoo(Mn som hatar kvinnor)",
        },
        { name: "Stieg Larsson", author: "The Lost Symbol" },
        { name: "Dan Brown", author: "The Hunger Games" },
        { name: "Suzanne Collins", author: "James and the Giant Peach" },
        { name: "Roald Dahl", author: "The Young Guard(??????? ???????)" },
        {
          name: "Alexander Alexandrovich Fadeyev",
          author: "Who Moved My Cheese?",
        },
        { name: "Spencer Johnson", author: "A Brief History of Time" },
        { name: "Stephen Hawking", author: "Paul et Virginie" },
        {
          name: "Jacques-Henri Bernardin de Saint-Pierre",
          author: "Lust for Life",
        },
        { name: "Irving Stone", author: "The Wind in the Willows" },
        {
          name: "Kenneth Grahame",
          author: "The 7 Habits of Highly Effective People",
        },
        {
          name: "Stephen R. Covey",
          author: "Virgin Soil Upturned(???????? ??????)",
        },
        { name: "Mikhail Sholokhov", author: "The Celestine Prophecy" },
        { name: "James Redfield", author: "The Fault in Our Stars" },
        { name: "John Green", author: "The Girl on the Train" },
        { name: "Paula Hawkins", author: "The Shack" },
        { name: "William P. Young", author: "Uncle Styopa(???? ?????)" },
        { name: "Sergey Mikhalkov", author: "The Godfather" },
        { name: "Mario Puzo", author: "Love Story" },
        { name: "Erich Segal", author: "Catching Fire" },
        { name: "Suzanne Collins", author: "Mockingjay" },
        { name: "Suzanne Collins", author: "Kitchen" },
        { name: "Banana Yoshimoto", author: "Andromeda Nebula" },
        { name: "Ivan Yefremov", author: "Autobiography of a Yogi" },
        { name: "Paramahansa Yogananda", author: "Gone Girl" },
        {
          name: "Gillian Flynn",
          author: "All Quiet on the Western Front(Im Westen nichts Neues)",
        },
        { name: "Erich Maria Remarque", author: "The Bermuda Triangle" },
        { name: "Charles Berlitz", author: "Things Fall Apart" },
        { name: "Chinua Achebe", author: "Animal Farm" },
        { name: "George Orwell", author: "Wolf Totem(???)" },
        { name: "Jiang Rong", author: "The Happy Hooker: My Own Story" },
        { name: "Xaviera Hollander", author: "Jaws" },
        { name: "Peter Benchley", author: "Love You Forever" },
        { name: "Robert Munsch", author: "The Women's Room" },
        {
          name: "Marilyn French",
          author: "What to Expect When You're Expecting",
        },
        {
          name: "Arlene EisenbergandHeidi Murkoff",
          author: "Adventures of Huckleberry Finn",
        },
        { name: "Mark Twain", author: "The Secret Diary of Adrian Mole" },
        { name: " Aged 13?", author: "Sue Townsend" },
        { name: "Pride and Prejudice", author: "Jane Austen" },
        {
          name: "Kon-Tiki: Across the Pacific in a Raft(Kon-Tiki ekspedisjonen)",
          author: "Thor Heyerdahl",
        },
        {
          name: "The Good Soldier ?vejk(Osudy dobrho vojka ?vejka za sv?tov vlky)",
          author: "Jaroslav Ha?ek",
        },
        { name: "Where the Wild Things Are", author: "Maurice Sendak" },
      ];
      books.forEach(async (e)=>{
        const book = new Book({
          name: e.name,
          author: e.author,
          finished: new Date()
        });
        const result = await book.save();
        
        console.log(result);
      })
    }
    
  };
}

module.exports = BookService;
