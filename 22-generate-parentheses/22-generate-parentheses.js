/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const generatedArr = [];
    const generateCompination = (leftCount, rightCount , partial) => {
        console.log(leftCount , rightCount , partial)
        if(leftCount > rightCount) return
        if(!leftCount && !rightCount) return generatedArr.push(partial);
        if(leftCount > 0) generateCompination(leftCount - 1 , rightCount, partial + '(')
        if(rightCount > 0) generateCompination(leftCount , rightCount - 1, partial + ')')

    }
    generateCompination(n , n , '')
    return generatedArr
};
