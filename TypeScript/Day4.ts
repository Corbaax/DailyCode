function lowestPossibleInteger(nums:number[]):number{
    
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] <= 0 || nums[i] >= nums.length ){ 
            nums[i] = nums.length+1;
        }
        
    }

    for(var i = 0; i < nums.length; i++){
        if(nums[i]<nums.length){ 
            nums[nums[i]-1] *= nums[i]-1 > 0 ? -1 : 1;
        }
    }
    for(var i = 0; i < nums.length; i++){
        if(nums[i]<0) return i+1
    }
    return nums.length
}

console.log(lowestPossibleInteger([3, 4, -1, 1]))

console.log(lowestPossibleInteger([1, 2, 0]))