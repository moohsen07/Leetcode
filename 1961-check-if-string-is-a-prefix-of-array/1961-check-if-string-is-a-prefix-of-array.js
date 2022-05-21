/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let perf = []
    for ( let i = 0 ; i < words.length ; i++){
        perf.push(words[i])
        if (perf.join('') === s) return true
    }
    return false
    
};