import { CharacterDecorator } from "../abstract-decorators/character-decorator";

export class HealthBoostDecorator extends CharacterDecorator {
    getDescription(): string {
        return `${this.character.getDescription()}, with Health Boost`;
    }

    getHealth(): number {
        return this.character.getHealth() + 20; // Add 20 to health
    }
}