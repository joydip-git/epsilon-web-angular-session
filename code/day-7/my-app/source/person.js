export function person(name, id, salary) {
    this.personName = name;
    this.personId = id;
    this.personSalary = salary;
    this.show = function () {
        return this.personName + ', ' + this.personId + ', ' + this.personSalary
    }
}