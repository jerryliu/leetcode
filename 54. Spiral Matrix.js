/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // width * height
    //size and left to right, top to bottom, right to left, bottom to top. 
    //[top,left],[top,right],[bottom, right],[bottom, left]
    const size =  matrix[0].length * matrix.length
    const result = []
    let top =0;
    let left =0;
    let bottom=matrix.length -1;
    let right =matrix[0].length -1;
    console.log(size)
    while(result.length <size ){
        for (let i=left;i<=right && result.length <size; i++){
            result.push(matrix[top][i]);
        }
        top++
        console.log(result,'r + toright')
        for (let i= top;i<=bottom && result.length <size; i++){
            result.push(matrix[i][right])
        }
        right--
        console.log(result,'r + bottom')
        for (let i=right;i>=left && result.length <size; i--){
            result.push(matrix[bottom][i])
        }
        bottom--
        console.log(result,'r + toleft')
        for (let i=bottom;i>=top && result.length <size; i--){
            result.push(matrix[i][left])
        }
        left++
    }
    return result;
};
const matrix = [[1,2,3],[4,5,6],[7,8,9]]
spiralOrder(matrix);