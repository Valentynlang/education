var reverseWords = function(s) {
    return s.split(' ').map(w => w.split('').reverse().join('')).join(' ');
};

var reverseWords = function(s) {
    return s.split(' ').map((c) => c.split('').reverse().join('')).join(' ')
};

var reverseWords = function(s) {
    let res = '';
    let word = '';
    for (let c of s) {
        if (c === ' ') {
            res += word + c;
            word = '';
        } else {
            word = c + word;
        }
    }
    return res + word;
};