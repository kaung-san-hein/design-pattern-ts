import { CharacterFactory } from "./factory-flyweight/character-factory";
import { Character } from "./interfaces/character";

class Game {
    private readonly factory = new CharacterFactory();
    private readonly characters: { character: Character; x: number; y: number }[] = [];

    addCharacter(type: string, sprite: string, x: number, y: number): void {
        const character = this.factory.getCharacter(type, sprite);
        this.characters.push({ character, x, y });
    }

    render(): void {
        this.characters.forEach(({ character, x, y }) => character.render(x, y));
    }
}

// Usage
const game = new Game();

// Adding characters
game.addCharacter('Orc', 'orc.png', 10, 20);
game.addCharacter('Elf', 'elf.png', 15, 25);
game.addCharacter('Orc', 'orc.png', 30, 40); // Shares the same instance as the first Orc

// Render all characters
game.render();