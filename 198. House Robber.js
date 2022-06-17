/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if(nums.length==1) return nums[0];
    if(nums.length==2) return Math.max(nums[0],nums[1]);

    let count= [nums[0],nums[1]];
    for(let i=2 ; i< nums.length; i++){
        count[i]= Math.max( count[i-2]+nums[i], (count[i-3] || 0)+nums[i]  );
    }
    return Math.max( count[count.length-1], count[count.length-2]);
};

let  nums = [1,2,3,1,1,100]
console.log(rob(nums));