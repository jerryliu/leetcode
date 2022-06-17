/**
 * @param {string} s
 * @return {string}
 */
// give string and index to compare left and right
function getPalindrome(left, right, s){
    // s -> cbbd 
    // slice (start, for 0 up to) 
    let temp =[0,1]
    while(left >= 0 && right < s.length && s[left] == s[right]){
        left--;
        right++;
    }
    return [left+1, right];
}
var longestPalindrome = function(s) {
    // 
    let max = [0,1]
    let currMax =[0,1]
    s =s.toString();
    //expland left and right from each char 
    for(let i=0 ; i< s.length; i++){
        even =  getPalindrome(i-1, i, s); 
        odd =  getPalindrome(i-1, i+1, s); 
        currMax = (even[1]-even[0] > odd[1]-odd[0])? even : odd
        max =( currMax[1]-currMax[0] > max[1]-max[0])? currMax : max ;  
    }
    return s.slice(max[0],max[1])
};


var s ="babad"
s =121
console.log(longestPalindrome(s))
