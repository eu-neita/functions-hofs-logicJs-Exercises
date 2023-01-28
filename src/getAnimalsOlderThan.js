const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animals = data.species.find((specie) => specie.name === animal);
  return animals.residents.every((element) => element.age >= age);
};

module.exports = getAnimalsOlderThan;
