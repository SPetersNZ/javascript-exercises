const leapYears = function(inputYear) {
    let bool = false;
      if (inputYear % 4 == 0) {
        bool = true;
      }
      if (inputYear % 4 == 0 && inputYear % 100 == 0) {
        bool = false;
      }
      if (inputYear % 4 == 0 && inputYear % 400 == 0) {
        bool = true;
      }
      if (bool == true) {
        return bool;
      } else {
        return bool;
      }
  };

// Do not edit below this line
module.exports = leapYears;
