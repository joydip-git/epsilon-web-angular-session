//object literal syntax
// var anilperson = {
//     name: 'anil',
//     id: 1,
//     salary: 200,
//     printInfo: function () {
//         return this.name + ', ' + this.id + ', ' + this.salary;
//     }
// }

var managerModule = require("./personManager");

var personCount = 2;
var people = []
for (var index = 0; index < 2; index++) {
    var personRef = managerModule.createFn();
    people.push(personRef);
}

var anilPerson = new person('anil', 1, 2000)
var sunilPerson = new person('sunil', 2, 3000)

// console.log(anilPerson.personId)
// console.log(anilPerson['personName'])

//anilPerson.location = 'Bangalore'

// console.log(anilPerson.show())
//console.log(anilPerson.location)



for (var index = 0; index < people.length; index++) {
    var personRef = people[index]
    console.log(personRef.show())
}