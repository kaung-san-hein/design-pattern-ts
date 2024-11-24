import { GameCharacter } from "../interfaces/game-character";

export class BasicCharacter implements GameCharacter {
    getDescription(): string {
        return "Basic Character";
    }

    getSpeed(): number {
        return 10; // Default speed
    }

    getAttack(): number {
        return 5; // Default attack
    }

    getHealth(): number {
        return 50; // Default health
    }
}