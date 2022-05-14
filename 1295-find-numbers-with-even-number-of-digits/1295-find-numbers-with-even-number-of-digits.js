/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.filter(n => (''+n).length % 2 === 0).length
};