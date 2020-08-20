//.MAP TAKES AN ARRAY AND MAPS THE ORIGINAL INTO A NEW ARRAY
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

books = [{
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

const doubles = numbers.map(function (num) {
  return num * 2;
});

const numDetail = numbers.map(function (n, indx) {
  return {
    index: indx,
    value: n,
    isEven: n % 2 === 0
  }
})

const abbrevs = words.map(word => {
  return word.toUpperCase().split('').join('.');
})

const original = abbrevs.map(word => {
  return word.split('.').join('').toLowerCase();
})

const bookTitles = books.map(book => {
  return book.title
});