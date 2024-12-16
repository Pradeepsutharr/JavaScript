let nums = [2, 4, 6, 8, 5];
let multipliedNums = [];

nums.forEach((number) => {
  if (number == 6) {
    return;
  }
  multipliedNums.push(number * 2);
});
console.log(multipliedNums);
