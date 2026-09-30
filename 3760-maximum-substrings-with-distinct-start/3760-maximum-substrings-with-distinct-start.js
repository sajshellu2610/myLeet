/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    let mask = 0;
    let res = 0;
    for (const a of s) {
        const bit = 1<< (a.charCodeAt(0) - 97);
        if ((mask & bit) === 0) {
            mask |= bit;
            res++;
            if (res === 26) break;
        }
    }
    return res;
};