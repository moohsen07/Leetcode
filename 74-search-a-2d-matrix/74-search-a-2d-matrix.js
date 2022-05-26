/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    matrix = matrix.flat()
    const bol = matrix.includes(target) ? true : false
    return bol
};