/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    const arrayOfWords = s.split(' ')
    const lastWordLength = arrayOfWords[arrayOfWords.length - 1].length
    return lastWordLength
};