//contain code to load the app in the index.html file
import { add, subtract, multiply } from './calculation'
import { person } from './person'
console.log('running in browser runtime....')
console.log(add(10, 20))
console.log(subtract(10, 5))
console.log(multiply(10, 5))

const anilPerson = new person('anil', 101, 200000);
console.log(anilPerson.show())

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



