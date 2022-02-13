const removeFromArray = function (array, ...values) {
  let tempArray = array;
  let args = values;
  let filteredArray = tempArray.filter(element => !args.includes(element));

  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;