// //multiply each number from array by 2 and store in variable

// let storedNums = [];
// let nums = [2, 4, 6, 8];

// //   for(initialization, condition, expression/increament){
// //     code whatever we want to perform
// //    }

// for (let index = 0; index < nums.length; index++) {
//   storedNums.push(nums[index] * 2);
// }
// console.log(storedNums); //output => [4,8,12,16]  each number from will be multiplied by 2

// ----------------------------------------------------------------------------------------------------------------------

// // use for loop and loop over the array and stop the loop when it get value pen and store the values in a new array
// let fruits = ["apple", "banana", "pineapple", "cake", "pen", "grapes"];
// let storedItem = [];

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "pen") {
//     console.log(`item is => ${fruits[i]} => thats why loop has been stopped`);
//     break;
//   }
//   storedItem.push(fruits[i]);
//   console.log(`item is => ${fruits[i]}`);
// }
// console.log(storedItem);

// ---------------------------------------------------------------------------------------------------------------------------------------

let numbs = [2, 3, 4, 5, 6, 7];
let DoubledNums = [];

for (let i = 0; i < numbs.length; i++) {
  if (numbs[i] === 5) {
    // break;
    continue;
  }

  DoubledNums.push(numbs[i] * 2);
}
console.log(DoubledNums);
