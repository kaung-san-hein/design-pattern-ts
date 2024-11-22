import { Pizza } from "../product";

export interface PizzaBuilder {
    setSize(size: string): PizzaBuilder;
    setCrust(crust: string): PizzaBuilder;
    addTopping(topping: string): PizzaBuilder;
    addCheese(): PizzaBuilder;
    build(): Pizza;
}