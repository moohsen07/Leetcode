/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return binSearch(nums, target, 0, nums.length-1);
};

const binSearch = (nums,target,start,end) => {
    
    if(start > end) return [-1,-1];
    
    // find the mid element and check left or right - > logn
    let mid = start + parseInt((end-start)/2);

    if(nums[mid] == target){
        let first =[], last =[];
        console.log('mid', mid);
        
        // find the first
        if(nums[mid-1] == target) {
            first =  binSearch(nums,target,start,mid-1);
            console.log('first', first);
        }
        else first[0] = mid;
        
        // find the last
        if(nums[mid+1] == target) {
            last =  binSearch(nums,target,mid+1,end);
            console.log('last', last);
        }
        else last[0] = mid;

        return [Math.max(first[0], first[1]||-1), Math.max(last[0],last[1] || -1)];
    }
    
    if(target > nums[mid]){
        // go right
        return binSearch(nums,target,mid+1,end);
    }else{
        return binSearch(nums,target,start, mid-1);
    }
    
}



