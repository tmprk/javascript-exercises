const palindromes = function (word) {
    let backwards = '';
    let lower = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/ /g, '');
    for (let i = lower.length - 1; i >= 0; i--) {
        backwards += lower[i]
    }
    return backwards === lower;
};

// Do not edit below this line
module.exports = palindromes;
