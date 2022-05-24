/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.includes(target))
        return binarySearch(nums , target , 0 , nums.length -1)
    else {
        nums.push(target)
        const sortedArray = nums.sort((a,b) => a - b)
        return binarySearch(sortedArray , target , 0 , nums.length -1)
    }
};

const binarySearch = (nums,target,start,end) => {
    if(start > end) return false
    let mid = Math.floor((start + end) / 2)
    if(nums[mid] === target) return mid
    else if(target > nums[mid]) return binarySearch(nums , target , mid + 1 , end)
    else return binarySearch(nums , target , start , mid - 1)
}