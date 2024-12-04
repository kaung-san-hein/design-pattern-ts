import { BreadBaking } from "./concrete-classes/bread-baking";
import { CakeBaking } from "./concrete-classes/cake-baking";

console.log("Baking Bread:");
const bread = new BreadBaking();
bread.bakeRecipe();

console.log("\nBaking Cake:");
const cake = new CakeBaking();
cake.bakeRecipe();