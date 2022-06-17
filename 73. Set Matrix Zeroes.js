/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    const zerosList=[];
    for(let row =0; row < matrix.length; row++){
        for(let col=0; col<matrix[0].length; col++ ){
            if(matrix[row][col] == 0){
                zerosList.push([row,col]);
            }
        }
    }

    for( let zero of zerosList){
        let top =0;
        let right =0;
 
        while(right < matrix[0].length ){
            matrix[zero[0]][right] = 0
            right++
        }
        while(top < matrix.length){
            matrix[top][zero[1]] = 0
            top++        
        }
    }
    return matrix
};

let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(setZeroes(matrix));