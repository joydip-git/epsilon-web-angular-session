//contain code to load the app in the index.html file
'use strict'
import { add, subtract, multiply } from './calculation'
import { trainer } from './person'
console.log('running in browser runtime....')
console.log(add(10, 20))
console.log(subtract(10, 5))
console.log(multiply(10, 5))

const joydipTrainer = new trainer('joydip', 101, 10000, 'JS');
console.log(joydipTrainer)
console.log(joydipTrainer.show());
/*
console.log(person.prototype)
const anilPerson = new person('anil', 101, 200000);
console.log(anilPerson.__proto__)
Object.prototype.sayHi = function () {
    console.log('Hi....')
}
anilPerson.sayHi();
console.log(anilPerson.hasOwnProperty('sayHi'));
console.log(person.prototype.hasOwnProperty('sayHi'));
console.log(Object.prototype.hasOwnProperty('sayHi'))
var demo = {
    x: 20
}
console.log(demo.__proto__)
demo.sayHi()
*/
// function display() {
//     document.getElementById('addSpan').innerText = add(10, 20);
//     document.getElementById('subSpan').innerText = subtract(10, 20);
//     document.getElementById('multiSpan').innerText = multiply(10, 20);

//     const anilPerson = new person('anil', 101, 200000);
//     //console.log(anilPerson)
//     document.getElementById('nameSpan').innerText = anilPerson.personName;
//     document.getElementById('idSpan').innerText = anilPerson.personId;
//     document.getElementById('salarySpan').innerText = anilPerson.personSalary;
// }

// window.onload = display;



