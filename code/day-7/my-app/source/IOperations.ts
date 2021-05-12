export interface IOperation {
    deposit(amount: number): boolean;
    withdraw(amount: number): boolean;
}

export interface IProduct {
    name: string;
    id: number;
    price: number;
    decsription: string;
    imagePath: string;
}

export class Product implements IProduct {
    name: string;
    id: number;
    price: number;
    decsription: string;
    imagePath: string;
}