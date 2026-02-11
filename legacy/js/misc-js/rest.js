//REST PARAMS , COLLECTS ALL REMAINING ARGUMENTS INTO AN ACTUAL ARRAY
function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal;
  });
}

console.log(sum(5, 5, 5));

const multiply = (...nums) => nums.reduce((total, val) => total * val);
console.log(multiply(5, 5, 5));
