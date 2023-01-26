const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const pu = [];
  if (pu === []) {
    return pu;
  }
  ids.forEach((id, i) => {
    pu.push(data.species.find((specie) => specie.id === ids[i]));
  });

  return pu;
};

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;
