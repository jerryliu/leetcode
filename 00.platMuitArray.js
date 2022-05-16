var flatten = function(arr) {
    let resultAry=[];
    for(let i=0;i<arr.length;i++){
        console.log(i,"i")
        if(Array.isArray(arr[i])){
            resultAry = resultAry.concat(flatten(arr[i]))
        }else{
            resultAry.push(arr[i]);
        }
    }
    return resultAry;
};
//   string1="abcde
//   string2="ace"

console.log(flatten([1,6,[2,[3,[4,[5]]]]]));


// function add(x){
//     return function add(y){
//         return x+y;
//     }
// }
// console.log(add(3)(4));