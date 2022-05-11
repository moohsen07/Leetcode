/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num
    let neg = x < 0 ? true : false
    x = neg ? x * -1 : x
    
    const reverseNum = ('' + x).split('').reverse().join('')
    
    num = neg ? +reverseNum * -1 : +reverseNum
    
    if( num > Math.pow(2, 31) - 1 || num < Math.pow(2, 31) * -1)
        num = 0;
    
    return num
};