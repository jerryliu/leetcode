/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var rotate = function(matrix) {
    for(let row =0 ;row< matrix.length;row++){
        for(let col=row;col<matrix[0].length;col++){
            [matrix[row][col]]=[matrix[col][row]]
           
            
        }
    }
    console.log(matrix)
    for(let row of matrix){
         row.reverse();
    }
    return matrix
    
};
const matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix);