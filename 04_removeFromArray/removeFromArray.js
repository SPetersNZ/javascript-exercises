const removeFromArray = function(inputArr, requiredItemToRemove,
...optionalItemsToRemove) {
        let i = 0;
        while (i < inputArr.length) {
            if (inputArr[i] === requiredItemToRemove || 
            optionalItemsToRemove.includes(inputArr[i])) {
                inputArr.splice(i, 1);
            } else {
                i++;
            }
        }
        return inputArr;
    };

// Do not edit below this line
module.exports = removeFromArray;
