export class person {
    // private personName: string;
    // private personId: number;
    // private personSalary: number;

    // constructor(personName: string, personId: number, personSalary: number) {
    //     this.personId = personId;
    //     this.personName = personName;
    //     this.personSalary = personSalary;
    // }
    constructor(private personName: string, private personId: number, private personSalary: number) {

    }

    public show(): string {
        return this.personName + ', ' + this.personId + ', ' + this.personSalary
    }
}