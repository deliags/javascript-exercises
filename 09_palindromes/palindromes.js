const palindromes = function (str) {
    /* remove special characters, spaces and make lowercase*/
    let removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    /* reverse removeChar for comparison*/
    let checkPalindrome = removeChar.split('').reverse().join('');
  
    /* Check to see if str is a Palindrome*/
     return (removeChar === checkPalindrome);
};

// Do not edit below this line
module.exports = palindromes;
