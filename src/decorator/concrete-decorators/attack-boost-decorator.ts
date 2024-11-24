import { CharacterDecorator } from "../abstract-decorators/character-decorator";

export class AttackBoostDecorator extends CharacterDecorator {
    getDescription(): string {
        return `${this.character.getDescription()}, with Attack Boost`;
    }

    getAttack(): number {
        return this.character.getAttack() + 10; // Add 10 to attack
    }
}