//DESTRUCTURING ARRAYS
const raceResults = [
  "Mario",
  "Bowser",
  "Toad",
  "Princess Peach",
  "Yoshi",
  "Luigi",
  "Wario",
];

const [gold, silver, bronze] = raceResults;
const [, , , fourth] = raceResults;
const [winner, ...others] = raceResults;

console.log(gold, silver, bronze);
console.log(fourth);
console.log(winner);

//DESTRUCTURING OBJECTS

const runner = {
  first: "Eluid",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

//const { first, last } = runner;

const { country: nation } = runner;

const { first, last, ...others2 } = runner;

//NESTED DESTRUCTURING
const results = [
  {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: "Feyisa",
    last: "Lilesa",
    country: "Ethiopia",
  },
  {
    first: "Galen",
    last: "Krupp",
    country: "Umited States",
  },
];

const [, { country }] = results; //ethiopia

//DESTRUCTURING PARAMETRES
function print({ first, last, title }) {
  console.log(`${first}, ${last}, ${title}`);
}

print(runner);

const response = ["HTTP/1.1", "200 OK", "application/json"];

function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}

parseResponse(response);

function getCountrys(resultss) {
  const countries = [];
  resultss.forEach(({ country }) => {
    countries.push(country);
  });
  return countries;
}

function getCountrys2(resultss) {
  let countries = {}
  for (let { country } of resultss) {
    countries[country] = (countries[country] || 0) + 1
  }
  return countries
}

console.log(getCountrys(results));
console.log(getCountrys2(results));
