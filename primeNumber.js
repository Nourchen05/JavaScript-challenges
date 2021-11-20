//Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

const isPrime = (num) => num < 10 ? [2, 3, 5, 7].includes(num) : ![2, 3, 5, 7].some(i => !(num % i));



