const sumAll = function(...args) {
    if (args.length == 2) {
        if ((typeof (args[0]) == 'number' && typeof (args[1]) == 'number') && (args[0] >= 0 && args[1] >= 0)) {
            let sum = 0;
            let lesser = null;
            let greater = null;
            (args[0] > args[1]) ? (greater = args[0], lesser = args[1]) : (lesser = args[0], greater = args[1])
            for (let i = greater; i >= lesser; i--) {
                sum += i;
            }
            return sum;
        }
    }
    return 'ERROR'
};

// Do not edit below this line
module.exports = sumAll;
