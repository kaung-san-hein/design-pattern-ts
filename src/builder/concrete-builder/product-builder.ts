import { PizzaBuilder } from "../interfaces/product-interface";
import { Pizza } from "../product";

export class CustomPizzaBuilder implements PizzaBuilder {
    private pizza: Pizza;

    constructor() {
        this.pizza = new Pizza();
    }

    setSize(size: string): PizzaBuilder {
        this.pizza.size = size;
        return this;
    }

    setCrust(crust: string): PizzaBuilder {
        this.pizza.crust = crust;
        return this;
    }

    addTopping(topping: string): PizzaBuilder {
        this.pizza.toppings.push(topping);
        return this;
    }

    addCheese(): PizzaBuilder {
        this.pizza.cheese = true;
        return this;
    }

    build(): Pizza {
        return this.pizza;
    }
}