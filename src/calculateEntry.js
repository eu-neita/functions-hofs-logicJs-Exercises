const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let childCount = 0;
  let adultCount = 0;
  let seniorCount = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      childCount += 1;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      adultCount += 1;
    }
    if (entrant.age >= 50) {
      seniorCount += 1;
    }
  });
  return { child: childCount, adult: adultCount, senior: seniorCount };
};
const calculateEntry = (entrant) => {
  if (entrant === undefined || Object.keys(entrant).length === 0) {
    return 0;
  }
  const allEntrant = countEntrants(entrant);
  const calcChild = allEntrant.child * data.prices.child;
  const calcAdult = allEntrant.adult * data.prices.adult;
  const calcSenior = allEntrant.senior * data.prices.senior;
  return calcChild + calcAdult + calcSenior;
};

module.exports = { calculateEntry, countEntrants };
