/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = []
    for (let char of s){
        if(char >= '0' && char <= '9') {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
     return stack.join('')
};