const Meeting1 = [[1,4], [5,8], [11,15]];
// const Meeting2 = [[3,4], [6,12]];
const Meeting2 = [[1,2], [3,4], [6,12]]; // 延伸題

var  insert = function (Meeting1, Meeting2){

  for(let meet of Meeting2){
    Meeting1.push(meet)
  }
  Meeting1.sort((a,b) => a[0]-b[0]|| a[1] - b[1]);
  let result  = [Meeting1[0]] //[ 1, 3 ]
  let overlapping =[];
  Meeting1.shift();

  for(let meet of Meeting1){
    let s1  = result[result.length-1][0];
    let e1  = result[result.length-1][1];
    let s2  = meet[0]
    let e2  = meet[1]
    if(e1>=s2){
      result[result.length-1][1] = Math.max(e1,e2);
      overlapping.push([s2,e1]);
    }else{
      result.push(meet)
    }
  }
  console.log(result,"non-overlapping")
    return overlapping 
}

console.log(insert(Meeting1, Meeting2));
/**
 * 
 * overlapping = [[3,4], [6,8], [11,12]];
 * 
 */
