//
// var reverseString = function(s) {
//     let i = 0, j = s.length - 1;
//     while (i < j) {
//         [s[i], s[j]] = [s[j], s[i]];
//         i++;
//         j--;
//     }
// };

var reverseString = function(s) {
    s.unshift(...s.splice(0).reverse())
};
let s =['s','d','e','f']

console.log(reverseString(s))