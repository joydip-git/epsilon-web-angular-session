console.log(a) //undefined
var a;//declaration
a = 10;
console.log(a)//10

//console.log(x)//Error:x is not defined
x = 20;//assignment
console.log(window.x)//20

for (var i = 0; i < 2; i++) {
    var a;
    a = 30;
    console.log(window.a)//30
}

sayHi(47)
function sayHi(m) {
    console.log(x)
    var a = 50
    console.log(this)
    this.data = 100
    console.log(a)
    console.log(this.a)
    //console.log(n)
    function print() {
        var n = 58
        console.log(n)
        console.log(x)
        console.log(a)
        console.log(this.a)
    }
    function show() {

    }
    print()
}

function other() {
    var f = 8
}
console.log(this.a)//30

sayHi(10)

console.log(window == this)
