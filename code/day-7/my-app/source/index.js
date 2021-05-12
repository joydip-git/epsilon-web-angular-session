import { add, subtract, multiply } from './calculation'
import { person } from './person'
console.log('running in browser runtime....')
console.log(add(10, 20))
console.log(subtract(10, 5))
console.log(multiply(10, 5))

const anilPerson = new person('anil', 101, 200000);
console.log(anilPerson)

