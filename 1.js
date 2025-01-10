
const person = {
  name: "Rana",
  age: 21,
  email: "amlalhlaly668@gmail.com",
};

const jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);
