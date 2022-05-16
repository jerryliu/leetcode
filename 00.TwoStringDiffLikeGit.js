var longestCommonSubsequence = function(text1, text2) {
    let newString="";
    const mapTable = Array.from({length:text1.length+1}, () => new Array(text2.length+1).fill(''))
    for(let row=1; row<mapTable.length;row++){
        for(let col=1; col<mapTable[row].length;col++){
            if(text1[row-1]===text2[col-1]){
                mapTable[row][col] = mapTable[row-1][col-1] + text1[row-1]
            }else {
                let aboveChar =mapTable[row-1][col];
                let leftChar =mapTable[row][col-1];
                mapTable[row][col]= (aboveChar.length > leftChar.length )? aboveChar:leftChar;
                
            }
        }
    }
    let commonString = mapTable[mapTable.length-1][mapTable[0].length-1];
    let diff= "";
    text1.split('').forEach(function(val, i){
      if (val != commonString.charAt(i))
        diff += "+"+val ;         
    });
    console.log(diff);

    return mapTable[mapTable.length-1][mapTable[0].length-1]


};
let string1="Mondays"
let string2="Tuesday"
//   string1="abcde"
//   string2="ace"

// console.log(longestCommonSubsequence(string1, string2));

function findDiff(str1, str2){ 
    let diff= "";
    str2.split('').forEach(function(val, i){
      if (val != str1.charAt(i))
        diff += val ;         
    });
    return diff;
  }
console.log(findDiff(string1, string2));

