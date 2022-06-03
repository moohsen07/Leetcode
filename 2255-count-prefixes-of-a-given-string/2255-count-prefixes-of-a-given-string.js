/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = (words, s) => words.filter(word => s.startsWith(word)).length 