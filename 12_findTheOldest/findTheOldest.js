const findTheOldest = function(people) {
   const oldie = people.reduce((oldest, currentPerson) => {
        return getAge(oldest) > getAge(currentPerson) ? oldest : currentPerson;
   });
   return oldie;
};

function getAge(person) {
    deathYear = person.yearOfDeath ?? new Date().getFullYear();
    return deathYear - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
