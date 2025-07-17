/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    // create a variable to hold all the vowels
    // loop from the end of the word to the beginning
    // if the element is a vowel, get the index of that element
    // create a new word by slicing the original word from the start to the index of the vowel and concatenating it with the slice from the index + 1 to the end of the word
    // return the new word

    const vowels = 'aeiouAEIOU';
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
};

let hipsterfy = function(sentence) {
    // split the sentence into words
    // use map to apply removeLastVowel to each word
    // join the words back into a sentence
    // return the new sentence
    
    return sentence.split(' ').map(function(word) {
        return removeLastVowel(word);
    } ).join(' ');
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
