/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let rev1 = Number(num.toString().split("").reverse().join(""));
    let rev2 = Number(rev1.toString().split("").reverse().join(""));

    return rev2 === num;
};