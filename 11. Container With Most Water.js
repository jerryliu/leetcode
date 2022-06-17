/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {

    let left  =0;
    let right  =height.length-1
    let tell = 0;
    let width =0;
    let maxContainer =0;

    while (left < right ){
        height[left]
        width = right -left;
        tell = Math.min(height[left], height[right]);
        currentContainer  =  width*tell
        maxContainer = Math.max(maxContainer, currentContainer);
        left++
        if (height[left] < height[right]){
            left++
        }else {
            right--
        }        
    }
    return maxContainer
};
let  height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height));