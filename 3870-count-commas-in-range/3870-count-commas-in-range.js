/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let comma = 0;
    for(let i = 1000; i <= n; i++){
        comma++;
    }
    return comma;
};