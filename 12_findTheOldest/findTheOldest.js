const findTheOldest = function (arr) {
    let year = new Date().getFullYear();
    return arr.reduce((acc, item) => {
        let age = (item.yearOfDeath || year) - item.yearOfBirth
        console.log(age, (acc.yearOfDeath || year) - acc.yearOfBirth)
        return age > ((acc.yearOfDeath || year) - acc.yearOfBirth) ? item : acc
    }, arr[0])
};

// Do not edit below this line
module.exports = findTheOldest;
