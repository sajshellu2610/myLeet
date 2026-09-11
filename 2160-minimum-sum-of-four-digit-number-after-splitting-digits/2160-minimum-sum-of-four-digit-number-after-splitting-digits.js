/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let dig = num.toString().split('').sort();
    let left = 0, right = 0;

    for (let i = 0; i < dig.length; i++) {
        if (i % 2 === 0)
            right = right * 10 + Number(dig[i]);
        else
            left = left * 10 + Number(dig[i]);    
    }

    return left + right
};