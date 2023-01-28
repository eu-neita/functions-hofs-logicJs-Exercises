const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const emp = data.employees.find((person) => {
    const first = person.firstName;
    const last = person.lastName;
    return first === employeeName || last === employeeName;
  });
  if (emp === undefined) {
    return {};
  }
  return emp;
};

module.exports = getEmployeeByName;
