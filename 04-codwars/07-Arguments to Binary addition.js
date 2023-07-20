function arr2bin(arr){
    return arr
        .reduce((a,b) => (typeof b ==="number" ? a + b : a), 0)
        .toString(2)
}

console.log(arr2bin([1, 2]));
console.log(arr2bin([1, 2, 'a']));
console.log(arr2bin([]));