/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result
    for(let i = 0 ; i < nums.length - 1 ; i++){
        for(let j = i + 1; j < nums.length; j++){
            result = nums[i] + nums[j]
            if(result == target){
                return [i , j]
            }
        }
    }
    
};