/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

let shortestWord = function(sentence) {
  // split the sentence into words
  // use reduce to find the shortest word
  // return the shortest word found

  let words = sentence.split(' ');
  return words.reduce((shortest, current) => {
    if (current.length < shortest.length) {
      return current;
    } else if (current.length === shortest.length) {
      return current; // return the later word in case of a tie
    }
    return shortest;
  }, words[0]);

};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
