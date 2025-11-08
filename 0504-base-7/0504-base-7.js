/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num==0){
        return "0"
    }
 let negative =false;
 if(num<0){
    negative=true
    num=-num
 }

let ans="";
while (num>0){
let rem =num%7 ;
ans =rem+ans;
num=Math.floor(num/7)
}
if (negative){
    ans ="-"+ans
}
return ans;

};