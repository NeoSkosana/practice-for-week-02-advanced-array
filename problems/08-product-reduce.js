/*

Write a function `productWithReduce(nums)` that takes in an array of numbers.
The function should return the total product of multiplying all numbers of the
array together.

You can assume that `nums` will not be an empty array.

Solve this using Array's `reduce()` method.

Examples:

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12

*/

let productWithReduce = function(nums) {
    return nums.reduce(function(product, current) {
        return product * current;
    }, 1); // Start with 1 to avoid multiplying by 0
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = productWithReduce;
} catch (e) {
  module.exports = null;
}
