/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    
};
let k=3;//level
let n=7
console.log(combinationSum3(k,n));




/**
 * Input: k = 3, n = 7
 * Output: [[1,2,4]]
 * 
 var combinationSum3 = function(k, n) {
    //
    let result =[]
    let nums =[];
    // make array from 1~9
    for(let i=1;i<=9;i++)nums.push(i);

    function dfs(i,nums, k,n,slate){
        //end point 
        if(n<0) return;
        console.log(i,n,slate)
        //base case 
        if(slate.length == k){
            if(n==0){
                result.push(slate.slice());
            }
            return
        }
        //rescursive 
        for(let j=i; j<nums.length; j++){
            slate.push(nums[j])
            dfs(j+1, nums, k, n-nums[j],slate)
            slate.pop();
        }
    }

    dfs(0, nums,k,n,[] )
    return result 
};
*/