const fibonacci = function(input) {
    if (input < 0) {
        return "OOPS";
    }
    if (input == 0) {
        return 0;
    } 
    let fibArr = [];
    fibArr[0] = 1;
    fibArr[1] = 1;
    for (let i = 2; i < input; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr[fibArr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;