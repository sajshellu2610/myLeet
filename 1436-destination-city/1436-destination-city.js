/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let startCity = new Set();

    for (let path of paths){
        startCity.add(path[0]);
    }
    for(let path of paths) {
        if(!startCity.has(path[1])){
            return path[1]
        }
    }
};