/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<=0){
        return false;
    }
    return Number.isInteger(Math.log2(n))
};