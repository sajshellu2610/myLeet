/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, org) {
    let bits = 0;
    for (let num of nums) {
        if (num % org !== 0) continue;
        const n = num / org;
        if ((n & (n - 1)) === 0)
            bits |= n;
    }

    return org * (++bits & -bits);
};