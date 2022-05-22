/**
 * @param {number[]} nums
 * @return {number}
 */

// 1-loop through elements
//     2-check if loop has element greater than nums[i]
//         1-if true check if loop has element smaller than nums[i] 
//             1- if true count++
//         2- if false continue the loop 
    
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