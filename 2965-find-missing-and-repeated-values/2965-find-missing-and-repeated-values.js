/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let seen = new Set();
    let repeated = 0;
    let missing = 0;

    let n = grid.length;
    let total = n * n;

    for (let row of grid) {
        for(let num of row) {
            if (seen.has(num)) {
                repeated = num;
            } else {
                seen.add(num);
            }
        }
    }

    for (let i = 1; i <= total; i++) {
        if(!seen.has(i)) {
            missing = i;
            break;
        }
    }
    return [repeated, missing];
};