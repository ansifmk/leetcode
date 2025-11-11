/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
        return Math.max(...accounts.map((n)=>n.reduce((acc,crr)=>acc+crr,0)))

};