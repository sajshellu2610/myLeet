/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    const s = String(x);
    let sum = 0;
    for (const c of s) {
        sum += c.charCodeAt(0) - 48;
    }

    return x % sum === 0 ? sum: -1;
};