const convertToCelsius = function(fTemp) {
  let cTemp = 5/9 * (fTemp - 32);
  cTemp = Math.round(cTemp * 10) / 10;
  return cTemp;
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = cTemp / (5/9) + 32;
  fTemp = Math.round(fTemp * 10) / 10;
  return fTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
