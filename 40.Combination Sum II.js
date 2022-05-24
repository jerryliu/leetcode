/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 1+2+5= 8 -> 8-1-2-5=0
 */
 var combinationSum2 = function(candidates, target) {
    let result = [];
    //sort for check over number and return
    candidates.sort((a,b) => a-b );
    console.log(candidates,"candidates")
    //dfs i, candidates, target, no deep, slate = combination[]
    function dfs(i, candidates, target,slate ){
        // end point for backtracking
        if(target <0 ) return
        // base case (find the one of anwser)
        if(target==0 ){
            return result.push([...slate]);
        }
        //recursive 
        for(let j=i; j<candidates.length;j++){
            if(i!==j && candidates[j]==candidates[j-1])continue
            slate.push(candidates[j]);
            dfs( j+1, candidates, target-candidates[j],slate )
            slate.pop();
        }
    }
     
    dfs(0, candidates, target, [])
    return result 
    
};
let candidates=[10,1,2,7,6,1,5];//level
let target=8
console.log(combinationSum2(candidates,target));




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