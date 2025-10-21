/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let a=null
    let count=0;
    for(let num of nums){
        if(count===0)a=num;
        count +=(num===a)?1:-1
    }
    return a
};