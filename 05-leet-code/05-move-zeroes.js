

function moveZeroes  (nums) {
    let j = 0
    let i = 1
    while (i < nums.length) {
        if (nums[j] === 0 && nums[i] !== 0) {
            nums[j] = nums[i]
            nums[i] = 0
            j++
        }
        if (nums[j] !== 0) {
            j++
        }
        i++
    }
};

/////

const moveZeroes2 = (nums) => {
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        if (nums[right] !== 0) {
            const temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            left++;
        }
        right++;
    }
    return nums;
};

console.log(moveZeroes2([0,2,4,0,2]))
