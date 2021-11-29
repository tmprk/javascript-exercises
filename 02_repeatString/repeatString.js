const repeatString = function(str, count) {
    let entireString = '';
    if (count < 0) {
        return 'ERROR'
    }
    for (i = 0; i < count; i++) {
        entireString += str;
    }
    return entireString;
};

// Do not edit below this line
module.exports = repeatString;
