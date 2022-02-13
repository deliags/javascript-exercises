const sumAll = function (startInt, endInt) {

  let total = 0;

  while (startInt > 0 && typeof (startInt) && typeof (endInt) == 'number') {
    
    //Starts at zero and adds the start number, then decreases it until it is equal to the end number
    if (startInt > endInt) {
      for (let i = startInt; i >= endInt; i--) { total += i; }
    }
    else {
      for (let i = 1; i <= endInt; i++) { total += i; }
    }
    return total;
  }
  //Covers invalid entries
  return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;