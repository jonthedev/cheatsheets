//ARGUMENTS OBJECT DO NOT WORK WITH ARROW ARROW FUNCTIONS
//ARGUMENTS ARE NOT AN ARRAYT
function sum() {
  console.log(arguments);
}

sum(1, 2, 3);

const nums = [5, 5, 5];
let total = 0;

for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}

for (let value in nums) {
  total += nums[value];
}

for (let val of nums) {
  total += val;
}

nums.forEach(num => (total += num));

console.log(total);
