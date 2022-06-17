/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    const table = Array.from({length:m}, () => new Array(n).fill(0))
    // Make sure the first step is 1 (to right or to down)
    for(let i=0; i<table.length; i++) table[i][0]=1;
    for(let i=0; i<table[0].length; i++) table[0][i]=1;
    
    for(let i=1; i<table.length; i++){
        for(let j=1; j<table[0].length; j++){
            table[i][j] = table[i][j-1] + table[i-1][j]
        }
    }
    return table[table.length-1][table[0].length-1];
};
console.log(uniquePaths(3, 3));