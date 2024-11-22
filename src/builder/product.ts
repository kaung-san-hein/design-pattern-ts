export class Pizza {
    size: string = '';
    crust: string = '';
    toppings: string[] = [];
    cheese: boolean = false;

    describe(): void {
        console.log(`Pizza Details:`);
        console.log(`- Size: ${this.size}`);
        console.log(`- Crust: ${this.crust}`);
        console.log(`- Toppings: ${this.toppings.join(', ') || 'None'}`);
        console.log(`- Cheese: ${this.cheese ? 'Yes' : 'No'}`);
    }
}