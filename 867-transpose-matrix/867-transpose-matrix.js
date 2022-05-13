/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let transpore = []
    for(let i = 0; i < matrix.length ; i++){
        for(let j = 0 ; j < matrix[i].length ; j++){
           transpore[j] = transpore[j] || []
            transpore[j][i] = matrix[i][j]
        }
    }
   return transpore
};