function getNumberOfProperties(jsonObject) {
  const propertiesArray = Object.keys(jsonObject);
  return propertiesArray.length;
}

const reoObject = {
  name: "rana",
  age: 21,
  email: "amlalhlaly668@gmail.com",
  country: "aqaba",
};

console.log(getNumberOfProperties(reoObject)); 
