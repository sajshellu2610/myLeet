/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunArr = [];
    let index = 0;

    while(index < arr.length) {
        chunArr.push(arr.slice(index, index + size));
        index += size;
    }

    return chunArr;
};
