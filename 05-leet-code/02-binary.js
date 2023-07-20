var search = function(nums, target) {
    lo = 0,
        hig = nums.length
    while (lo < hig) {
        let mid = lo + Math.floor((hig-lo+1)/2)
        if (target < nums[mid]){
            hig = mid-1
        }else {
            lo = mid
        }
    }return nums[lo] == target ? lo+1 : -1
};

console.log(search([-1,0,3,5,9,12], 0));

////////

var solution = function(isBadVersion) {
    return function(n) {
        let start = 1
        let end = n

        while(start< end) {
            let mid = start + Math.floor((start+end)/2)

            if(isBadVersion(mid)) {
                end = mid
            } else {
                start = mid + 1
            }
        }
        return start
    };
};

///
var searchInsert = function(nums, target) {
    let start = 0, end = nums.length

    while(start < end) {
        let mid = start + Math.floor((end-start)/2)
        if (target > nums[mid]) {
            start = mid + 1
        }else {
            end = mid
        }
    }return start
};



console.log(searchInsert([1,3,5,6], 5))