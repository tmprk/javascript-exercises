const removeFromArray = function(arr, ...toRemove) {
    for (i = 0; i < toRemove.length; i++) {
        let index = arr.indexOf(toRemove[i])
        if (index !== -1) {
            arr.splice(index, 1);
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
