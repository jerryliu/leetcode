/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let exsitObj={}
        for(let str of strs){
            let resort = str.split('').sort().join('');
            if(exsitObj[resort]==undefined){
                exsitObj[resort]=[]
                exsitObj[resort].push(str)
            }else{
                exsitObj[resort].push(str)
    
            }
        }
    return Object.values(exsitObj)

};

let strs =["eat","tea","tan","ate","nat","bat"];
groupAnagrams(strs);