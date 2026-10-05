/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let totalSum = (n * (n + 1)) / 2;
    let divisibleCount = Math.floor(n / m);
    let divisibleSum = m * divisibleCount * (divisibleCount + 1) / 2;
     return totalSum - 2 * divisibleSum;
};