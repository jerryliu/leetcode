/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var canJump = function(nums) {
    let maxStep  = 0;
    for(let i=0; i< nums.length && maxStep >= i; i++){
        maxStep = Math.max( nums[i]+i, maxStep);
        if(maxStep >= nums.length-1) return true  
    }
    return false
        
};
const nums = [3,2,1,0,4]


console.log(canJump(nums));