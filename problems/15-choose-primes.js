/*

Write a function `choosePrimes(nums)` that takes in an array of numbers as args.
The function should return a new array containing the primes from the original
array.

A prime number is a number that is only divisible by 1 and itself.

Hint: consider creating a helper function to check if a number is prime!

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

*/

let isPrime = function(num) {
    // Check if num is less than 2
    // return false if it is
    // check if num is equal to 2
    // return true if it is
    // check if num is divisible by any number other than 1 and itself
    // return false if it is
    // return true if it is not divisible by any number other than 1 and itself

    if (num < 2) return false;
    if (num === 2) return true;

    for (let i = 2; i <= num; i++) {
        if (num % i === 0 && i !== num) {
            return false;
        }
    }
    return true;
}


let choosePrimes = function(nums) {
    // use filter on nums
    // check if each number is prime using the isPrime helper function
    // return the filtered array of prime numbers

    return nums.filter(function(num) {
        return isPrime(num);
    } )
}

// alternative solution using Array.filter
// let choosePrimes = function(nums) {
//     return nums.filter(isPrime);
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = choosePrimes;
} catch (e) {
    module.exports = null;
}
