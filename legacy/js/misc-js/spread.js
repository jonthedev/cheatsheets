//SPREAD IN FUNCTION CALLS

const numsArray = [1, 2, 3, 4];
const numsString = "1234";

const getValues = (a, b, c, d) => {
  console.log(typeof a, b, c, d);
};

getValues(...numsArray);
getValues(...numsString);

//SPREAD IN ARRAY LITERALS
const go = ["darkstar", "martian", "wilson"];
const skillM = ["teknyc", "luigi", "cloud"];
const dbz = ["Goku", "Vegeta", "Gohan"];

const all = [...go, ...skillM];
console.log(all);

const dbzCopy = [...dbz];

//spread in Object Literals
const feline = {
  legs: 4,
  family: "Felidae",
};

const canine = {
  family: "Caninae",
  furry: true,
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true,
};

console.log(dog);
