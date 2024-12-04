import { BakingProcess } from "../abstract-class/baking-process";

export class CakeBaking extends BakingProcess {
    prepareIngredients(): void {
        console.log("Preparing flour, sugar, eggs, butter, and vanilla for cake.");
    }

    bake(): void {
        console.log("Baking cake at 350°F for 25 minutes.");
    }

    slice(): void {
        console.log("Cutting the cake into triangular pieces.");
    }
}