// let rotate = function(nums, k) {
//     nums.unshift(...nums.splice(nums.length - k%nums.length))
// };

const rotate = (nums, k) => {
    while(k--) {
        nums.unshift(nums.pop());
    }
};

let numse = [1,2,3,4,5,6]
let ks = 3
let git = rotate([1,2,3,4,5,6], 3)

console.log(git)
