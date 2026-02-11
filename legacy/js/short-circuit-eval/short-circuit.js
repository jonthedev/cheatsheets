/*

* short circuit with &&

* if the first statement turns out to be falsy we get false

* if the first statement turns out to be truth then the second statement is ran

*/

const price = 50

price > 50 && console.log("I will run")

/*

* short circuit with ||

* if the first statement turns out to be true the first result is ran

* if the first statement turns out to be falsy then the second statement is ran

*/

const value =
  price > 40 || console.log("I will only run if the first part is false")

const isComplete = false
const obj = {
  name: "Jon",
  age: 37
}

const data = isComplete || obj
console.log(data)
console.log(value)
