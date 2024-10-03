const removeFromArray = function(arr, ...badItems) {
    let items = [];
    for (var i = 0; i < arr.length; i++) {
        if (!(badItems.includes(arr[i]))) {
             items.push(arr[i])
        }
    }
    return items;
};

// Do not edit below this line
module.exports = removeFromArray;
