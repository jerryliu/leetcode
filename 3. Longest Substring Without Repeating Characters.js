/**
 * @param {string} s
 * @return {number}
 */

// abc
//slice windows
var lengthOfLongestSubstring = function(s) {
    let maxLongest=0;
    let left=0;
    let right=0;
    let map ={};
    while( right < s.length){
        if(map[s[right]] ==undefined){
            map[s[right]]=  [s[right]];
            maxLongest = Math.max(maxLongest, Object.entries(map).length);
            right ++
            console.log(map,"UN");

        }else{
            delete map[s[left]]
            left++
            console.log(map,"has");

        }
    }
    return maxLongest
};


var s ="babad"
s ="abcc"
console.log(lengthOfLongestSubstring(s))
