// let Cities = {
//   Mumbai: 2000,
//   Ahm: 1000,
//   Chennai: 3000,
//   Delhi: 4000,
// };

// let largeCities = {};

// for (const city in Cities) {
//   if (Cities[city] < 2000) {
//     console.log(`"${city}" is Skipped bcoz its population is less than 2000`);
//     continue;
//   }

//   //   storing other cities in new object
//   largeCities[city] = Cities[city];
// }
// console.log(largeCities);

// -------------------------------------------------------------------------------------------------------------------------------

// Dynamic form validation

let formData = {
  name: "",
  email: "pradeep@mail.com",
  phone: "1234567890",
};

for (const field in formData) {
  if (formData[field] === "") {
    console.log(`"${field}" is required`);
    break;
  } else {
    console.log(`submited ${field.toUpperCase()} => ${formData[field]}`);
  }
}
