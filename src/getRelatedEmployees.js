const data = require('../data/zoo_data');

const isManager = (id) => {
  const emplo = data.employees.find((person) => person.id === id);
  const man = [];
  data.employees.forEach((manager) => {
    if (manager.managers !== []) {
      man.push(manager.managers[0]);
      man.push(manager.managers[1]);
    }
  });
  return man.some((person) => emplo.id === person);
};
// console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
const getRelatedEmployees = (managerId) => {
  const names = [];
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  data.employees.forEach((emplo) => emplo.managers.forEach((manage) => {
    if (manage === managerId) {
      names.push(`${emplo.firstName} ${emplo.lastName}`);
    }
  }));
  return names;
};

module.exports = { isManager, getRelatedEmployees };
