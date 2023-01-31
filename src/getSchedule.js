const data = require('../data/zoo_data');

const { hours, species } = data;
const obj = JSON.parse(JSON.stringify(hours));
Object.keys(obj).forEach((el) => {
  obj[el] = { officeHour: `Open from ${hours[el].open}am until ${hours[el].close}pm`,
    exhibition: [],
  };
  obj[el].exhibition = [];
  species.forEach((element) => {
    element.availability.forEach((ked) => {
      if (ked === el) obj[el].exhibition.push(element.name);
    });
  });
});
obj.Monday = { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' };

const getSchedule = (scheduleTarget) => {
  const returnSpecies = species.find((key) => scheduleTarget === key.name);
  const verifyAnimal = species.some((animal) => animal.name === scheduleTarget);
  const verifydays = Object.keys(obj).some((days) => days === scheduleTarget);
  let vasc = {};
  Object.keys(obj).forEach((keyd) => {
    if (keyd === scheduleTarget) {
      vasc = { [keyd]: obj[keyd] };
    }
  });
  if (verifyAnimal) return returnSpecies.availability;
  if (verifydays) return vasc;
  return obj;
};

console.log(getSchedule('lions'));
module.exports = getSchedule;
