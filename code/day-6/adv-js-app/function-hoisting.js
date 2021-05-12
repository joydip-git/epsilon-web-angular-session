//add(10, 20)//error: add is not a function
//function expression ( is not hoisted)
var add = function (a, b) {
    console.log(a + b)
}

subtract(10, 5)//5 <-- no error

//function declaration (is hoisted)
function subtract(a, b) {
    console.log(a - b);
}

add(30, 40) //70
subtract(90, 67) //23

function calculate(operation, first, second) {
    operation(first, second)//callback
}
calculate(add, 10, 20)

calculate(subtract, 19, 56)