export abstract class BakingProcess {
    // Template Method
    bakeRecipe(): void {
        this.prepareIngredients();
        this.bake();
        this.slice();
    }

    // Steps to be implemented by subclasses
    abstract prepareIngredients(): void;
    abstract bake(): void;

    // Hook method with a default implementation
    slice(): void {
        console.log("Slicing the baked item.");
    }
}