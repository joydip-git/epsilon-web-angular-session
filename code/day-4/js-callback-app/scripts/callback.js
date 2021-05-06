//there are two ways to call any function in JS:
//a. using the name of the function. in that case you should npt use inline function style
//inline function
/**
 * function fnB() {
    console.log('fnB')
}
fnB()
 */

//b. using a variable that stores the reference of the function
//in that case the function will be declared using inline style
//in inline style function declaration, name of the function does not matter, since the name can never be used to invoke that function
/**
 * var fnA = function () {
    console.log('fnA')
}
fnA();
 */


//callback is mechanism where a reference of a function is passed to another function, so that the another function can call the function using the address of the function
var fnA = function () {
    console.log('fnA')
}
console.log(typeof fnA)

function fnB() {
    console.log('fnB')
}

function invoke(fn) {
    //will call any of the above two functions
    //you have to inform call method about which function to call
    fn();
}

invoke(fnB)
invoke(fnA)

var getMarker = function () {

}
var fetchRemote = function () {

}
function assist(fnToAssist) {
    fnToAssist();
}

assist(getMarker)