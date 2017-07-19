var books = [
  {
     title: 'Mindshift',
     author: 'Barbara Oakley',
     alreadyRead: true,
     url: "https://smile.amazon.com/Mindshift-Obstacles-Learning-Discover-Potential-ebook/dp/B01J2SU2QM/ref=pd_sim_351_1?_encoding=UTF8&psc=1&refRID=3BSN3FW2AEVYZ1N8T0WW",
  },{
    title: 'A Mind for Numbers',
    author: 'Barbara Oakley',
    alreadyRead: false,
    url: "https://smile.amazon.com/Mind-Numbers-Science-Flunked-Algebra-ebook/dp/B00G3L19ZU/ref=smi_www_rco2_go_smi_g2609328962?_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0&ie=UTF8",
  },{
    title: 'Quiet',
    author: 'Susan McCain',
    alreadyRead: false,
    url: "https://smile.amazon.com/Quiet-Power-Introverts-World-Talking-ebook/dp/B004J4WNL2/ref=sr_1_1_ha?s=digital-text&ie=UTF8&qid=1500429742&sr=1-1&keywords=quiet+the+power+of+introverts+in+a+world+that+can%27t+stop+talking",
  }
]

var bookList = `<ul>`
function readingList(arr) {
  for (var i = 0; i < books.length; i++) {
    var book = books[i];

    if (book.alreadyRead === true) {
      bookList += `<li>You have already read ${book.title} by ${book.author}. But if you'd like to read it again, you can do so <a href="${book.url}">here</a>.</li>`;
      //bookList.style.color = 'rgba(44, 62, 80,1.0)';
    } else {
      bookList += `<li>You still need to read ${book.title} by ${book.author}. But if you'd like to read it again, you can do so <a href="${book.url}">here</a>.</li>`;
    }
  }
  bookList += `</ul>`;
  document.getElementById('serious').innerHTML = bookList;
  console.log(bookList);
}

//Next challenge - change these to paragraphs by creating new nodes and adding images.

readingList(books);
