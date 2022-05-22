/**
 * @param {number[]} nums
 * @return {number[][]}
 * the solution set must not contain duplicate triplets. 
 * [-1,0,1,2,-1,-4] -> [-4,-1,-1,0,1,2] and avoid the same number
 * nums[left]+nums[right] =  0 - nums[i] (target)
 * [-3,1,1,2,5]
 * the bounder is i 
 * i =0
 * left= nums[1](1)
 * rigth = nums[3] (5)
 * target = 3
 * sum =
 * Case 1:sum >target
 *  right--
 * Case 2:sum <target
 * left++
 * Case 3:sum ==target
 * 
 */


 var threeSum = function(nums) {
    let results=[];
    if(nums.length<2) return results;
    nums.sort((a,b)=>a-b);

    for(let i=0; i<nums.length;i++){
        if(i >0 && nums[i]=== nums[i-1])continue
        const target = 0 - nums[i] ;
        let left =i+1;
        let right= nums.length-1;
        console.log(nums[left]+nums[right],"rrrr");
        while(right>left){
            let sum=nums[left]+nums[right];
            if(sum > target){
                right--
            }else if(sum<target){
                left++
            }else{
                console.log([nums[i],nums[left],nums[right]]);
                results.push([nums[i],nums[left],nums[right]]);
                // privend same num cuase loop
                while(nums[left] === nums[left+1] )left++
                while(nums[right] === nums[right-1] )right--
                left++
                right--
            }
    
        }
    }
    return results
};


console.log(threeSum([-1,0,1,2,-1,-4]));
