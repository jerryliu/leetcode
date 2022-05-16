/**
 * @param {string} s
 * @return {string}
 */
// give string and index to compare left and right


var longestPalindrome = function(s) {
    var res =""
    var resLen= 0;
    for(let i=0;i<s.length;i++){
        let end =i;
        let start =i;

        while(start>=0 && end < s.length && s[start]==s[end]){
            if(end-start+1 >resLen ){
                res = s.slice(start, end+1);
                resLen = end-start+1;
            } 
            start--;
            end++;
            console.log(s[start],s[end],'Start End');

        }
        end=i;
        start =i+1
        while(start>=0 && end < s.length && s[start]==s[end]){
            if(end-start+1 >resLen ){
                res = s.slice(start, end+1);
                resLen = end-start+1;
            } 
            start--;
            end++;
        }
    }
    return res;
    // return s.split();
};

var s ="babad"
s ="cbbd"
longestPalindrome(s);