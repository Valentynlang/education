const twoSum = (numbers, target) => {
    let p1 = 0
    let p2 = numbers.length - 1

    while (numbers[p1] + numbers[p2] !== target) {
        if (numbers[p1] + numbers[p2] > target) {
            p2--
        } else {
            p1++
        }
    }

    return [p1 + 1, p2 + 1]
}

function twoSum2(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
        if (numbers[start] + numbers[end] === target) return [start + 1, end + 1];
        if (numbers[start] + numbers[end] > target) {
            end--;
        } else {
            start++;
        }
    }
    return [];
}