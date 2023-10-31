const findTheOldest = function(people) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return people.sort((a, b) => {
        let aAge = a.yearOfDeath ?
            a.yearOfDeath - a.yearOfBirth :
            currentYear - a.yearOfBirth;
        let bAge = b.yearOfDeath ?
            b.yearOfDeath - b.yearOfBirth :
            currentYear - b.yearOfBirth;
        return bAge - aAge;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
