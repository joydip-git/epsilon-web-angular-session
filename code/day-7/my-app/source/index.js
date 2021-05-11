//var calcModule = require('./calculation')
// console.log(calcModule.addFn(10, 20))
// console.log(calcModule.subtractFn(10, 5))


import { add, subtract } from './calculation'
console.log('running in browser runtime....')
console.log(add(10, 20))
console.log(subtract(10, 5))

// define([
//     'require',
//     './calculation'
// ], function (require, factory) {
//     'use strict';
//     console.log('running in browser runtime....')
//     console.log(add(10, 20))
//     console.log(subtract(10, 5))
// });