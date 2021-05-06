//1. object literal syntax
var person = {
    //value properties
    name: 'anil',
    salary: 2000,

    //functional properties
    print: function () {
        return this.name + ' ' + this.salary;
    }
}

console.log(person.name)
console.log(person['salary'])
console.log(person.print())

person.location = 'Bangalore';
person['id'] = 100;
console.log(person)

//2. constructor function 
var product = function (name, code, price, rating) {
    this.productName = name;
    this.productCode = code;
    this.productPrice = price;
    this.productRating = rating;
    this.showInfo = function () {
        return this.productName + ', ' + this.productPrice;
    }
}

var dellProduct = new product('dell laptop', 'dell-001', 67000, 4.5);
dellProduct.make = "Dell";
dellProduct['makeYear'] = 2019;

console.log(dellProduct)
console.log(dellProduct.productRating)
console.log(dellProduct['productCode'])
console.log(dellProduct.showInfo())
var fn = dellProduct['showInfo'];
//console.log(fn)
var boundFn = fn.bind(dellProduct);
console.log(boundFn())

console.log(window)

var people = [{
    name: 'anil',
    salary: 2000,
    print: function () {
        return 'Salary: ' + this.salary;
    }
}, {
    name: 'sunil',
    salary: 4000,
    print: function () {
        return 'Salary: ' + this.salary;
    }
}]

function printInfo(fnRef) {
    //fnRef --> print
    console.log(fnRef())
}
for (var i = 0; i < people.length; i++) {
    var p = people[i];
    var fn = p.print;
    /** fn-->window
     * window<--function () {
        return 'Salary: ' + this.salary;
    }
     */
    var boundFn = fn.bind(p);
    /**
     * p<--function () {
        return 'Salary: ' + this.salary;
    }
     */
    printInfo(boundFn);
}

