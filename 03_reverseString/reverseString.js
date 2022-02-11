const reverseString = function (string) {

  //String is split into array
  let splitString = string.split('');
  //Reverse the array
  let reverseString = splitString.reverse();
  //Convert the array into a string
  let joinString = reverseString.join('');
  
  return joinString;
};

// Do not edit below this line
module.exports = reverseString;
