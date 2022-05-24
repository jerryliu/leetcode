/**
 * @param {number[]} nums
 * @return {number}
 * [-2,1,2,3]
 * case 1 nums[0] is bigest subarray 
 * case 2 nums[1] is bigest subarray -> Math(nums[0], nums[1]+nums[1-1])
 * alway get max accumulate number ->(1+2)-> ((1+2)+3)
 */
 var maxSubArray = function(nums) { 
    let maxCurrent = nums[0];
    let maxGlobal =nums[0];
    for(let i=1;i<nums.length;i++){
        console.log(maxCurrent, maxGlobal);
        maxCurrent = Math.max(nums[i], maxCurrent+nums[i]);
        maxGlobal = Math.max(maxCurrent,maxGlobal );
    }
    return maxGlobal;
};
const nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums));


