/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s =s.replace(/[^0-9a-zA-z]/gi,'');
    console.log(s)

    s = s.toLowerCase();
    let left =0;
    let right  = s.length-1;
    while(left < right ){
        if(s[left]!==s[right]){
            return false
        }
        left++
        right--
    }
    return true
};
let s = "A man, a plan, a canal: Panama"
 s = "ab_a"

console.log(isPalindrome(s)) // 40
// console.log(calcDeliveryFee(pricingModel, 15)) // 65
// console.log(calcDeliveryFee(pricingModel, 50)) // 155




