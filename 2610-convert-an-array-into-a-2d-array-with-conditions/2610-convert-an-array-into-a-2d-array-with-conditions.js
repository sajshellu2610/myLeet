/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let res = [];
    let freq = {};

    for (let num of nums) {
        if(!freq[num]) {
            freq[num] = 0;
        }
        let row = freq[num];
        
        if(!res[row]){
            res[row]=[];
        }
        res[row].push(num);
        freq[num]++;
    }
    return res;
};