//A palindrome is a word that reads the same forwards and backwards. Some examples are

//Eye
//Racecar
//A Man, A Plan, A Canal – Panama!
//Whether you read these left-to-right or right-to-left, you get the same sequence of characters. We’ll be ignoring punctuation like commas, periods, question marks, exclamation points, and casing.

function palindrome(str) {
  return str.toLowerCase().match(/[a-z0-9]/g).join('')===str.toLowerCase().match(/[a-z0-9]/g).reverse().join('');
}
