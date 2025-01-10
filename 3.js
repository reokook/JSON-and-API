const books = {
  library: [
    {
      title: "les miserables",
      author: "victor hugo",
      publicationDate: "1862",
    },
    {
      title: "monte cristo",
      author: "Alexandre Dumas",
      publicationDate: "1844",
    },
    {
      title: "mafia conflict",
      author: "idriz",
      publicationDate: "2018",
    },
    {
      title: "A lie in church",
      author: "kim olivia",
      publicationDate: "2022",
    },
  ],
};

function getBookTitles(jsonObject) {
  return jsonObject.library.map((book) => book.title);
}

const bookTitles = getBookTitles(books);
console.log(bookTitles); 
