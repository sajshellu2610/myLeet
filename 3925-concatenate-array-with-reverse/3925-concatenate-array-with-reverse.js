/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    const n = nums.length;
    const ans = new Array (2 * n);
    for(let i=0; i<2*n; i++){
        if (i<n) {
            ans[i] = nums[i];
        }else{
            ans[i] = nums[n - (i - n) - 1];
        }
    }
    return ans;
};