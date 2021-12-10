const fibonacci = function(x) {
    if (x < 0) {
        return 'OOPS';
    }

    if (typeof(x) == String) {
        x = Number(x);
    }

    let num = 1;
    let previous = 0;
    let hold;
    for (let i = 1; i < x; i++) {
        hold = num
        num += previous;
        previous = hold
        // console.log(i, num)
    }
    return num
};

// Do not edit below this line
module.exports = fibonacci;
