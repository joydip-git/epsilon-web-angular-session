//1. use bind() method to bind bothe inner and outer context (function and function execution context object) to the same object (same owner)
// var sayHi = function () {
//     this.hiMessage = "Hi...";
//     console.log(this.hiMessage)//"Hi..."

//     var sayHello = function () {
//         this.helloMessage = "Hello...";
//         console.log(this.hiMessage + ', ' + this.helloMessage)//"Hi..., Hello..."
//     }
//     //new sayHello();
//     sayHello = sayHello.bind(this)
//     sayHello()
// }
// var obj = new sayHi();
//sayHi()

//2. use a variable to store outext context owner refernce and use it inside the inner context
// var sayHi = function () {
//     this.hiMessage = "Hi...";
//     console.log(this.hiMessage)//"Hi..."
//     var self = this;

//     var sayHello = function () {
//         this.helloMessage = "Hello...";
//         console.log(self.hiMessage + ', ' + this.helloMessage)//"Hi..., Hello..."
//     }
//     //new sayHello();
//     // sayHello = sayHello.bind(this)
//     sayHello()
// }
// var obj = new sayHi();

//3. use new feature: arrow operator
var sayHi = function () {
    this.hiMessage = "Hi...";
    //console.log(this.hiMessage)//"Hi..."

    var sayHello = () => {
        this.helloMessage = "Hello...";
        console.log(this.hiMessage + ', ' + this.helloMessage)//"Hi..., Hello..."
    }
    //new sayHello();
    // sayHello = sayHello.bind(this)
    sayHello()
}
var obj = new sayHi();

var add = (a, b) => { console.log(a + b) }