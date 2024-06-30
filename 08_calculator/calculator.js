const add = function(...input) {
	let total = 0;
  for (let i of input) {
    total += i;
  }
  return total;
};

const subtract = function(first, ...input) {
  first -= input;
	return first;
};

const sum = function(input) {
	return input.reduce((total, a) => total + a, 0);
};

const multiply = function(input) {
  return input.reduce((total, a) => total * a);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(input) {
  let total = 1;
	for (let i = 2; i < input + 1; i++) {
    total = total * i;
  }
  return total;
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
