/**
 * @param {string} s
 * @return {boolean}
 * for order statment -> need to "[" with "]"
 * case1: Wrong order
 * case2: no pair 
 * case3: Pair
 * if("" )
 * else if()
 * 
 */
 var isValid = function(s) {
     let stuck =[];
     for( let char of s){
        if(char ==="[" || char==="{" || char==="(" ){
            stuck.unshift(char);
        }else if( char =="]" && stuck[0]=="[" ){
            stuck.shift();
        }else if( char =="}" && stuck[0]=="{" ){
            stuck.shift();
        }else if( char ==")" && stuck[0]=="(" ){
            stuck.shift();   
        }else {
            return false
        }
     }
     if(stuck.length==0)return true
};

let s="[{}]}"
console.log(isValid(s));