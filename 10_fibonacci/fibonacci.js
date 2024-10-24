const fibonacci = function(input) {
    const num = Number(input);
    if (Number.isNaN(num)) {return "OOPS";}
    if (num < 0) {return "OOPS";}
    return fibHelper(num);
};

function fibHelper(number) {
    if (number == 0) {return 0;}
    if (number == 1) {return 1;}
    return fibHelper(number-1) + fibHelper(number-2);
}

// Do not edit below this line
module.exports = fibonacci;
