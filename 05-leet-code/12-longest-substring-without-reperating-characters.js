const lengthOfLongestSubstring = s => {
    // keeps track of the most recent index of each letter.
    const map = {};
    // keeps track of the starting index of the current substring.
    var left = 0;

    return s.split('').reduce((max, v, i) => {
        // starting index of substring is 1 + (the last index of this letter) to ensure this letter is not counted twice.
        left = map[v] >= left ? map[v] + 1 : left;
        // updates last recorded index of letter to the most recent index.
        map[v] = i;

        // indices of current substring is (idx - leftIdx, idx).
        // +1 because if your substring starts and ends at index 0, it still has a length of 1.
        return Math.max(max, i - left + 1);
    }, 0)
};

var lengthOfLongestSubstring = function(s) {
    const uniqueChars = new Set();
    let left = 0;
    let right = left;
    let maxLength = 0;

    while(right < s.length) {
        //Because we care about -contiguity-. once a duplicate is found
        //at position "right", we can no longer use the substring from position
        //"left" to the position of the first occurence of the duplicate character.
        //So, we need incrementing left (and deleting from uniqueChars to keep track
        //of a substring's uniqueness) until that occurence is found. Everything from
        //the position of the first occurence to position "right" is fine since they
        //will contain unique characters.
        while(uniqueChars.has(s.charAt(right))) {
            uniqueChars.delete(s.charAt(left));
            left++;
        }

        uniqueChars.add(s.charAt(right));
        maxLength = Math.max(maxLength, uniqueChars.size);
        right++;
    }

    return maxLength;
};