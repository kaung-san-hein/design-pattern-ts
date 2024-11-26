import { SharedCharacter } from "../concrete-flyweight/shared-character";
import { Character } from "../interfaces/character";

export class CharacterFactory {
    private readonly characters: Map<string, Character> = new Map();

    getCharacter(type: string, sprite: string): Character {
        const key = `${type}:${sprite}`;
        if (!this.characters.has(key)) {
            this.characters.set(key, new SharedCharacter(type, sprite));
            console.log(`Created new character of type "${type}"`);
        }
        return this.characters.get(key)!;
    }
}