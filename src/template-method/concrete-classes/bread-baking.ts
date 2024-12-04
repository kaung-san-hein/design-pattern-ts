import { BakingProcess } from "../abstract-class/baking-process";

export class BreadBaking extends BakingProcess {
    prepareIngredients(): void {
        console.log("Preparing flour, water, yeast, and salt for bread.");
    }

    bake(): void {
        console.log("Baking bread at 375°F for 30 minutes.");
    }

    slice(): void {
        console.log("Slicing bread into even pieces.");
    }
}