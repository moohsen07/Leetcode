/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = nums.indexOf(val); i < nums.length;){
        if(nums[i] === val) nums.splice(i,1)
        else i++
    }
};