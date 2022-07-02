export class Order {
    name: string;
    address: string;
    amount: number;

    constructor(name: string, address: string, amount: number) {
        this.name = name;
        this.address = address;
        this.amount = amount;
    }

}