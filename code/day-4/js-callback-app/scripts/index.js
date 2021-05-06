//callback
function filterData(arr, fnRef) {
    var resultantArray = [];
    for (var index = 0; index < arr.length; index++) {
        var element = arr[index];
        // if (element % 2 == 0)
        var status = fnRef(element)
        if (status)
            resultantArray.push(element);

    }
    return resultantArray;
}

var isEven = function (num) {
    return num % 2 == 0 ? true : false;
}

var isOdd = function (num) {
    return num % 2 != 0;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//var result = filterData(numbers, isOdd);
var result = filterData(numbers, function (num) {
    return num > 4;
});
for (var i = 0; i < result.length; i++) {
    console.log(result[i])
}

var people = [{
    name: 'joydip',
    salary: 1000
}, {
    name: 'ANIL',
    salary: 500
}, {
    name: 'sunil',
    salary: 2000
}]

var filtered = filterData(people, function (person) {
    return person.salary < 1000;
})

var filteredByName = filterData(people, function (person) {
    var lowercaseName = person.name.toLowerCase()
    return lowercaseName.indexOf('n') != -1;
})
console.log(filteredByName)
