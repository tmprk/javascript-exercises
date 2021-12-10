const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += (x[i]);
  }
  return sum
};

const multiply = function(x) {
  let total = 1;
  for (let i = 0; i < x.length; i++) {
    total *= (x[i]);
  }
  return total
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(x) {
  let total = 1;
  for (let i = x; i > 1; i--) {
    total *= i;
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
