/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const group = {};
    const result = [];

    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];

        if (!group[size]) {
            group[size] = []
        }
        group[size].push(i)

        if (group[size].length === size) {
            result.push(group[size]);
            group[size] = []
        }
    }
    return result;
};