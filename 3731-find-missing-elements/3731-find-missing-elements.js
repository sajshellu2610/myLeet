/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    const see = new Set(nums);

    let mnm = Math.min(...nums);
    let mxm = Math.max(...nums);

    const ans = [];

    for (let x = mnm; x <= mxm; x++) {
        if (!see.has(x)) {
            ans.push(x);
        }
    }
    return ans
};