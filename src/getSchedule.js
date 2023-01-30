const data = require('../data/zoo_data');

const hoursFormat = () => {
  const { hours } = data;
  const { species } = data;
  let hoursReturn = {};
  Object.keys(hours).forEach((keys) => {
    hours[keys] = {
      officeHour: `Open from ${hours[keys].open}am until ${hours[keys].close}pm`,
      exhibition: [],
    };
    hours[keys].exhibition = [];
    species.forEach((element) => {
      element.availability.forEach((ked) => {
        if (ked === keys) hours[keys].exhibition.push(element.name);
      });
    });
    hoursReturn = hours;
  });
  hoursReturn.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return hoursReturn;
};

const getSchedule = (scheduleTarget) => {
  const { species } = data;
  let returnSpeciesOrMondey = {
    Monday: { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' } };
  species.forEach((key) => {
    if (scheduleTarget === key.name) {
      returnSpeciesOrMondey = key.availability;
    }
  });
  if (scheduleTarget === undefined) return hoursFormat();
  if (scheduleTarget === 'Monday') return returnSpeciesOrMondey;
  return returnSpeciesOrMondey;
};
console.log(getSchedule());
module.exports = getSchedule;
