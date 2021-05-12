//variable hoisting
//console.log(x)//error:x (variable) is not defined
x = 100; //assignment
console.log(x)//100

console.log(a)//undefined (a does not have value)
var a = 10; //declaration and assignment
//a = 10; //assignment
console.log(a)//10

for (var i = 0; i < 2; i++) {
    var a = 20;
    console.log(a)//20
}
console.log(a)//10

var fn = function () {
    var v = 10;
    console.log(a)
    console.log(v)

    // var fnB = function () {
    //     var f = 200;
    // }
}
var obj = {}
// console.log(v)
fn()
console.log(100)
//obj.print();
// var m = 10;
// var m = 20;

console.log(window)