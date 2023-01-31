const data = require('../data/zoo_data');

const formatEmployeesCoverage = (nameOrId) => {
  const dataEm = data.employees.find((per) => per.firstName === nameOrId.name
  || per.lastName === nameOrId.name || nameOrId.id === per.id);
  const { firstName, lastName, responsibleFor } = dataEm;
  const namesAni = dataEm.responsibleFor.map((res, i) => data.species.find((datas) =>
    datas.id === res).name);
  const locations = responsibleFor.map((res, i) => data.species.find((datas) =>
    datas.id === res).location);
  return {
    id: dataEm.id,
    fullName: `${firstName} ${lastName}`,
    species: namesAni,
    locations,
  };
};

const getEmployeesCoverage = (name) => {
  if (name === undefined) {
    return data.employees.map((all) => formatEmployeesCoverage(all));
  }
  const dataEm = data.employees.find((per) => per.firstName === name.name
  || per.lastName === name.name || name.id === per.id);
  if (dataEm === undefined) throw new Error('Informações inválidas');
  return formatEmployeesCoverage(name);
};

module.exports = getEmployeesCoverage;
