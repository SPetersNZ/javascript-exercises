const sumAll = function(firstNum, secondNum) {
    let temp = 0;
    if (Number.isInteger(firstNum) == false || 
    Number.isInteger(secondNum) == false) {
      return "ERROR";
    }
    if (firstNum < 0 || secondNum < 0) {
      return "ERROR";
    }
    if (secondNum > firstNum) {
        for (let i = firstNum; i <= secondNum; i++) {
            temp += Math.abs(i);
        } 
    } else {
        for (let i = secondNum; i <= firstNum; i++) {
            temp += Math.abs(i);
        }
    }
    return temp;
};

// Do not edit below this line
module.exports = sumAll;
