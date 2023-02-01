const data = require('../data/zoo_data');

// const getMap = () => {
//   const all = data.species.map((spe) => spe);
//   const diNe = all.filter((an) => an.location === 'NE');
//   const maper = {
//     NE: [],
//     NW: [],
//     SE: [],
//     SW: [],
//   };
//   diNe.map((str) => maper.NE.push(str.name = { str.residents }));
//   return maper;
// };

const getAnimalMap = (options) => {
  // if (options.includeNames === true) return getMap();
};

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
