const ftoc = function(farDegrees) {
  let celDegrees = (farDegrees - 32) * 5 / 9;
  let roundedCelDegrees = Math.round(celDegrees * 10) / 10;
  return roundedCelDegrees;

};

const ctof = function(celDegrees) {
  let farDegrees = (celDegrees * 9 / 5) + 32;
  let roundedFarDegrees = Math.round(farDegrees * 10) / 10;
  return roundedFarDegrees;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
