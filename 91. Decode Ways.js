/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    const obj ={}
    let str='ABCDEFGHIJKMNOPQRSTUVWXYZ'
    for(let i=0; i< str.length; i++){
        obj[str[i]]=i+1
    }
    console.log(obj,'obj')
};

console.log(numDecodings([3,2,4],6));

