/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 * Input: k = 3, n = 7
 * Output: [[1,2,4]]
 * 
 */
 var combinationSum3 = function(k, n) { 
    const result =[]
    const nums =[];
    // make a function for deep first search
    // index, [1~9], k=deep, n=target, slate=check board []
    // core 7= 1+2+4 -> 7-1-2-4 =0
    //  
    for(let n=1;n<=9;n++)nums.push(n);

    function dfs(i, nums, k, n, slate){
        //end point case
        if(n<0)return
        //base case
        if( k ==slate.length ){
            if(n==0){result.push([...slate])}
            return
        }
        //recursive case
        for(let j=i;j<nums.length;j++){
            slate.push(nums[j]);
            dfs(j+1,nums, k,n- nums[j],slate);
            slate.pop();
        }
    }
    //init dfs
    dfs(0, nums, k, n, [])
    return result 
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