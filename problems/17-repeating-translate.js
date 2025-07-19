/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

let repeatingTranslate = function(sentence) {
    // split the sentence into words
    // use map to translate each word

    return sentence.split(' ').map(function(word){
        if (word.length < 3) {
            // If the word is shorter than 3 characters, return it unchanged
            return word;
        }
        else if (word.length >= 3) {
            return translateWord(word);
        }
    }).join(' '); 
};


let translateWord = function(word) {
    // create a varibel to hold the vowels
    // check if the word ends with a vowel
    // if it does, return the word repeated twice
    // if it doesn't, find the last vowel in the word
    // if the last vowel is found, return the word with the last vowel and all characters after it repeated
    
    const vowels = 'aeiouAEIOU';

    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            // If the word ends with a vowel
            return word + word;
        }
        else {
            // If the word ends with a non-vowel
            let lastVowelIndex = -1;
            for (let j = i; j >= 0; j--) {
                if (vowels.includes(word[j])) {
                    lastVowelIndex = j;
                    break;
                }
            }
            return word + word.slice(lastVowelIndex);
        }
    }
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}
