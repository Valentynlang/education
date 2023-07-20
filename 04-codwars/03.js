function getSum(a, b) {
    const max = a < b ? b : a
    const min = a < b ? a : b

    let sum = 0
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum
}

console.log(getSum(1, 0))
console.log(getSum(1, 2))
console.log(getSum(0, 1))
console.log(getSum(1, 1))
console.log(getSum(-1, 0))
console.log(getSum(-1, 2))
