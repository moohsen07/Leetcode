/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let min = nums[0]
    for(let num of nums){
        if(Math.abs(num) === Math.abs(min)) min = Math.max(num , min)
        else if(Math.abs(num) < Math.abs(min)) min = num
    }
    return min
};