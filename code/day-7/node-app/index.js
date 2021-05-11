var calcModule = require('./calculation')

console.log('running in node js runtime...')
// console.log(add(10, 20))
// console.log(subtract(10, 5))
console.log(calcModule.addFn(10, 20))
console.log(calcModule.subtractFn(10, 5))