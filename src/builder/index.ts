import { CustomPizzaBuilder } from "./concrete-builder/product-builder";

const builder = new CustomPizzaBuilder();

// Create a Margherita Pizza
const margheritaPizza = builder
    .setSize('Medium')
    .setCrust('Thin')
    .addTopping('Tomato')
    .addTopping('Basil')
    .addCheese()
    .build();

margheritaPizza.describe();

console.log('------------------');

// Create a Meat Lovers Pizza
const meatLoversPizza = builder
    .setSize('Large')
    .setCrust('Thick')
    .addTopping('Pepperoni')
    .addTopping('Sausage')
    .addTopping('Bacon')
    .build();

meatLoversPizza.describe();