/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let longestWord = function(sentence) {
    // create a variable to hold the count of the longest word
    // split the sentence into words
    // use forEach to iterate over the words
    // check if the current word is longer than the longest word found so far
    // if worrd is longer, update the longest word variable
    // return the longest word found

    let longest = '';
    sentence.split(" ").forEach(function(word) {
        if (word.length > longest.length) {
            longest = word;
        }
    })
    return longest;

};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
