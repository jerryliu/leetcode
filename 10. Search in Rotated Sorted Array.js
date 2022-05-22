/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
     for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            return i;
        }else{
            return -1
        }
     }
    
};
let nums = [4,5,6,7,0,1,2];
let target = 0;
console.log(search(nums,target));