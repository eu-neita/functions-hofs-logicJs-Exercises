const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animals = data.species.find((specie) => specie.name === animal);
  const cu = [];
  let tamanho = 0;
  animals.residents.forEach((element) => (element.age >= age ? cu.push(element.age) : 0));
  animals.residents.forEach((element) => {
    if (element.age < 100) {
      tamanho += 1;
    }
  });
  return cu.length === tamanho;
};
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
