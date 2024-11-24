import { GameCharacter } from "../interfaces/game-character";

export abstract class CharacterDecorator implements GameCharacter {
    constructor(protected character: GameCharacter) { }

    getDescription(): string {
        return this.character.getDescription();
    }

    getSpeed(): number {
        return this.character.getSpeed();
    }

    getAttack(): number {
        return this.character.getAttack();
    }

    getHealth(): number {
        return this.character.getHealth();
    }
}
