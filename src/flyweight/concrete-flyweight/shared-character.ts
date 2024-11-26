import { Character } from "../interfaces/character";

export class SharedCharacter implements Character {
    private readonly type: string;
    private readonly sprite: string;

    constructor(type: string, sprite: string) {
        this.type = type;
        this.sprite = sprite;
    }

    render(x: number, y: number): void {
        console.log(`Rendering ${this.type} at (${x}, ${y}) with sprite ${this.sprite}`);
    }
}