/**
 * @param {number[]} nums
 * @return {number}
 */

var countElements = function(nums) {
    let strictly = []
    for(let i = 0; i < nums.length; i++){
        strictly.push({num : nums[i] , hasGreater : false , hasSmaller : false})
        for(let j = 0; j < nums.length ; j++){
            if(nums[j] > nums[i] || nums[j] < nums[i]){
                if(nums[j] > nums[i]){
                    strictly[i].hasGreater = true
                }
                if(nums[j] < nums[i]){
                    strictly[i].hasSmaller = true
                }
            }
        }
    }
    return strictly.filter(s => s.hasGreater && s.hasSmaller).length 
};