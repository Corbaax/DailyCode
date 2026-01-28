
function sumTok(k:number, nums:number[]){
    for(var i = 0; i < nums.length-1; i++){
        for(var j = i + 1 ; j < nums.length; j++){
            if(nums[i] + nums[j] == k) return true;
        }
    }
    return false;
}

console.log(sumTok(17, [10, 15, 3, 7]))