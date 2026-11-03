/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let n = nums.length;
    let ans = 0;

    while(n-- > 0) if (nums[n] % 3 !== 0) ans++;
        return ans;
};