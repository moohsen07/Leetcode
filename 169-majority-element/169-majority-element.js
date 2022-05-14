/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
     const inst = nums.reduce((acc , num) => { 
        acc[num] = (acc[num] || 0) + 1 
        return acc
    }, {})
     return Object.keys(inst).reduce((a,b) => inst[a] > inst[b] ? a : b)
    
};