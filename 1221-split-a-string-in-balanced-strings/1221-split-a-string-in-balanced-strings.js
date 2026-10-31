/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let temp = 0;
    for(let char of s) {
        if(char == 'R') temp++
        else temp--

        if (temp == 0) count++
    }
    return count
};