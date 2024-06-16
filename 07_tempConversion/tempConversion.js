const convertToCelsius = function(inputTemp) {
  outputTemp = (inputTemp - 32) * 5 / 9;
  return Math.round(outputTemp * 10) / 10;
};

const convertToFahrenheit = function(inputTemp) {
  outputTemp = (inputTemp * (9 / 5) + 32);
  return Math.round(outputTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
