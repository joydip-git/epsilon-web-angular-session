define([], function () {
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

    // module.exports = {
    //     addFn: add,
    //     subFn: subtract
    // }

    // console.log(module.exports)
})

define([_module, './caluclation'], function () {
    var expotableMembersObject = _module.exports
    var a = 10;
    var b = 20;
    console.log(expotableMembersObject.addFn(a, b))
    console.log(expotableMembersObject.subFn(a, b))
})