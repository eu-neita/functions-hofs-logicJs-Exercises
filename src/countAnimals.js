const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const objectAllAnimals = {};
    data.species.forEach((values) => {
      objectAllAnimals[values.name] = values.residents.length;
    });
    return objectAllAnimals;
  }
  if (animal.sex) {
    const sexAnimals = [];
    const all = data.species.find((animalResidents) => animalResidents.name === animal.species);
    all.residents.forEach((residents) => {
      if (residents.sex === animal.sex) {
        sexAnimals.push(residents);
      }
    });
    return sexAnimals.length;
  }
  return data.species.find((animalResi) => animalResi.name === animal.species).residents.length;
};

module.exports = countAnimals;
