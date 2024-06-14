const reverseString = function(inputString) {
    let tempString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        tempString += inputString[i];
    }
    return tempString;
};

// Do not edit below this line
module.exports = reverseString;
