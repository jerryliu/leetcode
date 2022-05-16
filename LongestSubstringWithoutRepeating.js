/**
 * @param {string} 
 * @return {number}
 * abcabcbb
 * map = {a:3,b:2}
 * max =0
 * begin =0;
 * abc
 */
function ArrayChallenge(strArr) { 
    let array_i1=[];
    let array_i2=[];
    let has_two_parent =false;
    let has_three_child =false;
    let count_child ={};
    let is_binary_tree = false;
    for(let i=0; i<strArr.length; i++){
        // let i1Str= strArr[i].split(',')[0];
        array_i1.push(strArr[i].split(',')[0]);
        // let i2Str= strArr[i].split(',')[1];
        array_i2.push(strArr[i].split(',')[1]);
    }

    has_two_parent = new Set(array_i1).size !== array_i1.length;
    array_i2.forEach(function (item){
        count_child[item] = (count_child[item] || 0)+1;
        if(count_child[item] > 2) {
            has_three_child=true;
        }
    })
    console.log(count_child);
    is_binary_tree = (!has_two_parent && !has_three_child)
// code goes here  
return is_binary_tree; 
}

var strArray=["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"];
 strArray=["(1,2)", "(3,2)", "(2,12)", "(5,2)"];
//  strArray= ["(1,2)", "(2,4)", "(7,2)"];
  // keep this function call here 
  console.log(ArrayChallenge(strArray));


