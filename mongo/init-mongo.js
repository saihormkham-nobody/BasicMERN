db = new Mongo().getDB("bookDb");
db.createCollection('books', { capped: false });

db.books.insertMany([
  {
    author: 'A Tale of Two Cities',
    name: 'Charles Dickens',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'The Hobbit',
    name: 'J. R. R. Tolkien',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: "Harry Potter and the Philosopher's Stone",
    name: 'J. K. Rowling',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'The Little Prince',
    name: 'Antoine de Saint-Exupry',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Dream of the Red Chamber',
    name: 'Cao Xueqin',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'And Then There Were None',
    name: 'Agatha Christie',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'The Lion',
    name: ' the Witch and the Wardrobe',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'C. S. Lewis',
    name: 'She: A History of Adventure',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'H. Rider Haggard',
    name: 'The Adventures of Pinocchio',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Carlo Collodi',
    name: 'The Da Vinci Code',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Dan Brown',
    name: 'Harry Potter and the Chamber of Secrets',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'J. K. Rowling',
    name: 'Harry Potter and the Prisoner of Azkaban',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'J. K. Rowling',
    name: 'Harry Potter and the Goblet of Fire',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'J. K. Rowling',
    name: 'Harry Potter and the Order of the Phoenix',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'J. K. Rowling',
    name: 'Harry Potter and the Half-Blood Prince',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'J. K. Rowling',
    name: 'Harry Potter and the Deathly Hallows',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'J. K. Rowling',
    name: 'The Alchemist(O Alquimista)',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Paulo Coelho',
    name: 'The Catcher in the Rye',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'J. D. Salinger',
    name: 'The Bridges of Madison County',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Robert James Waller',
    name: 'Ben-Hur: A Tale of the Christ',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Lew Wallace',
    name: 'You Can Heal Your Life',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Louise Hay',
    name: 'One Hundred Years of Solitude(Cien aos de soledad)',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Gabriel Garca Mrquez',
    name: 'Lolita',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Vladimir Nabokov',
    name: 'Heidi',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Johanna Spyri',
    name: 'The Common Sense Book of Baby and Child Care',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Benjamin Spock',
    name: 'Anne of Green Gables',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Lucy Maud Montgomery',
    name: 'Black Beauty',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Anna Sewell',
    name: 'The Name of the Rose(Il Nome della Rosa)',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Umberto Eco',
    name: 'The Eagle Has Landed',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Jack Higgins',
    name: 'Watership Down',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Richard Adams',
    name: 'The Hite Report',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Shere Hite',
    name: "Charlotte's Web",
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'E. B. White; illustrated byGarth Williams',
    name: 'The Ginger Man',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'J. P. Donleavy',
    name: 'The Tale of Peter Rabbit',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Beatrix Potter',
    name: 'Jonathan Livingston Seagull',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Richard Bach',
    name: 'The Very Hungry Caterpillar',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Eric Carle',
    name: 'A Message to Garcia',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Elbert Hubbard',
    name: 'To Kill a Mockingbird',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Harper Lee',
    name: 'Flowers in the Attic',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'V. C. Andrews',
    name: 'Cosmos',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Carl Sagan',
    name: "Sophie's World(Sofies verden)",
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Jostein Gaarder',
    name: 'Angels & Demons',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Dan Brown',
    name: 'Kane and Abel',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Jeffrey Archer',
    name: 'How the Steel Was Tempered(??? ?????????? ?????)',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Nikolai Ostrovsky',
    name: 'War and Peace(????? ? ???)',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Leo Tolstoy',
    name: 'The Diary of Anne Frank(Het Achterhuis)',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Anne Frank',
    name: 'Your Erroneous Zones',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Wayne Dyer',
    name: 'The Thorn Birds',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Colleen McCullough',
    name: 'The Purpose Driven Life',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Rick Warren',
    name: 'The Kite Runner',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Khaled Hosseini',
    name: 'Valley of the Dolls',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Jacqueline Susann',
    name: 'Alcoholics Anonymous Big Book',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Bill Wilson',
    name: 'How to Win Friends and Influence People',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Dale Carnegie',
    name: 'The Great Gatsby',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'F. Scott Fitzgerald',
    name: 'Gone with the Wind',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Margaret Mitchell',
    name: 'Rebecca',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Daphne du Maurier',
    name: 'Nineteen Eighty-Four',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'George Orwell',
    name: 'The Revolt of Mamie Stover',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'William Bradford Huie',
    name: 'The Girl with the Dragon Tattoo(Mn som hatar kvinnor)',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Stieg Larsson',
    name: 'The Lost Symbol',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Dan Brown',
    name: 'The Hunger Games',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Suzanne Collins',
    name: 'James and the Giant Peach',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Roald Dahl',
    name: 'The Young Guard(??????? ???????)',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Alexander Alexandrovich Fadeyev',
    name: 'Who Moved My Cheese?',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Spencer Johnson',
    name: 'A Brief History of Time',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Stephen Hawking',
    name: 'Paul et Virginie',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Jacques-Henri Bernardin de Saint-Pierre',
    name: 'Lust for Life',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Irving Stone',
    name: 'The Wind in the Willows',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Kenneth Grahame',
    name: 'The 7 Habits of Highly Effective People',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Stephen R. Covey',
    name: 'Virgin Soil Upturned(???????? ??????)',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Mikhail Sholokhov',
    name: 'The Celestine Prophecy',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'James Redfield',
    name: 'The Fault in Our Stars',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'John Green',
    name: 'The Girl on the Train',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Paula Hawkins',
    name: 'The Shack',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'William P. Young',
    name: 'Uncle Styopa(???? ?????)',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Sergey Mikhalkov',
    name: 'The Godfather',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Mario Puzo',
    name: 'Love Story',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Erich Segal',
    name: 'Catching Fire',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Suzanne Collins',
    name: 'Mockingjay',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Suzanne Collins',
    name: 'Kitchen',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Banana Yoshimoto',
    name: 'Andromeda Nebula',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Ivan Yefremov',
    name: 'Autobiography of a Yogi',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Paramahansa Yogananda',
    name: 'Gone Girl',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Gillian Flynn',
    name: 'All Quiet on the Western Front(Im Westen nichts Neues)',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Erich Maria Remarque',
    name: 'The Bermuda Triangle',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Charles Berlitz',
    name: 'Things Fall Apart',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Chinua Achebe',
    name: 'Animal Farm',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'George Orwell',
    name: 'Wolf Totem(???)',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Jiang Rong',
    name: 'The Happy Hooker: My Own Story',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Xaviera Hollander',
    name: 'Jaws',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Peter Benchley',
    name: 'Love You Forever',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Robert Munsch',
    name: "The Women's Room",
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Marilyn French',
    name: "What to Expect When You're Expecting",
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Arlene EisenbergandHeidi Murkoff',
    name: 'Adventures of Huckleberry Finn',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Mark Twain',
    name: 'The Secret Diary of Adrian Mole',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: ' Aged 13?',
    name: 'Sue Townsend',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Pride and Prejudice',
    name: 'Jane Austen',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },
  {
    author: 'Kon-Tiki: Across the Pacific in a Raft(Kon-Tiki ekspedisjonen)',
    name: 'Thor Heyerdahl',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  },

  {
    author: 'Where the Wild Things Are',
    name: 'Maurice Sendak',
    created: '2022-02-10T10:29:20.961Z',
    finished: '2022-02-15T10:29:20.961Z'
  }
])