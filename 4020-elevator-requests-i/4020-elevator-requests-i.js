/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    let tot = 0, prev = 0;
    for (const req of requests) {
        tot += Math.abs(prev - req);
        prev = req;
    }

    return tot;
};