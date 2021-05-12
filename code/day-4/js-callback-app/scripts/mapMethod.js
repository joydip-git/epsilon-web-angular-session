var numbers = [1, 3, 4, 2, 6, 7, 5, 0, 8, 9];

var numbersMultiplied = numbers.map(function (element) {
    return element * 5;
})
console.log(numbersMultiplied)

var evenOrOdd = numbersMultiplied.map(function (element) {
    var propValue = element % 2 == 0;
    return { [element]: propValue }
})

console.log(evenOrOdd)