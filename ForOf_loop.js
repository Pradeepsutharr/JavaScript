let Numbers = [1, 2, 3, 4, 5];
let StoredNumbs = [];

for (const num of Numbers) {
  if (num === 4) {
    continue;
  }
  console.log(`Number is => ${num}`);

  StoredNumbs.push(num);
}
console.log(StoredNumbs);
