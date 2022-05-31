/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const sumBase = (n, k) =>  n.toString(k).split('').reduce((a,b) => +a + +b);