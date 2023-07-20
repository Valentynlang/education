const symbol = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
}
var romanToInt = function(s) {
    let value = 0
    for (let i = 0; i < s.length; i++) {
        symbol[s[i]] < symbol[s[i+1]] ? value -= symbol[s[i]] : value += symbol[s[i]]
    } return value
}

console.log(romanToInt('LXV'))