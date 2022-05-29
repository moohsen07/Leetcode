/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const sortedArray = Array.from(new Set(nums)).sort((a,b) => a-b ).filter((a) => a > 0 )
    let n = 1
    for(let i = 0; i < nums.length ; i++){
        if(sortedArray[i] != n) return n
        n++
    }
    return n
};