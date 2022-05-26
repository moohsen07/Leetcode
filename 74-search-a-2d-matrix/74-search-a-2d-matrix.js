/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let start = 0 , 
        end = matrix.length - 1 , 
        cols = matrix[0].length , 
        mid = start + Math.floor((end - start) /  2);
    
    while(matrix[mid][0] > target || matrix[mid][cols - 1] < target){
        mid = start + Math.floor((end - start) /  2)
        if(matrix[mid][0] > target)
            end = mid - 1;
        else if(matrix[mid][cols - 1] < target)
            start = mid + 1;
        if(start > end) return false;
    }
    return binarySearch(matrix[mid] ,target)
};

let binarySearch = (arr , target ) => {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end){
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === target){
            return true;
        } else if (arr[mid] > target){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false
}
