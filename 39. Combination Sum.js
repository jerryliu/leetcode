/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum = function(candidates, target) {
     let result =[];
     for (let i=0;i<candidates.length;i++){
         console.log(target/candidates[i]);
         let complete =target/candidates[i];
         let remainder = target/complete;
        if(Number.isInteger(complete)){
            result.push(candidates[i]);
        }else if(remainder==candidates[i]){
            result.push(candidates[i]);

        }


     }
     return result;
    
};
let nums = [2,3,5]
let target = 8;
console.log(combinationSum(nums,target));