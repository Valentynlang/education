// function findNextSquare(sq) {
//     if (Number.isInteger(Math.sqrt(sq)))
//         return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1)
//     else
//     return -1
// }
function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));