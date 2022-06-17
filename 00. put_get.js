/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 * Input: k = 3, n = 7
 * Output: [[1,2,4]]
 * 
 */
 var put = function(key, v) { 
    const lru =[]
    
    if(lru.length<4){
        lru.push({key:v})
    }
    
    return lru 
};
let k=3;//level
let v=7
console.log(put(k,v));


var bill =[
    {
        "quantity": "1",
        "name": "breakfast",
        "price": "12"
    },
    {
        "quantity": "1",
        "name": "breakfast",
        "price": "13"
    },
    {
        "quantity": "1",
        "name": "lunch",
        "price": "18"
    },
    {
        "quantity": "1",
        "name": "dinner",
        "price": "5"
    }
]
var order = ['breakfast', 'dinner']
// output [{break :12.5}, {dinner:5}]

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