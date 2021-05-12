import { person } from "./person-ts";
export class trainer extends person {
    constructor(name: string, id: number, salary: number, private personSubject: string) {
        super(name, id, salary);
    }
    public show(): string {
        const partialInfo = super.show()
        return partialInfo + ', ' + this.personSubject;
    }
}