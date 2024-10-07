const convertToCelsius = function(tempInFarenheit) {
  const unrounded = (tempInFarenheit -32) * 5 / 9;
  return Math.round(unrounded * 10) /10;
};

const convertToFahrenheit = function(tempInCelcius) {
  const unrounded = tempInCelcius * 9 / 5 + 32;
  return Math.round(unrounded * 10) /10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
