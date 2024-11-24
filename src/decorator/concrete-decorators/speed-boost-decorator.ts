import { CharacterDecorator } from "../abstract-decorators/character-decorator";

export class SpeedBoostDecorator extends CharacterDecorator {
    getDescription(): string {
        return `${this.character.getDescription()}, with Speed Boost`;
    }

    getSpeed(): number {
        return this.character.getSpeed() + 5; // Add 5 to speed
    }
}