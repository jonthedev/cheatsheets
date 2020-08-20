// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// numbers.forEach(() => {
//   console.log(num * 2)
// })

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  }, {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]
books.forEach(book => {
  console.log(book.title)
})

books.forEach((book, indx) => {
  console.log(`${indx}: ${book.title}`)
})

for (let book of books) {
  console.log(book.title.toUpperCase())
}

for (let indx in books) {
  console.log(books[indx].title);
}

for (let i = 0; i < books.length; i++) {
  console.log(books[i].title.toUpperCase());
}