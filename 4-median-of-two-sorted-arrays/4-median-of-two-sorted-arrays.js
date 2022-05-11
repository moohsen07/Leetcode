/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2]
    const sortedArray = mergedArray.sort((a,b) => a - b)
    let median
    let halfArray = Math.floor(sortedArray.length / 2)
    if(sortedArray.length % 2 == 1){
        median =  sortedArray[halfArray]
    }
    else {
        median = (sortedArray[halfArray - 1] + sortedArray[halfArray]) / 2
    }
    return median
    
};