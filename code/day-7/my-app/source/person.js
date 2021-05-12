/*
function person(name, id, salary) {
    this.personName = name;
    this.personId = id;
    this.personSalary = salary;
}
person.prototype.show = function () {
    return this.personName + ', ' + this.personId + ', ' + this.personSalary
}
export function trainer(name, id, salary, subject) {
    person.call(this, name, id, salary)
    this.personSubject = subject;    
}
trainer.prototype.show = function () {
        // return this.personName + ', ' + this.personId + ', ' + this.personSalary + ', ' + this.personSubject;
        const partialInfo = this.__proto__.show.apply(this);
        return partialInfo + ', ' + this.personSubject;
    }
}
Object.setPrototypeOf(trainer.prototype,person.prototype)
*/

//ES6: class, constructor, super keywords
export class person {
    constructor(name, id, salary) {
        this.personName = name;
        this.personId = id;
        this.personSalary = salary;
    }
    show() {
        return this.personName + ', ' + this.personId + ', ' + this.personSalary
    }
}
