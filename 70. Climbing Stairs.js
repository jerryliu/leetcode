/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    let num = new Array(n).fill(0)
    num[0] =1
    num[1] =1
    num[2] =2
    for(let i=3; i<=n; i++){
        num[i] = num[i-1] + num[i-2]
    }
    console.log(num)
    return num[n]
};

let n = 45;
console.log(climbStairs(n));