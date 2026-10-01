/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let sum = 0;
    for(let i=0; i<s.length; i++){
        const rev = 26 - (s.charCodeAt(i) - 97)
        const pos = i + 1

        sum += rev * pos
    }

    return sum;
};