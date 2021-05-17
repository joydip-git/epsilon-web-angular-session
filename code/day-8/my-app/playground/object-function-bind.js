//function expression
//sayHi();//error

console.log(this)

var sayHi = function () {
    this.message = 'Hi from the hiObject....'
    this.showMessage = function () {
        return this.message;
    }
}
//since there is no leading parent object (<obj-ref>.fn())
//in that case the owner of the context from where you are calling the function becomes the owner of that function
const hiObject = new sayHi();
//since there is a leading parent object (hiObject) while calling showMessage() method, the method will be bound to hiObject (hiObject is the owner of showMessage() method currently)
const messageResult = hiObject.showMessage();
console.log(messageResult)

let showMsgFn = hiObject.showMessage;
//since there is no leading parent object while calling showMsgFn() method, that's why unfortunatley showMsgFn() will be bound to the owner of the context from where showMsgFn is being called (in this respect window is the owner of GEC, hence the owner of showMsgFn)
const msg = showMsgFn();
console.log(msg)

showMsgFn = showMsgFn.bind(hiObject);
const properMsg = showMsgFn();
console.log(properMsg)

//sayHello();
//function declaration
function sayHello() {
    console.log(this)
}
sayHello();