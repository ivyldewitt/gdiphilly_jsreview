// Create an array of objects, where each object describes a book and has
// properties for the title (a string), author (a string), and alreadyRead
// (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and
// book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you
// read it yet or not. If you read it, log a string like 'You already read
// "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still
// need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var books = [
  {
     title: 'Mindshift',
     author: 'Barbara Oakley',
     alreadyRead: true,
  },{
    title: 'A Mind for Numbers',
    author: 'Barbara Oakley',
    alreadyRead: false,
  },{
    title: 'Quiet',
    author: 'Susan McCain',
    alreadyRead: false,
  }
]

var bookList = `<ul>`
function readingList(arr) {
  for (var i = 0; i < books.length; i++) {
    var book = books[i];

    if (book.alreadyRead === true) {
      bookList += `<li>You have already read ${book.title} by ${book.author}.</li>`;
    } else {
      bookList += `<li>You still need to read ${book.title} by ${book.author}.</li>`;
    }
  }
  bookList += `</ul>`;
  document.getElementById('serious').innerHTML = bookList;
  console.log(bookList);
}



readingList(books);
