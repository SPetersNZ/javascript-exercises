const findTheOldest = function(people) {
    let oldest
    const currentYear = (new Date()).getFullYear();
    for (let person of people) {
        if (!person.hasOwnProperty("yearOfDeath")) {
            oldest = people.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) >
            (currentYear - b.yearOfBirth) ? 1 : -1);
        } else {
            oldest = people.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) >
            (b.yearOfDeath - b.yearOfBirth) ? 1 : -1);
        }
        return oldest[oldest.length - 1];
    }
};

// Do not edit below this line
module.exports = findTheOldest;
