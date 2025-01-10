
const cities = {
  cities: [
    { name: "mosku", population: 37435191, country: "Russia" },
    { name: "london", population: 29399141, country: "England" },
    { name: "Shanghai", population: 26317104, country: "China" },
    { name: "seoul", population: 21846507, country: "South korea" },
    { name: "tokeo", population: 20000000, country: "Japn" },
  ],
};


function getCityNamesSortedByPopulation(jsonObject) {
  return jsonObject.cities
    .sort((a, b) => b.population - a.population)
    .map((city) => city.name);
}

const sortedCityNames = getCityNamesSortedByPopulation(cities);
console.log(sortedCityNames); 