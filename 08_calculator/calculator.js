const add = function (firstNum, secNum) {
  let addSum = firstNum + secNum;
  return addSum;
};

const subtract = function (firstNum, secNum) {
  let subtraction = firstNum - secNum;
  return subtraction;
};

const sum = function (array) {
  // 0 + 1 + 2 + 3 + 4
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue)
  return sumWithInitial;
};

const multiply = function (array) {
  
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue * currentValue)
  return sumWithInitial;
};

const power = function (firstNum, secNum) {
  return firstNum ** secNum;
};

const factorial = function (number) {
  if (number === 0){
    return 1;
  }
 
  let product = 1; 
  
  for (let i = number; i > 0; i--){
    product *= i;
  }
  return product; 
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