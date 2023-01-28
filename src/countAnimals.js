const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === null || animal === undefined) {
    const u = {};
    data.species.map((valores) => {
    u[valores.name] = valores.residents.length;
    });
    return u;
  }
  if (animal.sex) {
    const sexos = [];
    const todos = data.species.find((animaisinhos) => animaisinhos.name === animal.species);
    todos.residents.forEach((residentes) => {
      if (residentes.sex === animal.sex) {
        sexos.push(residentes);
      }
    });
    return sexos.length;
  }
  return data.species.find((animaisinhos) => animaisinhos.name === animal.species).residents.length;
};
console.log(countAnimals());
module.exports = countAnimals;
