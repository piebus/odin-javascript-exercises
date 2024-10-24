const palindromes = function (str) {

    const consideredCharacters = "abcdefghijklmnopqrstuvwxyz1234567890"

    str = str.toLowerCase();
    const forwardsArray = str.split("")
        .filter((char) => consideredCharacters.includes(char));

    //make a copy of the array because .reverse() modifies the original array
    var backwardsArray = forwardsArray.slice();
    backwardsArray.reverse();

    return forwardsArray.join("") == backwardsArray.join("");
};

// Do not edit below this line
module.exports = palindromes;
