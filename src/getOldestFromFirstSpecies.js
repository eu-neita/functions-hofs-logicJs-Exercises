const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const { employees, species } = data;
  const firstAnimal = employees.find((person) => id === person.id).responsibleFor[0];
  const animalsResidents = species.find((animal) => animal.id === firstAnimal).residents;
  const { name, sex, age } = animalsResidents.sort((a, b) => b.age - a.age)[0];
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;

// const getOldestFromFirstSpeciesX = (id) => {
//   const { name, sex, age } = data.species.find(
//     (animal) => animal.id === data.employees.find((person) => id === person.id).responsibleFor[0],
//   ).residents.reduce((lhs, rhs) => (lhs.age > rhs.age ? lhs : rhs),
//     { age: 0 });
//   return [name, sex, age];
// };
// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'))
// formatadin sem erro kkkkkk
