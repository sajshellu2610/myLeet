/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for (let i = 2; i <= n-2; i++) {
        let temp = n;
        let dig = "";
        while (temp > 0) {
            let rem = temp % i;
            dig = rem.toString() + dig;
            temp = Math.floor(temp / i);
        }
        let rev = dig.split('').reverse().join('');
        if (dig !== rev) return false;
    }
    return true;
};