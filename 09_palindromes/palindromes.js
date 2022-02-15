const palindromes = function (str) {
    /* remove special characters, spaces and make lowercase*/
    let removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    /* reverse removeChar for comparison*/
    let checkPalindrome = removeChar.split('').reverse().join('');
  
    /* Check to see if str is a Palindrome*/
     return (removeChar === checkPalindrome);
  // // find the length of a string
  // const len = string.length;

  // // loop through half of the string
  // for (let i = 0; i < len / 2; i++) {

  //     // check if first and last string are same
  //     if (string[i] !== string[len - 1 - i]) {
  //         return false;
  //     }
  // }
  // return true;
};

// Do not edit below this line
module.exports = palindromes;