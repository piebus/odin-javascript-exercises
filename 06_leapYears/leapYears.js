const leapYears = function(year) {
    if (year % 4 == 0) {
        // A year divisible by 4 is a leap year
        // but if a year is divisible by 100 it is only a leap year
        // if it is also divisible by 400
        if (year % 100 == 0) {return year % 400 == 0;}
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
