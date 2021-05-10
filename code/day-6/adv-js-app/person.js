//constructor function syntax
function person(name, id, salary) {
    // var a = 10;
    //value properties
    this.personName = name;
    this.personId = id;
    this.personSalary = salary;

    //functional property
    this.show = function () {
        return this.personName + ', ' + this.personId + ', ' + this.personSalary;
    }
}
module.exports = {
    personFn: person
}