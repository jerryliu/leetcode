var twoSum = function(nums, target) {
    let obj = {};
    for(let i =0 ;i<nums.length; i++){
     
        let ans = target - nums[i] ;
        console.log(obj,'obj')
        if(obj[ans]!=undefined){
            return [ obj[ans], i]
        }else{
            obj[nums[i]] = i;
        }

    }  
};

console.log(twoSum([3,2,4],6));
