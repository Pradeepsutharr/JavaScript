// while loop that calculate th sum of all numbers from 1 to 5 and store in a variable
// 1+2+3+4+5

// let sum = 0;
// let count = 1;

// while (count <= 5) {
//   sum = sum + 1;
//   count++;
// }
// console.log(sum); // output => 6 which is wrong

// --------------------------------------------------------------------------------------------------------------------

// while (count <= 5) {
//   sum = sum + count;
//   count++;
// }
// console.log(sum); //output => 15 which is correct

// -----------------------------------------------------------------------------------------------------------------
// print table of any number

// let num = 5;
// let counter = 1;

// while (counter <= 10) {
//   let result = num * counter;
//   console.log(`${num} X ${counter} = ${result}`);
//   counter++;
//   // console.log(result);
// }

// -----------------------------------------------------------------------------------------------------------------

// create a countdown from 5 to 1 and store in ana array

// let num = 5;
// let countdown = [];
// while (num > 0) {
//   countdown.push(num);
//   console.log(` stored ${num} in countdown ${countdown}`);
//   num--;
// }
// console.log(countdown); //output => [5,4,3,2,1]

// ---------------------------------------------------------------------------------------------------------------------

// // user input

// let password = "";
// let securePassword = "Secure123";

// while (password !== securePassword) {
//   password = prompt("Enter your password");
// }
// console.log("Access Granted");

// ----------------------------------------------------------------------------------------------------------------------------------

// // find even and odd numbers

// let numbs = [1, 2, 3, 4, 5, 6, 7, 8];
// let count = 0;
// let evenNums = [];
// let oddNumbs = [];

// while (count < numbs.length) {
//   if (numbs[count] % 2 === 0) {
//     evenNums.push(numbs[count]);
//     // break;     // break will stop the loop when it fimds first even number
//   } else {
//     oddNumbs.push(numbs[count]);
//   }
//   count++;
// }
// console.log(`Even numbs are ${evenNums}`);
// console.log(`odd numbs are ${oddNumbs}`);

// --------------------------------------------------------------------------------------------------------------------------------------------

// pagination with whie loop

const data = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
];

let currentPage = 1;
let itemPerPage = 5;
// let totalPages = 5;      //static page count
let totalPages = Math.ceil(data.length / itemPerPage); // create pages counts as per item count on a single page

while (currentPage <= totalPages) {
  console.log(`Page = ${currentPage}`);
  let start = (currentPage - 1) * itemPerPage;
  //from where to start picking items for page
  //   The startIndex tells where to start picking items from the data array for the current page.
  //   Formula:
  //   For currentPage = 1: (1 - 1) * itemsPerPage = 0, so the first page starts at index 0.
  //   For currentPage = 2: (2 - 1) * itemsPerPage = 5, so the second page starts at index 5.
  //   For currentPage = 3: (3 - 1) * itemsPerPage = 10, so the third page starts at index 10.

  let end = Math.min(start + itemPerPage, data.length);
  //   The endIndex tells where to stop picking items from the data array for the current page.
  //   Math.min is used to avoid going beyond the length of the array.
  //   For example:
  //   If startIndex + itemsPerPage is 15, and the data array has only 12 items, we stop at 12.

  const itemsOnPage = data.slice(start, end); //extract items for page
  // here we will write code for print items on page
  //   The slice(startIndex, endIndex) function extracts items from data starting at startIndex and ending just before endIndex.
  //   If startIndex = 0 and endIndex = 5, slice returns ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].

  console.log(itemsOnPage);
  currentPage++;
}
console.log(totalPages);
