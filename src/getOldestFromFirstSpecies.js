const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const { employees, species } = data;
  const firstAnimal = employees.find((person) => id === person.id).responsibleFor[0];
  const animalsResidents = species.find((animal) => animal.id === firstAnimal).residents;
  const oldestAnimal = animalsResidents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;

// const getOldestFromFirstSpeciesX = (id) => {
//   const emptyAnimal = { age: 0 };
//   const { employees, species } = data;
//   const firstAnimal = employees.find((person) => id === person.id).responsibleFor[0];
//   const { name, sex, age } = species.find(
//     (animal) => animal.id === firstAnimal).residents.reduce(
//       (lhs, rhs) => (lhs.age > rhs.age ? lhs : rhs),
//       emptyAnimal);
//   return [name, sex, age];
// };
// console.log(getOldestFromFirstSpeciesX('9e7d4524-363c-416a-8759-8aa7e50c0992'))