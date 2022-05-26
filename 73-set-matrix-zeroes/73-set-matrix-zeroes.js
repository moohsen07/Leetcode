/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = [] , col = [];

    for(let i = 0 ; i < matrix.length ; i++){
        for(let j = 0 ; j < matrix[0].length ; j++){
            if(matrix[i][j] === 0 ){
                row.push(i)
                col.push(j)
            }
        }
        
    }
   row.forEach(r => {
        matrix[r] = matrix[r].map(x => 0)
    })
    
    col.forEach(c => {
        for(let i = 0 ; i < matrix.length;i++){
            matrix[i][c] = 0
        }
    })

};