/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * Input: matrix = 
 * [ 
 * [1,2,3],
 * [4,5,6]
 * ]
 * [
 * [1,4],
 * [2,5],
 * [3,6]
 * ]
 * row[0],col[0]->row[0],col[1]->row[0],col[2]
 * Output: [[1,4],[2,5],[3,6]]
 */
 var transpose = function(matrix) {
    const result = Array.from({length:matrix[0].length}, ()=> new Array(matrix.length).fill(0) )
    for(let row=0;row<matrix.length;row++){
        for(let col=0;col<matrix[row].length;col++){
            result[col][row]=matrix[row][col]
            console.log(col,row)
            console.log(result)
        }
    }
    return result 
};
const matrix = [[1,2,3],[4,5,6]]

console.log(transpose(matrix));




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