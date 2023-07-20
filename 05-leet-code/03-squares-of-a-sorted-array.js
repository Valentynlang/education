
var sortedSquares = function(nums) {
    let result = []
    let first = 0
    let last = nums.length - 1

    while (first <= last) {
        if (nums[first] ** 2 > nums[last] ** 2) result.unshift(nums[first++] ** 2)
        else result.unshift(nums[last--] ** 2)
    }
    return result
};

var sortedSquares2 = function(nums) {
    let result = []
    let first = 0
    let last = nums.length - 1

    while (first <= last) {
        if (nums[first] ** 2 > nums[last] ** 2) result.unshift(nums[first++] ** 2)
        else result.unshift(nums[last--] ** 2)
    }
    return result.sort((first, last) => first - last)
};
let nums = [-4,-1,0,3,10]

console.log(sortedSquares(nums))
console.log(sortedSquares2(nums))