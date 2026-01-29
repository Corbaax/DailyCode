
function multiplyWithoutIndex(nums:number[]){
    var list:number[] = [];
    for (var i = 0; i < nums.length; i++) {
        var n:number = 1;
        for(var j = 0; j< nums.length; j++){
            n *= j != i ? nums[j] : 1;
        }
        list.push(n);
    }

    return list;
}

console.log(multiplyWithoutIndex([1,2,3,4,5]));
console.log(multiplyWithoutIndex([3,2,1]));