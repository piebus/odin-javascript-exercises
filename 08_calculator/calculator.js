const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(listOfNumbers) {
	return listOfNumbers.reduce((total, currentNumber) => {
    return total + currentNumber;
  }, 0);
};

const multiply = function(listOfNumbers) {
  return listOfNumbers.reduce((total, currentNumber) => {
    return total * currentNumber;
  }, 1);
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(number) {
	if (number == 0) {return 1;}
  else {return number * factorial(number-1);}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
