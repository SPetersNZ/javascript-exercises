const palindromes = function (str) {
    let arr1 = str.split("");
    let arr2 = arr1.slice().reverse();          // .slice creates a new string
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
};

// Do not edit below this line
module.exports = palindromes;