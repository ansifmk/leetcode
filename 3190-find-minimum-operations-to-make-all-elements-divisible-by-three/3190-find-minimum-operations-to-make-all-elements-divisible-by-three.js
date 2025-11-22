/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let c =0;
    for(n of nums)
        if(n%3!=0) c++;
    return c;
};