function add(x, y) {
    return (x + y);
}

function subtract(x, y) {
    return (x - y);
}

function multiply(x, y) {
    return (x * y);
}

function divide(x, y) {
    return (x / y);
}

// var exportableMembers = {
//     addFn: add,
//     subFn: subtract
// }

// module.exports = exportableMembers;

module.exports = {
    addFn: add,
    subFn: subtract
}

// console.log(module.exports)