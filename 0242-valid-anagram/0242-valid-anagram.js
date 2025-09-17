/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   let sword=s.split("").sort().join("")
   let tword=t.split("").sort().join("") 

   if(sword===tword){
    return true
   }else{
    return false
   }
};