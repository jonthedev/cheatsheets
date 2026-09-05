const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentVal) => {
  return total * currentVal
})

//finding a maximum value in an array
const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, currentVal) => {
  // if (currVal > max) {
  //   return max;
  // }
  // return max;
  return Math.max(max, currentVal);
})

//find minimum value
const minGrade = grades.reduce((min, currentVal) => {
  return Math.min(min, currentVal);
})