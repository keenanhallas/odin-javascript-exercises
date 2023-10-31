const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, number) => {
    return total + number;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, number) => {
    return total * number;
  }, 1);
};

const power = function(number, power) {
	return number ** power;
};

const factorial = function(number) {
  //Is the fact that !0 = 1 an exception that has to be handled outside of the regular program logic, like with this test?
  if(number === 0) return 1;

  let total = 1;
  for(let i = 1; i <= number; i++){
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
