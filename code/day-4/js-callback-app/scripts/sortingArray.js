function sortArray(arr, fnRef) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var status = fnRef(arr[i], arr[j])
            //console.log(status)
            //status == 0
            //status>0
            //status<0
            if (status > 0) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

var numbers = [1, 3, 4, 2, 6, 7, 5, 0, 8, 9]; //=> [5, 15, ....]
// sortArray(numbers, function (a, b) {
//     return a - b;
// });
numbers.sort(function (a, b) {
    return a - b;
})
console.log(numbers)

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

//people[0]['name']

// sortArray(people, function (p1, p2) {
//     var p1NameLowerCase = p1.name.toLowerCase()
//     var p2NameLowerCase = p2.name.toLowerCase();
//     return p1NameLowerCase[0] > p2NameLowerCase[0];
// })

people.sort(function (p1, p2) {
    var p1NameLowerCase = p1.name.toLowerCase()
    var p2NameLowerCase = p2.name.toLowerCase();
    return p1NameLowerCase[0] > p2NameLowerCase[0];
})

console.log(people)
