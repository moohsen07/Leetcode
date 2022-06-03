/**
 * @param {number[][]} nums
 * @return {number[]}
 */

var intersection = function(nums) {
    let ans = []
    
    for(let i = 0 ; i < nums[0].length; i++){
        if(nums.every(n => n.includes(nums[0][i]))) ans.push(nums[0][i])
    }
    return ans.sort((a,b) => a-b)
};