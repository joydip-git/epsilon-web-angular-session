import { person } from "./person";
export class trainer extends person {
    constructor(name, id, salary, subject) {
        super(name, id, salary);
        this.personSubject = subject;
    }
    show() {
        const partialInfo = super.show()
        return partialInfo + ', ' + this.personSubject;
    }
}