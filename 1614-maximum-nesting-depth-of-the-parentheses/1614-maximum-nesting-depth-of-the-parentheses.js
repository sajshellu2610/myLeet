/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0;
    let max = 0;

    for (let char of s) {
        if (char === "(") {
            count++;
        }
        if (count > max) {
            max = count;
        } else if (char === ")"){
            count--;
        }
    }
    return max;
};